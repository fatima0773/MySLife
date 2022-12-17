import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Interests from '../../signup/components/interests';
import AntIcons from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const About = ({message, lineDescription, age, dob, btnTitle}) => {
  const interests = ['Menopause', 'Pre-menopause'];

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.messagetext}>{message}</Text>
      <Text style={styles.subText}>{lineDescription}</Text>
      <FlatList
        data={interests}
        renderItem={({item}) => <Interests title={item} />}
        numColumns={2}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 18,
        }}>
        <Image source={require('../../../assets/images/ageIcon.png')} />
        <Text style={styles.standardText}>{age}</Text>
        <AntIcons name="calendar" color={'#754845'} size={19} />
        <Text style={styles.standardText}>{dob}</Text>
      </View>
      <TouchableOpacity
        style={styles.editProfileBtn}
        onPress={() => setFollow(true)}>
        <Text style={[styles.standardText, {color: 'white'}]}>{btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  messagetext: {
    fontFamily: 'Spartan-Bold',
    color: '#754845',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
  },
  subText: {
    fontFamily: 'Spartan-Regular',
    color: '#737373',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 15,
  },
  standardText: {
    fontFamily: 'Spartan-Bold',
    color: '#737373',
    fontSize: 14,
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 25,
  },
  editProfileBtn: {
    backgroundColor: '#0C866C',
    width: 165,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default About;
