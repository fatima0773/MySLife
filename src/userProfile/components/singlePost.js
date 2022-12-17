import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvillconIcons from 'react-native-vector-icons/EvilIcons';

const SinglePost = ({
  postDescription,
  userName,
  time,
  interest,
  postCount,
  comment,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.box}>
        <Image
          style={styles.profilePhoto}
          source={require('../../../assets/images/profilePhoto.png')}
        />
        <View style={{paddingLeft: 20}}>
          <Text style={styles.userText}>{userName}</Text>
          <Text style={styles.standardText}>{time}</Text>
        </View>
        <TouchableOpacity style={styles.icon}>
          <EntypoIcons
            name="dots-three-horizontal"
            color={'#33333380'}
            size={18}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={[
          styles.standardText,
          {
            fontFamily: 'Spartan-Medium',
            color: '#737373',
            paddingVertical: 25,
            lineHeight: 20,
          },
        ]}>
        {postDescription}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../../assets/images/postIcon.png')} />
        <Text
          style={[
            styles.userText,
            {fontFamily: 'Spartan-Medium', paddingLeft: 10, paddingRight: 20},
          ]}>
          {postCount}
        </Text>
        <EvillconIcons name="comment" color={'black'} size={18} />
        <Text
          style={[
            styles.userText,
            {fontFamily: 'Spartan-Medium', paddingHorizontal: 10},
          ]}>
          {comment}
        </Text>
        <View
          style={{
            backgroundColor: '#E6ABAE',
            borderRadius: 15,
            height: 18,
            paddingHorizontal: 8,
            marginLeft: 'auto',
          }}>
          <Text style={[styles.standardText, {color: 'white'}]}>
            {interest}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flex: 1,

    marginTop: 35,
    paddingHorizontal: 20,
  },
  box: {
    flexDirection: 'row',
  },
  profilePhoto: {
    width: 40,
    height: 40,
  },
  icon: {
    marginLeft: 'auto',
  },
  userText: {
    fontFamily: 'Spartan-Bold',
    color: '#333333',
    fontSize: 14,
  },

  standardText: {
    fontFamily: 'Spartan-Regular',
    color: '#9A9A9A',
    fontSize: 12,
    textAlign: 'justify',
  },
});

export default SinglePost;
