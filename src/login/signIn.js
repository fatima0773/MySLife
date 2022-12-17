import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InputBox from './components/inputBox';
import {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import CustomBtn from './components/customBtn';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignIn = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Sign In</Text>
      <InputBox title={'Email'} />
      <InputBox title={'Password'} />
      <View style={styles.mainBox}>
        <View style={styles.secondaryBox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={true ? 'pink' : '#E6ABAE'}
            onFillColor={'#E6ABAE'}
          />

          <Text style={styles.secondaryText}>Remember me?</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('LoginNavigation', {screen: 'ForgotPassword'})
          }>
          <Text style={styles.secondaryText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <CustomBtn
        navigation={navigation}
        pressHandler={() =>
          navigation.navigate('LoginNavigation', {screen: 'WelcomeLogin'})
        }
        title={'Sign in'}
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
    padding: 5,
    fontFamily: 'Spartan-SemiBold',
    fontSize: 28,
    color: '#333333',
    lineHeight: 31.36,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 5,
    marginTop: 130,
    marginBottom: 100,
  },
  mainBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: (windowWidth - 343) / 2,
    paddingHorizontal: 10,
  },
  secondaryBox: {
    marginLeft: (windowWidth - 343) / 2,

    flexDirection: 'row',
    alignItems: 'center',
  },
  secondaryText: {
    color: '#535A73',
    fontFamily: 'Spartan-Regular',
    fontSize: 16,
  },
});

export default SignIn;
