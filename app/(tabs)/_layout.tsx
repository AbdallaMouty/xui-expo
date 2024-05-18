import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { fontSize: 14, textTransform: 'capitalize', fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
        tabBarStyle: { backgroundColor: 'black' },
      }}>
      <MaterialTopTabs.Screen name="index" options={{ title: 'Home' }} />
      <MaterialTopTabs.Screen name="following" options={{ title: 'Following' }} />
      <MaterialTopTabs.Screen name="Pages" options={{ title: 'Pages' }} />
    </MaterialTopTabs>
  );
};

export default Layout;
