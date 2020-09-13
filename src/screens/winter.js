import React from 'react'
import { FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import FrontImg from '../components/frontimg'
import NavBar from '../components/navbar'
import { WinterData } from '../winter-data'

const Winter = () => {
    if (!WinterData) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }
    return (
        <SafeAreaView>
            <NavBar header="Winter" />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={WinterData}
                keyExtractor={(item, index) => item.key}
                renderItem={({ item }) => {
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

export default Winter
