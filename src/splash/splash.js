import {Image, StyleSheet, Text, View} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>My S Life</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/splashPicture.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 317.29,
    width: 334.57,
  },
  text: {
    color: '#754845',
    fontSize: 36,
    fontFamily: 'Spartan-Regular',
    marginBottom: 70,
  },
});

export default Splash;
