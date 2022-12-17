import {StyleSheet, Text, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Interests = ({title}) => {
  return (
    <View style={styles.mainContainer}>
      <AntIcon style={styles.icon} name="tago" color="#737373" size={12} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 30,
    paddingHorizontal: 10,
    borderWidth: 1,
    paddingVertical: 5,
    borderColor: '#737373',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  text: {
    fontFamily: 'Spartan-Regular',
    color: '#737373',
    fontSize: 12,
    lineHeight: 14,
  },
  icon: {
    paddingHorizontal: 5,
  },
});

export default Interests;
