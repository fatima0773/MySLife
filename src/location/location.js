import {Text, View} from 'react-native';

const Location = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontFamily: 'Spartan-Bold', fontSize: 26}}>
        Location Screen
      </Text>
    </View>
  );
};

export default Location;
