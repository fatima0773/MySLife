import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomBtn = ({title, navigation, pressHandler}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={pressHandler}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 343,
    height: 50,
    marginTop: 30,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#E6ABAE',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Spartan-Medium',
    color: '#333333',
    fontSize: 16,
    lineHeight: 18,
  },
});

export default CustomBtn;
