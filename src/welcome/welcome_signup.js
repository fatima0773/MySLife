import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const WelcomeSignup = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{marginTop: 190}}>
        <Text style={styles.heading}>WELCOME TO </Text>
        <Text style={[styles.heading, {color: '#0C866C'}]}>MY S LIFE</Text>
      </View>
      <Text style={styles.secondaryText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('')}
        style={{marginTop: 'auto', marginBottom: 30}}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F0D7D4',
    alignItems: 'center',
  },
  skipText: {
    fontFamily: 'Spartan-Bold',
    color: 'grey',
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

export default WelcomeSignup;
