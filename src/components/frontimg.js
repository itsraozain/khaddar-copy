import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import { navigate } from './navigationref'
import Stars from './stars'

const FrontImg = ({ link, link1, link2, price, code, nam, rating }) => {
    if (!link) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }
    return (
        <TouchableOpacity
            onPress={() => navigate('detail', { link1, link2, nam, code, price, rating })}
            style={styles.container}
        >
            <View
                style={{
                    width: Dimensions.get('window').width - 35,
                    backgroundColor: '#ffdde1',
                    paddingBottom: 10,
                }}
            >
                <Image source={link} style={styles.image} />
                <Text
                    style={{
                        fontSize: 20,
                        marginLeft: 10,
                        fontWeight: 'bold',
                        fontFamily: 'serif',
                    }}
                >
                    {nam}
                </Text>
                <Stars rating={rating} />
                <View style={styles.priceC}>
                    <Text
                        style={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            fontSize: 16,
                            marginLeft: 20,
                            fontFamily: 'serif',
                        }}
                    >
                        Code: {code}
                    </Text>
                    <Text
                        style={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            fontSize: 16,
                            marginLeft: 40,
                            fontFamily: 'serif',
                        }}
                    >
                        In just {price}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    image: {
        height: 200,
        width: Dimensions.get('window').width - 35,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    priceC: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 40,
        marginTop: 1,
    },
})

export default FrontImg
