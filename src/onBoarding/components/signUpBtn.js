import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SignUpBtn = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('SignupNavigation', {screen: 'SignUp'})
      }
      style={styles.button}>
      <Text style={styles.text}>Sign up</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 40,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#734945',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Spartan-Regular',
    fontSize: 16,
    color: '#734945',
  },
});

export default SignUpBtn;
