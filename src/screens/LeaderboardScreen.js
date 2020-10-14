import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import AppCard from '../components/UI/Cards/AppCard'
import AppCardLeaderboardItem from '../components/UI/Cards/AppCardLeaderboardItem'
import { fonts } from '../utils/fonts'
import { colors } from '../utils/colors'
import { useHttp } from '../hooks/http.hook'

const LeaderboardScreen = () => {
    const { get } = useHttp()
    const [items, setItems] = useState([])

    const fetchData = useCallback(async () => await get('/top', true), [get])

    useEffect(() => {
        fetchData()
            .then(data => setItems(data))
            .catch(e => console.log(e))
    }, [])

    let content = (
        <ActivityIndicator
            color={colors.boosterCountColor}
            size="small"
        />
    )

    if (items.length) {
        content = (
            items.map(({ name, stats, avatar }, index) => (
                <Fragment key={name}>
                    <AppCardLeaderboardItem
                        name={name}
                        avatar={avatar}
                        iq={stats.iq}
                        position={index + 1}
                    />
                </Fragment>
            ))
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.title}>Таблица лидеров</Text>
                <AppCard>
                    {content}
                </AppCard>
            </View>
        </ScrollView>
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
    },
    title: {
        fontFamily: fonts.semiBold,
        fontSize: 30,
        color: colors.defaultFontColor,
        marginTop: 20,
        marginBottom: 20
    }
})

export default LeaderboardScreen
