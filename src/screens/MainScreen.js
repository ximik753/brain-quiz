import React, { useCallback, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import CardStats from '../components/UI/Cards/CardStats'
import CardBoosters from '../components/UI/Cards/CardBoosters'
import CoinBanner from '../components/UI/CoinBanner'
import { colors } from '../utils/colors'
import AppCarousel from '../components/UI/AppCarousel'
import AppTimer from '../components/UI/AppTimer'
import { useDispatch } from 'react-redux'
import { useHttp } from '../hooks/http.hook'
import { userInit } from '../store/actions/user'

const MainScreen = () => {
    const { get } = useHttp()
    const dispatch = useDispatch()

    const fetchData = useCallback(async () => await get('/user', true), [get])

    useEffect(() => {
        fetchData()
            .then(data => dispatch(userInit(data)))
            .catch(e => console.log(e))
    }, [])

    return (
        <View style={styles.wrapper}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <AppTimer/>
                <CardStats/>
                <CardBoosters/>
                <AppCarousel/>
                <CoinBanner/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.defaultBackgroundColor
    },
    container: {
        maxWidth: 290,
        width: '100%',
        alignItems: 'center'
    }
})

export default MainScreen
