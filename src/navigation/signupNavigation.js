import {createStackNavigator} from '@react-navigation/stack';
import OtpScreen from '../signup/optScreen';
import SignUp from '../signup/signup';
import SignupDetails from '../signup/signupDetails';
import TermsAndCondition from '../signup/termsAndConditions';
import WelcomeSignup from '../welcome/welcome_signup';

const Stack = createStackNavigator();

const SignupNavigation = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupDetails"
        component={SignupDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndCondition}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeSignup"
        component={WelcomeSignup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SignupNavigation;
