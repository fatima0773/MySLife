import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import About from './components/about';
import Header from './components/header';
import Profile from './components/profile';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PrivateModal = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header userName={'Farida'} />
      <Profile />
      <About
        message={'My message to My S Life Community'}
        lineDescription={
          'line description will be here. Lorem ipsum dolor sit amet, consecteturdskdlk adipisicing elit, sed do'
        }
        age={'27 Y.O'}
        dob={'17 July, 2018'}
        btnTitle={'Follow'}
      />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
        <Image source={require('../../assets/images/lock.png')} />
        <Text style={styles.text}>Follow to see the user's posts and feed</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Spartan-Bold',
    color: '#0C866C',
    marginTop: 15,
    fontSize: 14,
    textAlign: 'center',
  },
});
export default PrivateModal;
