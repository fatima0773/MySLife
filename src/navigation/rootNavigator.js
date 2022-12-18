import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../onBoarding/onBoarding';
import SignUp from '../signup/signup';
import BottomTabNavigator from './bottomTabNavigator';
import LoginNavigation from './loginNavigation';
import SignupNavigation from './signupNavigation';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginNavigation"
          component={LoginNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupNavigation"
          component={SignupNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
