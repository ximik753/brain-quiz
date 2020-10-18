import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import AppCardLeaderboardItem from '../components/UI/Cards/AppCardLeaderboardItem'
import { fonts } from '../utils/fonts'
import { colors } from '../utils/colors'
import { useHttp } from '../hooks/http.hook'

const LeaderboardScreen = () => {
    const { get } = useHttp()
    const [items, setItems] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const fetchData = useCallback(async () => await get('/top', true), [get])
    const refreshHandler = useCallback(async () => {
        setRefreshing(true)
        const fetchingItems = await fetchData()
        setItems(fetchingItems)
        setRefreshing(false)
    }, [fetchData])

    useEffect(() => {
        fetchData()
            .then(data => setItems(data))
    }, [])

    const renderItem = ({ item, index }) => (
        <AppCardLeaderboardItem
            name={item.name}
            avatar={item.avatar}
            iq={item.stats.iq}
            position={index + 1}
        />
    )

    let content = (
        <ActivityIndicator
            color={colors.background.loader}
            size="large"
        />
    )

    let headerComponent = (
        <View style={styles.headerWrapper}>
            <Text style={styles.title}>Таблица лидеров</Text>
        </View>
    )

    if (items.length) {
        content = (
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                refreshing={refreshing}
                onRefresh={refreshHandler}
                contentContainerStyle={styles.container}
                ListHeaderComponent={headerComponent}
            />
        )
    }

    return (
        <View style={items.length ? styles.wrapper : styles.wrapperLoading}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.background.default
    },
    wrapperLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background.default
    },
    container: {
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontFamily: fonts.semiBold,
        fontSize: 30,
        color: colors.font.default,
        marginTop: 20,
        marginBottom: 20
    },
    wrapperItems: {
        height: 450
    }
})

export default LeaderboardScreen
