import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
import {exp} from 'react-native/Libraries/Animated/Easing';
import Location from '../location/location';
import Messages from '../messages/messages';
import NewPost from '../post/newPost';
import PrivateModal from '../userProfile/privateModal';
import UserProfileNavigation from './userProfileNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return (
              <Image
                source={require('../../assets/images/bottomTabBar/homeIcon.png')}
              />
            );
          } else if (route.name === 'Location') {
            return (
              <Image
                source={require('../../assets/images/bottomTabBar/locationIcon.png')}
              />
            );
          } else if (route.name === 'Post') {
            return (
              <Image
                source={require('../../assets/images/bottomTabBar/addBtn.png')}
              />
            );
          } else if (route.name === 'Favorites') {
            return (
              <Image
                source={require('../../assets/images/bottomTabBar/starIcon.png')}
              />
            );
          } else if (route.name === 'Messages') {
            return (
              <Image
                source={require('../../assets/images/bottomTabBar/messageIcon.png')}
              />
            );
          }
          return (
            <Image
              source={require('../../assets/images/bottomTabBar/homeIcon.png')}
            />
          );
        },
        tabBarBackground: () => {
          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,
              elevation: 24,
            }}
          />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          width: '100%',
          height: 66,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={UserProfileNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Post"
        component={NewPost}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favorites"
        component={PrivateModal}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
