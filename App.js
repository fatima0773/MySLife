import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from './src/splash/splash';
import OnBoarding from './src/onBoarding/onBoarding';
import SignIn from './src/login/signIn';
import ForgotPassword from './src/login/forgotPassword';
import NewPassword from './src/login/newPassword';

import WelcomeLogin from './src/welcome/welcome_login';
import SignUp from './src/signup/signup';
import SignupDetails from './src/signup/signupDetails';
import TermsAndCondition from './src/signup/termsAndConditions';
import OtpScreen from './src/signup/optScreen';
import WelcomeSignup from './src/welcome/welcome_signup';
import RootNavigator from './src/navigation/rootNavigator';
import InternalProfileView from './src/userProfile/internalProfileView';
import EditProfile from './src/userProfile/editProfile';
import PrivateModal from './src/userProfile/privateModal';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        setTimeout(() => {
          setShowSplash(false);
        }, 100000);
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null && showSplash) {
    return <Splash />;
  } else {
    return (
      <PrivateModal />
      // <EditProfile />
      // <InternalProfileView />
      // <RootNavigator />
      // <WelcomeSignup />
      // <OtpScreen />
      // <TermsAndCondition />
      // <SignupDetails />
      // <SignUp />
      // <WelcomeLogin />
      // <NewPassword />
      // <ForgotPassword />
      // <SignIn />
      // <OnBoarding />
    );
  }
};

export default App;
