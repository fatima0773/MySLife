import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PurposeBtnGroup = () => {
  const [selection, setSelection] = useState(1);
  return (
    <View style={styles.btnGroup}>
      <TouchableOpacity style={styles.btn} onPress={() => setSelection(1)}>
        {selection === 1 ? (
          <LineIcon name="graduation" color={'#754845'} size={55} />
        ) : (
          <LineIcon name="graduation" color={'#737373'} size={55} />
        )}

        <Text
          style={[styles.btnText, selection === 1 ? {color: '#754845'} : null]}>
          I am here to learn
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setSelection(2)}>
        {selection === 2 ? (
          <MaterialIcons name="people-outline" color={'#754845'} size={55} />
        ) : (
          <MaterialIcons name="people-outline" color={'#737373'} size={55} />
        )}

        <Text
          style={[styles.btnText, selection === 2 ? {color: '#754845'} : null]}>
          I am here to make new friends
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
    flex: 1,
    marginVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  btnText: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Spartan-Medium',
    color: '#737373',
    lineHeight: 18,
    textAlign: 'center',
  },
});

export default PurposeBtnGroup;

// ionicon - md-people-outline
// MaterialIcons people-outline
