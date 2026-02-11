import { View, Text, StyleSheet , Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/authSlice';
import { useNavigation } from '@react-navigation/native';

const Login = () =>{
  const dispatch = useDispatch()
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medi Care</Text>
      <Text style={styles.subtitle}>login</Text>
      <View style={styles.but}>
        <Button
          title='login'
          onPress={()=>dispatch(login())}/>
        <Button
          title='Register'
          onPress={()=> navigation.push('Register')}/>
      </View>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  but: {
    flexDirection: "row",
    gap:10,
    marginTop:10
  }
});
