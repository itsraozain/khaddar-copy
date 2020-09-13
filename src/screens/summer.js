import React from 'react'
import { SafeAreaView, FlatList,ActivityIndicator } from 'react-native'
import FrontImg from '../components/frontimg'
import NavBar from '../components/navbar'
import { SummerData } from '../summer-data'

const Summer = () => {
    if (!SummerData) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }
    return (
        <SafeAreaView>
            <NavBar header="Summer" />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={SummerData}
                keyExtractor={(item, index) => item.key}
                renderItem={({ item }) => {
                    if (!item.link) {
                        return <ActivityIndicator size="large" />
                    }
                    return (
                        <FrontImg
                            nam={item.nam}
                            code={item.code}
                            price={item.price}
                            link={item.link}
                            link1={item.link1}
                            link2={item.link2}
                            rating={item.rating}
                        />
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default Summer
