import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Main from './src/screens/main'
import Winter from './src/screens/winter'
import Summer from './src/screens/summer'
import SplashScreen from './src/screens/splashscreen'
import Detail from './src/components/detail'
import { setNavigator } from './src/components/navigationref'

const Navigator = createStackNavigator(
    {
        splash: SplashScreen,
        detail: Detail,
        home: createBottomTabNavigator(
            {
                main: {
                    screen: Main,
                    navigationOptions: {
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ tintColor }) => (
                            <Image
                                source={require('./src/images/home.png')}
                                resizeMode="contain"
                                style={{ width: 20, height: 20 }}
                            />
                        ),
                    },
                },
                winter: {
                    screen: Winter,
                    navigationOptions: {
                        tabBarLabel: 'Winter',
                        tabBarIcon: ({ tintColor }) => (
                            <Image
                                source={require('./src/images/clothes.png')}
                                resizeMode="contain"
                                style={{ width: 20, height: 20 }}
                            />
                        ),
                    },
                },
                summer: {
                    screen: Summer,
                    navigationOptions: {
                        tabBarLabel: 'Summer',
                        tabBarIcon: ({ tintColor }) => (
                            <Image
                                source={require('./src/images/sun.png')}
                                resizeMode="contain"
                                style={{ width: 20, height: 20 }}
                            />
                        ),
                    },
                },
            },

            {
                tabBarOptions: {
                    labelStyle: {
                        fontSize: 15,
                    },
                    activeBackgroundColor: '#000000',
                    inactiveBackgroundColor: '#000000',
                    activeTintColor: '#FFD700',
                    inactiveTintColor: '#ffffff',
                },
            }
        ),
    },
    {
        initialRouteName: 'splash',
        headerMode: 'none',
    }
)

const App = createAppContainer(Navigator)

export default () => (
    <App
        ref={(navigator) => {
            setNavigator(navigator)
        }}
    />
)
