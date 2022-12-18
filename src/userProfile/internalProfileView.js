import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import SinglePost from './components/singlePost';
import Header from './components/header';
import Profile from './components/profile';
import About from './components/about';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InternalProfileView = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header userName={'Amanda'} />
      <Profile />
      <About
        pressHandler={() => navigation.navigate('EditProfile')}
        navigation={navigation}
        message={'My message to My S Life Community'}
        lineDescription={
          'line description will be here. Lorem ipsum dolor sit amet, consecteturdskdlk adipisicing elit, sed do'
        }
        age={'27 Y.O'}
        dob={'17 July, 2018'}
        btnTitle={'Edit Profile'}
      />

      <SinglePost
        postDescription={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
        }
        userName={'Farida Rinkett'}
        time={'3 mins ago'}
        interest={'Psychology'}
        postCount={'78K'}
        comment={'142'}
      />
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
});

export default InternalProfileView;
