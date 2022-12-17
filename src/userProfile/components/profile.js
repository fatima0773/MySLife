import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import FontIcons from 'react-native-vector-icons/FontAwesome';

const Profile = ({edit}) => {
  return (
    <View style={{height: 250, alignItems: 'center'}}>
      <Image
        style={styles.coverPhoto}
        source={require('../../../assets/images/coverPhoto.png')}
      />
      {edit === true ? (
        <TouchableOpacity
          style={{
            position: 'absolute',
            marginTop: 170,
            alignSelf: 'flex-end',
          }}>
          <FontAwesomeIcons
            style={{paddingRight: 20}}
            name="camera"
            color={'white'}
            size={20}
          />
        </TouchableOpacity>
      ) : null}
      <View style={styles.profilePhoto}>
        <Image
          style={{position: 'absolute'}}
          source={require('../../../assets/images/profilePhoto.png')}
        />
        {edit === true ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#754845',
              borderWidth: 2,
              borderColor: 'white',
              width: 30,
              height: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 80,
              marginTop: 50,
            }}>
            <FontIcons name="pencil" color={'white'} size={12} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coverPhoto: {
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'black',
    height: 200,
  },
  profilePhoto: {
    position: 'absolute',
    height: 98,
    width: 98,
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 'auto',
    borderWidth: 1.5,
    borderColor: '#754845',
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
