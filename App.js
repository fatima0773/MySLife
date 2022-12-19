import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from './src/splash/splash';

import RootNavigator from './src/navigation/rootNavigator';

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
    return <RootNavigator />;
  }
};

export default App;
