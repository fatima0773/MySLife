import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const WelcomeLogin = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>WELCOME TO </Text>
      <Text style={[styles.heading, {color: '#0C866C'}]}>MY S LIFE</Text>
      <Text style={styles.secondaryText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F0D7D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'Spartan-Bold',
    fontSize: 30,
    color: '#000000',
    textAlign: 'center',
  },
  secondaryText: {
    fontFamily: 'Spartan-Regular',
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    paddingHorizontal: 45,
    lineHeight: 24,
    marginTop: 130,
  },
});

export default WelcomeLogin;
