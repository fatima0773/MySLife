import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Dimensions,
  TextInput,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddCaption = () => {
  return (
    <View
      style={{
        width: windowWidth,
        flex: 1,
      }}>
      <TextInput
        style={styles.inputTextStyle}
        placeholderTextColor={'#E0E0E0'}
        placeholder={'Caption Title'}
      />
      <TextInput
        style={[
          styles.inputTextStyle,
          {
            height: 100,

            textAlign: 'left',
          },
        ]}
        placeholderTextColor={'#E0E0E0'}
        placeholder={'Caption Description'}
      />
      <View style={styles.fieldSet}>
        <TextInput
          style={styles.textInput}
          textAlign="left"
          placeholder="My Interests"
          placeholderTextColor={'#E0E0E0'}></TextInput>
        <EvilIcons color={'#BDBDBD'} size={18} name="search" />
      </View>
      <TouchableOpacity style={styles.postBtn}>
        <Text style={styles.btnText}>Post in Group</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  fieldSet: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    marginBottom: 20,
  },
  textInput: {
    color: 'black',
    textAlign: 'left',
    fontFamily: 'Spartan-Medium',
    width: '95%',
  },
  postBtn: {
    backgroundColor: '#0C866C',
    height: 40,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  btnText: {
    color: 'white',
    fontFamily: 'Spartan-Bold',
    fontSize: 16,
  },
});

export default AddCaption;
