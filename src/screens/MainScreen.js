import React, { useCallback, useEffect } from 'react'
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import CardStats from '../components/UI/Cards/CardStats'
import CardBoosters from '../components/UI/Cards/CardBoosters'
import CoinBanner from '../components/UI/CoinBanner'
import { colors } from '../utils/colors'
import AppCarousel from '../components/UI/AppCarousel'
import AppTimer from '../components/UI/AppTimer'
import { useDispatch } from 'react-redux'
import { useHttp } from '../hooks/http.hook'
import { userInit } from '../store/actions/user'
import { useAlert } from '../hooks/alert.hook'
import { updateStatus } from '../store/actions/game'

const MainScreen = () => {
    const { get, loading } = useHttp()
    const dispatch = useDispatch()
    const { create } = useAlert()

    const fetchData = useCallback(async () => await get('/user', true), [get])

    useEffect(() => {
        fetchData()
            .then(data => {
                if (data.status) {
                    dispatch(updateStatus({ id: 1 }))
                }

                dispatch(userInit(data))
            })
            .catch(e => create(e.message))
    }, [])

    let content = (
        <>
            <AppTimer/>
            <CardStats/>
            <CardBoosters/>
            <AppCarousel/>
            <CoinBanner/>
        </>
    )

    if (loading) {
        content = (
            <ActivityIndicator
                color={colors.background.loader}
                size="large"
            />
        )
    }

    return (
        <View style={styles.wrapper}>
            <ScrollView
                contentContainerStyle={loading ? styles.containerLoading : styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                {content}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.background.default
    },
    container: {
        alignItems: 'center'
    },
    containerLoading: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})

export default MainScreen
