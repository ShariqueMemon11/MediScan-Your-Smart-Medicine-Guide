import { View, Text, StyleSheet } from 'react-native';


const home = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medi Care</Text>
      <Text style={styles.subtitle}>home</Text>
    </View>
  );
}

export default home

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
});
