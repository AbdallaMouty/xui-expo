import { useLocalSearchParams } from 'expo-router';
import { View, Text, Alert } from 'react-native';

const Following = () => {
  const { refresh } = useLocalSearchParams<{ refresh: string }>();

  if (refresh && refresh === '1') {
    Alert.alert('Hi');
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
      }}>
      <Text style={{ color: 'white' }}>following</Text>
    </View>
  );
};

export default Following;
