import {Image, StyleSheet, Text, View} from 'react-native';
import LogInBtn from './components/loginBtn';
import SignUpBtn from './components/signUpBtn';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/images/splashPicture.png')}
      />
      <SignUpBtn navigation={navigation} />
      <View style={styles.loginContainer}>
        <Text style={styles.text}>Already have an account?</Text>
        <LogInBtn navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 317.29,
    width: 334.57,
    marginBottom: 120,
    marginTop: 90,
  },
  loginContainer: {
    width: '100%',
    height: 154,
    backgroundColor: '#F8F4ED',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Spartan-Bold',
    color: 'black',
  },
});

export default OnBoarding;
