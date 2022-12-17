import {createStackNavigator} from '@react-navigation/stack';
import NewPassword from '../login/newPassword';
import SignIn from '../login/signIn';
import ForgotPassword from '../login/forgotPassword';
import WelcomeLogin from '../welcome/welcome_login';

const Stack = createStackNavigator();

const LoginNavigation = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeLogin"
        component={WelcomeLogin}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
