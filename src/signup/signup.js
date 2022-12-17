import {StyleSheet, Text, View} from 'react-native';
import CustomBtn from '../login/components/customBtn';
import InputBox from '../login/components/inputBox';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Sign up</Text>
      <InputBox title={'Email'} />
      <InputBox title={'Mobile'} />
      <InputBox title={'Password'} />
      <InputBox title={'Confirm Password'} />
      <CustomBtn
        title={'Next'}
        navigation={navigation}
        pressHandler={() =>
          navigation.navigate('SignupNavigation', {screen: 'SignupDetails'})
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
    marginBottom: 90,
    padding: 5,
  },
});

export default SignUp;
