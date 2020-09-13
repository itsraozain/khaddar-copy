import React from 'react'
import { Text, View, Image, Dimensions,ActivityIndicator } from 'react-native'

const Stars = ({ rating }) => {
    if (!rating) {
        return <ActivityIndicator size="small" color="#0000ff" />
    }
    if (rating === '5') {
        return (
            <View
                style={{
                    height: 30,
                    width: Dimensions.get('window').width / 2,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginTop: 3,
                }}
            >
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
            </View>
        )
    } else if (rating === '4') {
        return (
            <View
                style={{
                    height: 30,
                    width: Dimensions.get('window').width / 2,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginTop: 3,
                }}
            >
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
            </View>
        )
    } else if (rating === '3') {
        return (
            <View
                style={{
                    height: 30,
                    width: Dimensions.get('window').width / 2,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginTop: 3,
                }}
            >
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
            </View>
        )
    } else if (rating === '2') {
        return (
            <View
                style={{
                    height: 30,
                    width: Dimensions.get('window').width / 2,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginTop: 3,
                }}
            >
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
            </View>
        )
    } else if (rating === '1') {
        return (
            <View
                style={{
                    height: 30,
                    width: Dimensions.get('window').width / 2,
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginTop: 3,
                }}
            >
                <Image
                    source={require('../images/star.png')}
                    style={{ height: 15, width: 15, marginHorizontal: 3 }}
                />
            </View>
        )
    }
}

export default Stars
