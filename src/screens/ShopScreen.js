import React, { useCallback, useEffect, useState, Fragment } from 'react'
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { fonts } from '../utils/fonts'
import AppCard from '../components/UI/Cards/AppCard'
import AppCardShopItem from '../components/UI/Cards/AppCardShopItem'
import { colors } from '../utils/colors'
import { useHttp } from '../hooks/http.hook'
import { useSelector } from 'react-redux'
import AppCoinLabel from '../components/UI/AppCoinLabel'

const ShopScreen = () => {
    const { get } = useHttp()
    const [items, setItems] = useState([])
    const coins = useSelector(state => state.user.coins)

    const fetchData = useCallback(async () => await get('/shop', true), [get])

    useEffect(() => {
        fetchData()
            .then(setItems)
            .catch(e => console.log(e))
    }, [])

    let content = (
        <ActivityIndicator
            color={colors.loaderColor}
            size="small"
        />
    )

    if (items.length) {
        content = (
            items.map(({ title, description, cost, icon, id }) => (
                <Fragment key={id}>
                    <AppCardShopItem
                        title={title}
                        description={description}
                        cost={cost}
                        icon={icon}
                        id={id}
                    />
                </Fragment>
            ))
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.title}>Магазин</Text>
                <AppCoinLabel coins={coins}/>
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
        marginTop: 20
    }
})

export default ShopScreen
