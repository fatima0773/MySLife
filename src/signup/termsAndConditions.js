import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const TermsAndCondition = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.text}>Politique de confidentialité</Text>
      </View>
      <View style={{margin: 25}}>
        <Text style={styles.subText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s {'\n'} {'\n'}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s{'\n'} {'\n'}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s{'\n'} {'\n'}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s{'\n'}
          {'\n'}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s{'\n'}
          {'\n'}Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s {'\n'} {'\n'}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s{'\n'} {'\n'}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s{'\n'} {'\n'}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s{'\n'}
          {'\n'}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s{'\n'}
          {'\n'}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    backgroundColor: '#E6ABAE',
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Spartan-Bold',
    fontSize: 16,
    color: '#333333',
    lineHeight: 18,
    marginLeft: 15,
  },
  subText: {
    fontFamily: 'Spartan-Medium',
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,

    textAlign: 'justify',
  },
});

export default TermsAndCondition;
