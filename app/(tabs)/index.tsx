import { Link } from 'expo-router';
import { View } from 'react-native';

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F1F1F',
      }}>
      <Link
        href="/details"
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: 'white',
          color: 'black',
        }}>
        Open Details
      </Link>
    </View>
  );
};

export default index;
