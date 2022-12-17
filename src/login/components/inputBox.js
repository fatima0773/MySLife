import {StyleSheet, Text, TextInput, View} from 'react-native';
import FieldSet from 'react-native-fieldset';

const InputBox = ({title}) => {
  return (
    <View style={styles.fieldSet}>
      <Text style={styles.legend}>{title}</Text>
      {title === 'Password' ? (
        <TextInput
          style={styles.textInput}
          textAlign="left"
          secureTextEntry={true}></TextInput>
      ) : (
        <TextInput style={styles.textInput} textAlign="left"></TextInput>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fieldSet: {
    width: 343,
    height: 50,
    margin: 10,
    paddingHorizontal: 10,
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#E0E0E0',
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: '#FFFFFF',
    color: '#333333',
    fontFamily: 'Spartan-Medium',
    paddingHorizontal: 5,
    fontSize: 16,
  },
  textInput: {
    color: 'black',
    textAlign: 'left',
    fontFamily: 'Spartan-Medium',
    width: '100%',
  },
});

export default InputBox;
