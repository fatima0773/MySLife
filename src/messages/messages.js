import {Text, View} from 'react-native';

const Messages = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontFamily: 'Spartan-Bold', fontSize: 26}}>
        Messages
      </Text>
    </View>
  );
};

export default Messages;
