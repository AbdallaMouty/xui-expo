import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { Image } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export default function Layout() {
  return (
    <Stack
      screenOptions={{ headerShadowVisible: false, headerStyle: { backgroundColor: 'black' } }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerLeft: () => (
            <Image
              source={{
                uri: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
              }}
              style={{ width: 32, height: 32, borderRadius: 20 }}
            />
          ),
          headerRight: () => <Ionicons name="settings-outline" size={24} color="white" />,
          headerTitle: () => (
            <Svg width={30} height={30} viewBox="0 0 500 500" fill="#FFF">
              <Path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                fill="#FFF"
              />
            </Svg>
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          headerTitle: 'Details',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: 'white' },
          headerLeft: () => (
            <ChevronLeft
              size={24}
              color="white"
              style={{ marginLeft: 10 }}
              onPress={() => router.back()}
            />
          ),
          animation: 'slide_from_left',
        }}
      />
    </Stack>
  );
}
