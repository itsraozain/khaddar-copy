import React from 'react'
import {
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    View,
    TouchableOpacity,
    Linking,
} from 'react-native'

import NavBar from '../components/navbar'

const Main = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={{ alignItems: 'center' }}
        >
            <NavBar header="Home" />
            <Image
                source={require('../../assets/kmpMain.png')}
                resizeMode="cover"
                style={styles.mainimg}
            />
            <Text style={styles.aboutT}>About</Text>
            <Text style={styles.textS}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </Text>
            <Text style={styles.aboutT}>Contacts</Text>
            <View style={styles.iconcontainer}>
                <View style={{ flexDirection: 'column' }}>
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
                <View style={{ flexDirection: 'column', marginLeft: 50 }}>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://m.facebook.com/pages/category/Clothing--Brand-/Khaddar-Makhdoom-Pur-106737117452742/')
                        }}
                    >
                        <Text style={(styles.aboutT, { fontSize: 14,marginBottom:4  })}>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainimg: {
        height: Dimensions.get('window').height - 200,
        width: Dimensions.get('window').width - 25,
        marginTop: 10,
        borderRadius: 20,
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

export default Main
