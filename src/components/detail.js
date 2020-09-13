import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Linking,
    ActivityIndicator
} from 'react-native'
import NavBar from './navbar'
import Stars from './stars';

const Detail = ({navigation}) => {
    const { link1,link2,nam,price,code,rating } = navigation.state.params
    if(!link1){
        return <ActivityIndicator size="large" />
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <NavBar header="Detail" />
            <View style={styles.container}>
                <Image style={styles.image} source={link1} />
                <Image style={styles.image} source={link2} />
                <Text style={styles.aboutT}>Product</Text>
                <Text style={styles.textS}>
                    {nam}
                </Text>
                <View style={{width:Dimensions.get('window').width-35,marginTop:5}} >
                <Stars rating={rating} />
                </View>
                <Text style={styles.aboutT}>Price</Text>
                <Text style={styles.textS}>
                    {nam} is in Just {price}
                </Text>
                <Text style={styles.aboutT}>About</Text>
                <Text style={styles.textS}>
                    To buy the product Just remember the code <Text style={{fontWeight:'bold',fontSize:16}}>{code}</Text> and tell our retailer on whatsapp or facebook.
                </Text>
                <Text style={styles.aboutT}>Buy This Product On</Text>
                <View style={styles.iconcontainer}>
                    <View style={{ flexDirection: 'column', marginRight: 50 }}>
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL('https://wa.me/message/O4Y2L42UY7QAO1')
                            }}
                        >
                            <Text style={(styles.aboutT, { fontSize: 14,marginBottom:4  })}>
                                WhatsApp
                            </Text>
                            <Image
                                style={{
                                    height: 45,
                                    width: 45,
                                    alignSelf: 'center',
                                }}
                                source={require('../images/whatsapp.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL('https://m.facebook.com/pages/category/Clothing--Brand-/Khaddar-Makhdoom-Pur-106737117452742/')
                            }}
                        >
                            <Text style={(styles.aboutT, { fontSize: 14,marginBottom:4 })}>
                                Facebook
                            </Text>
                            <Image
                                style={{
                                    height: 45,
                                    width: 45,
                                    alignSelf: 'center',
                                }}
                                source={require('../images/facebook.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 250,
        width: Dimensions.get('window').width - 25,
        marginTop:10,
        borderRadius:20
    },
    aboutT: {
        fontSize: 20,
        alignSelf: 'flex-start',
        marginLeft: 25,
        marginTop: 5,
        fontWeight:'bold',
    },
    textS: {
        fontSize: 14,
        alignSelf: 'flex-start',
        marginHorizontal: 25,
        marginTop: 5,
    },
    iconcontainer: {
        flexDirection: 'row',
        marginBottom: 40,
        marginTop: 10,
    },
})

export default Detail
