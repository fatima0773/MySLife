import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomBtn from '../login/components/customBtn';

const OtpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Verification</Text>
      <Text style={styles.subText}>
        A verification code has been sent to your registered phone number.
        Please enter the number below
      </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.otpInputField}></TextInput>
      <Text
        style={[
          styles.subText,
          {fontFamily: 'Spartan-Regular', marginTop: 30},
        ]}>
        You haven't received the code ?
      </Text>
      <TouchableOpacity>
        <Text
          style={[
            styles.subText,
            {
              fontFamily: 'Spartan-Regular',
              marginTop: 30,
              color: '#E6ABAE',
              textDecorationLine: 'underline',
            },
          ]}>
          Send it again
        </Text>
      </TouchableOpacity>
      <CustomBtn
        navigation={navigation}
        pressHandler={() =>
          navigation.navigate('SignupNavigation', {screen: 'WelcomeSignup'})
        }
        title={'Validate'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
    marginBottom: 50,
    padding: 5,
  },
  subText: {
    fontFamily: 'Spartan-Medium',
    fontSize: 14,
    color: 'black',
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  otpInputField: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#F8F8F8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 25,
    fontFamily: 'Spartan-Bold',
    color: 'black',
    width: '60%',
    marginTop: 30,
    textAlign: 'center',
  },
});

export default OtpScreen;
