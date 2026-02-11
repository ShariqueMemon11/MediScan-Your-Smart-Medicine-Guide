import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home'
import Alert from '../screens/alert'

const Tab = createBottomTabNavigator()

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name='Alert'component={Alert}/>
    </Tab.Navigator>
  )
}
