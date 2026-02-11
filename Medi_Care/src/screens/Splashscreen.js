import { View, StyleSheet, StatusBar, Image} from 'react-native'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { hideSplash } from '../redux/features/appSlice'

const SplashScreen = () => {
    const dispatch = useDispatch()

     useEffect(() => {
        setTimeout(() => {
            dispatch(hideSplash()) ;
         }, 3000);
        
    //     return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/img/logo.png')}/>
            <StatusBar barStyle={'light-content'}/>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#5380f1ff'
    },

    img:{
        height:300.83,
        width:204,
        marginTop:270,
        marginBottom:270
    },

})