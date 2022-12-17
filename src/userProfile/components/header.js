import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = ({userName}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color={'black'} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: windowWidth,
    backgroundColor: '#F8F4ED',
    marginTop: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Spartan-Bold',
    fontSize: 16,
    color: '#333333',
    lineHeight: 18,
    marginLeft: 15,
  },
});

export default Header;
