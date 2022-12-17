import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const LogInBtn = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate('LoginNavigation', {screen: 'SignIn'})
      }>
      <Text style={styles.text}>Login here</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0C866C',
    height: 50,
    width: 240,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    color: 'white',
    fontFamily: 'Spartan-Medium',
    fontSize: 16,
  },
});

export default LogInBtn;
