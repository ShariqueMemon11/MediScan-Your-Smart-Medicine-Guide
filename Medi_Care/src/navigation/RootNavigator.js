import AuthNavigator from './AuthNavigator'
import SplashScreen from '../screens/Splashscreen'
import MainTabs from './MainTabs'
import { useSelector } from 'react-redux'

export default function RootNavigator() {
  const showSplash = useSelector(state => state.app.showSplash)
  const isLoggedIn = useSelector(state => state.auth?.isLoggedIn)

  
   if (showSplash) return <SplashScreen/>
   
   return isLoggedIn ? <MainTabs /> : <AuthNavigator />
}
