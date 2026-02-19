import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBarLayout1 } from "./tabbar/TabBarLayout";

import Home from '../screens/home'
import Alert from '../screens/alert'
import Medicine from '../screens/Medicine';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator()

export default function MainTabs() {
  return (
    <Tab.Navigator 
      tabBar={(props) => <TabBarLayout1 {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name='Medicine'component={Medicine}/>
      <Tab.Screen name='Alert'component={Alert}/>
      <Tab.Screen name='Profile'component={Profile}/>
    </Tab.Navigator>
  )
}
