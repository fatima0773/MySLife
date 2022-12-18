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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AddCaption from './components/addCaption';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NewPost = ({navigation, route, navigator}) => {
  const [mode, setMode] = useState('Text');
  const [nextMode, setNextMode] = useState('Text');
  const [filePath, setFilePath] = useState();

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );

        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        setFilePath(response.assets[0].uri);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      presentationStyle: 'popover',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setFilePath(response.assets[0].uri);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <EntypoIcons
          style={styles.headerIcons}
          name="cross"
          size={25}
          color={'black'}
        />
        <Text style={styles.headerText}>New Post</Text>
        {mode === 'Gallery' || mode === 'Camera' ? (
          <Ionicons
            onPress={() => setNextMode('ShowCaptionField')}
            style={[styles.headerIcons, {marginLeft: 20}]}
            name="arrow-forward"
            size={25}
            color={'black'}
          />
        ) : (
          <View style={[styles.headerIcons, {marginLeft: 20}]}></View>
        )}
      </View>
      <View style={styles.container}>
        {mode === 'Gallery' || mode === 'Camera' ? (
          <Image source={{uri: filePath}} style={styles.imageStyle} />
        ) : null}

        <View
          style={{
            marginVertical: 20,
            alignItems: 'center',
            width: '100%',
            flexDirection: 'row',
          }}>
          {mode === 'Text' ? (
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Spartan-Bold',
                  color: '#0C866C',
                  fontSize: 28,
                  paddingHorizontal: 15,
                  marginLeft: 10,
                }}>
                T
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setMode('Text')}>
              <Text
                style={{
                  fontFamily: 'Spartan-Bold',
                  color: 'black',
                  fontSize: 28,
                  paddingHorizontal: 15,
                  marginLeft: 10,
                }}>
                T
              </Text>
            </TouchableOpacity>
          )}
          {mode === 'Gallery' ? (
            <TouchableOpacity
              onPress={() => {
                chooseFile('photo');
              }}>
              <FeatherIcons
                style={styles.iconStyle}
                size={25}
                name="image"
                color={'#0C866C'}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setMode('Gallery');
                chooseFile('photo');
              }}>
              <FeatherIcons
                style={styles.iconStyle}
                name="image"
                size={25}
                color={'black'}
              />
            </TouchableOpacity>
          )}
          {mode === 'Camera' ? (
            <TouchableOpacity
              onPress={() => {
                captureImage('photo');
              }}>
              <FeatherIcons
                style={styles.iconStyle}
                name="camera"
                size={25}
                color={'#0C866C'}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setMode('Camera');
                captureImage('photo');
              }}>
              <FeatherIcons
                style={styles.iconStyle}
                name="camera"
                size={25}
                color={'black'}
              />
            </TouchableOpacity>
          )}
        </View>
        {mode === 'Text' || nextMode === 'ShowCaptionField' ? (
          <AddCaption />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    height: 60,
    width: windowWidth,
    backgroundColor: '#F8F4ED',
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Spartan-Bold',
    fontSize: 16,
    color: '#333333',
    lineHeight: 18,
    alignSelf: 'center',
    width: '70%',
    textAlign: 'center',
  },
  headerIcons: {
    alignSelf: 'center',
    width: '10%',
  },
  iconStyle: {
    paddingHorizontal: 15,
    alignSelf: 'baseline',
  },
  imageStyle: {
    width: '100%',
    height: 250,
  },
});

export default NewPost;
