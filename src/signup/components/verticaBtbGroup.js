import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const VerticalBtnGroup = () => {
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
          Yes
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
          No
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          {flex: 1},
          styles.btn,
          selection === 3
            ? {backgroundColor: '#E6ABAE', borderColor: '#754845'}
            : null,
        ]}
        onPress={() => setSelection(3)}>
        <Text
          style={[styles.btnText, selection === 3 ? {color: '#754845'} : null]}>
          Not defined by a genre
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
    marginTop: 15,
  },
  btn: {
    borderColor: '#737373',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 14,
    fontFamily: 'Spartan-Medium',
    color: '#737373',
    paddingHorizontal: 10,
  },
});

export default VerticalBtnGroup;
