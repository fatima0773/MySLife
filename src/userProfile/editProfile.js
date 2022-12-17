import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './components/header';
import Profile from './components/profile';
import {SelectList} from 'react-native-dropdown-select-list';
import {useState} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Interests from '../signup/components/interests';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EditProfile = () => {
  const userName = 'Amanda';
  const message = 'My message to My S...';
  const dob = '17-07-2018';
  const age = '27 Y.O';
  const data = [
    {key: '1', value: 'Private'},
    {key: '2', value: 'Public'},
  ];
  const [selected, setSelected] = useState('');
  const interests = ['Menopause', 'Pre-menopause'];
  const [addTag, setAddTag] = useState(false);

  return (
    <ScrollView style={styles.mainContainer}>
      <Header userName={'Amanda'} />
      <Profile edit={true} />
      <SelectList
        boxStyles={{
          marginHorizontal: 16,
          marginTop: 34,
          borderColor: '#E0E0E0',
        }}
        dropdownTextStyles={{color: 'black'}}
        dropdownStyles={{marginHorizontal: 16}}
        inputStyles={{color: 'black'}}
        fontFamily="Spartan-Medium"
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
        defaultOption={{key: '1', value: 'Private'}}
      />
      <TextInput
        style={styles.inputTextStyle}
        placeholderTextColor={'black'}
        placeholder={userName}
      />
      <TextInput
        style={[styles.inputTextStyle, {color: '#754845'}]}
        placeholderTextColor={'#754845'}
        placeholder={message}
      />
      <TextInput
        style={[
          styles.inputTextStyle,
          {color: '#737373', fontFamily: 'Spartan-Regular'},
        ]}
        placeholderTextColor={'#737373'}
        placeholder={' line description will be here. Lorem ...'}
      />
      <View style={styles.interestsBox}>
        <FlatList
          data={interests}
          renderItem={({item}) => <Interests title={item} />}
          numColumns={2}
        />
      </View>
      {addTag === true ? (
        <View style={styles.box}>
          <TextInput
            style={{
              fontFamily: 'Spartan-SemiBold',
              flex: 1,
              color: 'black',
              padding: 10,
              paddingLeft: 20,
            }}
            placeholderTextColor={'#737373'}
            placeholder="Tag"
          />
          <AntDesignIcons name="search1" color={'#BDBDBD'} size={25} />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.addTagBtn}
        onPress={() => {
          addTag === true ? setAddTag(false) : setAddTag(true);
        }}>
        {addTag === false ? (
          <IonIcon name="add" color={'white'} size={18} />
        ) : (
          <EntypoIcons name="minus" color={'white'} size={18} />
        )}

        <Text style={[styles.saveBtnText, {fontSize: 11, paddingLeft: 5}]}>
          Add new tags
        </Text>
      </TouchableOpacity>
      <View style={styles.box}>
        <TextInput
          style={{
            fontFamily: 'Spartan-SemiBold',
            flex: 1,
            color: 'black',
            padding: 10,
            paddingLeft: 20,
          }}
          placeholderTextColor={'#754845'}
          placeholder={dob}
        />
        <AntDesignIcons name="calendar" color={'#BDBDBD'} size={25} />
      </View>
      <View style={styles.box}>
        <TextInput
          style={{
            fontFamily: 'Spartan-SemiBold',
            flex: 1,
            color: 'black',
            padding: 10,
            paddingLeft: 20,
          }}
          placeholderTextColor={'#754845'}
          placeholder={age}
        />
        <AntDesignIcons name="calendar" color={'#BDBDBD'} size={25} />
      </View>

      <TouchableOpacity style={styles.saveBtn}>
        <Text style={styles.saveBtnText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'white',
  },
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
  inputTextStyle: {
    fontFamily: 'Spartan-SemiBold',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    color: 'black',
    padding: 10,
    paddingLeft: 20,
  },

  addTagBtn: {
    backgroundColor: '#737373',
    width: 117,
    height: 30,
    borderRadius: 50,
    marginLeft: 20,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  interestsBox: {
    marginHorizontal: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
  },
  saveBtn: {
    backgroundColor: '#0C866C',
    height: 36,
    width: 117,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  saveBtnText: {
    fontFamily: 'Spartan-Bold',
    color: 'white',
    fontSize: 14,
  },
  box: {
    flexDirection: 'row',
    fontFamily: 'Spartan-SemiBold',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginHorizontal: 15,
    borderRadius: 10,
    color: 'black',
    alignItems: 'center',
    paddingRight: 15,
    marginTop: 10,
  },
});

export default EditProfile;
