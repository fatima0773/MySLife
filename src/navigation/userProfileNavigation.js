import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../userProfile/editProfile';
import InternalProfileView from '../userProfile/internalProfileView';
import PrivateModal from '../userProfile/privateModal';

const Stack = createStackNavigator();

const UserProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InternalProfileView"
        component={InternalProfileView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivateModal"
        component={PrivateModal}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UserProfileNavigation;
