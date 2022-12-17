import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CustomBtn from '../login/components/customBtn';
import InputBox from '../login/components/inputBox';
import HorizontalBtnGroup from './components/horizontalBtnGroup';
import Interests from './components/interests';
import PurposeBtnGroup from './components/purposeBtnGroup';
import SearchBar from './components/searchBar';
import VerticalBtnGroup from './components/verticaBtbGroup';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignupDetails = ({navigation}) => {
  const interests = ['Menopause', 'Pre-menopause'];
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.heading}>Please Complete {'\n'} your details</Text>
        <InputBox title={'Family Name'} />
        <InputBox title={'Name'} />
        <Text style={styles.standardText}>Are you a woman?</Text>
        <VerticalBtnGroup />
        <InputBox title={'Birthday'} />
        <Text style={styles.standardText}>
          My message to My S Life Community
        </Text>
        <HorizontalBtnGroup />
        <SearchBar />
        <View
          style={{
            width: '100%',
            marginBottom: 20,
          }}>
          <FlatList
            data={interests}
            renderItem={({item}) => <Interests title={item} />}
            numColumns={2}
          />
        </View>
        <Text style={styles.standardText}>What are you here for?</Text>
        <PurposeBtnGroup />
        <View style={styles.secondaryBox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={true ? 'pink' : '#E6ABAE'}
            onFillColor={'#E6ABAE'}
          />

          <Text style={styles.secondaryText}>by clicking I agree to</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SignupNavigation', {
                screen: 'TermsAndConditions',
              })
            }>
            <Text style={[styles.secondaryText, {color: '#218cde'}]}>
              {' '}
              terms & conditions privacy policy
            </Text>
          </TouchableOpacity>
        </View>
        <CustomBtn
          navigation={navigation}
          pressHandler={() =>
            navigation.navigate('SignupNavigation', {screen: 'OtpScreen'})
          }
          title={'Sign Up'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: 'Spartan-SemiBold',
    fontSize: 28,
    color: '#333333',
    lineHeight: 31.36,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 5,
    marginTop: 55,
    marginBottom: 70,
    padding: 5,
    alignSelf: 'center',
    textAlign: 'center',
  },
  standardText: {
    color: '#333333',
    fontFamily: 'Spartan-Medium',
    paddingHorizontal: 5,
    fontSize: 16,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  secondaryBox: {
    marginLeft: (windowWidth - 343) / 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth,
  },
  secondaryText: {
    color: '#535A73',
    fontFamily: 'Spartan-Regular',
    fontSize: 13,
  },
});

export default SignupDetails;
