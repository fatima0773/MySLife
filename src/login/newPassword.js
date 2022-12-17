import {StyleSheet, Text, View} from 'react-native';
import CustomBtn from './components/customBtn';
import InputBox from './components/inputBox';

const NewPassword = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Forgot Password</Text>
      <InputBox title={'New Password'} />
      <InputBox title={'Confirm Password'} />
      <CustomBtn
        title={'Validate'}
        navigation={navigation}
        pressHandler={() =>
          navigation.navigate('LoginNavigation', {screen: 'WelcomeLogin'})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Spartan-SemiBold',
    fontSize: 28,
    color: '#333333',
    lineHeight: 31.36,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 5,
    marginTop: 130,
    marginBottom: 120,
  },
});

export default NewPassword;
