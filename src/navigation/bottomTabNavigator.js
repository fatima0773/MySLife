import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {exp} from 'react-native/Libraries/Animated/Easing';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return <TabButton option={1} />;
          } else if (route.name === 'Location') {
            return <TabButton option={2} />;
          } else if (route.name === 'Post') {
            return <TabButton option={3} />;
          } else if (route.name === 'Favorites') {
            return <TabButton option={4} />;
          } else if (route.name === 'Messages') {
            return <TabButton option={5} />;
          }
          return <TabButton option={1} />;
        },
        tabBarBackground: () => {
          <View
            style={{
              width: '100%',
              height: 65,
              //   shadowColor: '#000',
              //   shadowOffset: {
              //     width: 0,
              //     height: 12,
              //   },
              //   shadowOpacity: 0.58,
              //   shadowRadius: 16.0,
              //   elevation: 24,
              backgroundColor: 'white',
              marginTop: 'auto',
            }}
          />;
        },
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
      })}>
      {/* <Tab.Screen
        name="Home"
        component={MainNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Status"
        component={Status}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={CompanyProfileNavStack}
        options={{headerShown: false}}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
