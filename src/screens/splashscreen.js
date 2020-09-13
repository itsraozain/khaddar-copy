import React from 'react'
import {
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
} from 'react-native'

const SplashScreen = ({ navigation }) => {
    setTimeout(() => {
        navigation.replace('home')
    }, 4000)
    return (
        <ImageBackground
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            source={require('../images/splashscreen.jpg')}
        >
            <Image
                style={{
                    height: Dimensions.get('window').height / 2,
                    width: Dimensions.get('window').width / 2,
                }}
                source={require('../../assets/logo.png')}
            />
        </ImageBackground>
    )
}

export default SplashScreen
