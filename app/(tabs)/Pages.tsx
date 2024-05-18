import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const Pages = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A1A1A',
      }}>
      <Link
        href="/(tabs)/"
        style={{
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          backgroundColor: 'white',
        }}>
        Go Back
      </Link>
    </View>
  );
};

export default Pages;
