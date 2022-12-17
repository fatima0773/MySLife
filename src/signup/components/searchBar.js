import {StyleSheet, Text, TextInput, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SearchBar = () => {
  return (
    <View style={styles.fieldSet}>
      <TextInput
        style={styles.textInput}
        textAlign="left"
        placeholder="My Interests"
        placeholderTextColor={'#737373'}></TextInput>
      <EvilIcons color={'#BDBDBD'} size={18} name="search" />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldSet: {
    width: 343,
    height: 50,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
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
});

export default SearchBar;
