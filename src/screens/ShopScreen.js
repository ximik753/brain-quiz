import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { fonts } from '../utils/fonts'
import AppCardShopItem from '../components/UI/Cards/AppCardShopItem'
import { colors } from '../utils/colors'
import { useHttp } from '../hooks/http.hook'
import { useSelector } from 'react-redux'
import AppCoinLabel from '../components/UI/AppCoinLabel'

const ShopScreen = () => {
    const { get } = useHttp()
    const [items, setItems] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const coins = useSelector(state => state.user.coins)

    const fetchData = useCallback(async () => await get('/shop', true), [get])
    const refreshHandler = useCallback(async () => {
        setRefreshing(true)
        const fetchingItems = await fetchData()
        setItems(fetchingItems)
        setRefreshing(false)
    }, [fetchData])

    useEffect(() => {
        fetchData()
            .then(setItems)
            .catch(e => console.log(e))
    }, [])

    const renderItem = ({ item }) => (
        <AppCardShopItem
            title={item.title}
            description={item.description}
            cost={item.cost}
            icon={item.icon}
            id={item.id}
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
            <Text style={styles.title}>Магазин</Text>
            <AppCoinLabel coins={coins}/>
        </View>
    )

    if (items.length) {
        content = (
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
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
    headerWrapper: {
        alignItems: 'center'
    },
    title: {
        fontFamily: fonts.semiBold,
        fontSize: 30,
        color: colors.font.default,
        marginTop: 20
    }
})

export default ShopScreen
