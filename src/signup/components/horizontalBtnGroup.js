import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HorizontalBtnGroup = () => {
  const [selection, setSelection] = useState(1);
  return (
    <View style={styles.btnGroup}>
      <TouchableOpacity
        style={[
          styles.btn,
          selection === 1
            ? {backgroundColor: '#E6ABAE', borderColor: '#754845'}
            : null,
        ]}
        onPress={() => setSelection(1)}>
        <Text
          style={[styles.btnText, selection === 1 ? {color: '#754845'} : null]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selection === 2
            ? {backgroundColor: '#E6ABAE', borderColor: '#754845'}
            : null,
        ]}
        onPress={() => setSelection(2)}>
        <Text
          style={[styles.btnText, selection === 2 ? {color: '#754845'} : null]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selection === 3
            ? {backgroundColor: '#E6ABAE', borderColor: '#754845'}
            : null,
        ]}
        onPress={() => setSelection(3)}>
        <Text
          style={[styles.btnText, selection === 3 ? {color: '#754845'} : null]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnGroup: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
    marginTop: 15,
  },
  btn: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#737373',
    width: '100%',
    marginVertical: 7,
  },
  btnText: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Spartan-Medium',
    color: '#737373',
    lineHeight: 18,
  },
});

export default HorizontalBtnGroup;
