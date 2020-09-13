import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'

const NavBar = ({ header }) => {
    return (
        <View style={styles.container}>
            <View style={styles.minicontainer0}></View>
            <View style={styles.minicontainer1}>
                <Text style={styles.text}>{header}</Text>
            </View>
            <View style={styles.minicontainer2}>
                <Image
                    style={{ height: 60, width: 60, alignSelf: 'flex-end' }}
                    source={require('../../assets/logo.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#000000',
    },
    text: {
        fontSize: 20,
        color: '#FFD700',
        fontWeight: 'bold',
    },
    minicontainer0: {
        flex: 1,
    },
    minicontainer1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    minicontainer2: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1,
    },
})

export default NavBar
