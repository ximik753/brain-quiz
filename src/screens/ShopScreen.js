import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { fonts } from '../utils/fonts'
import AppCard from '../components/UI/Cards/AppCard'
import AppCardShopItem from '../components/UI/Cards/AppCardShopItem'
import { colors } from '../utils/colors'

const ShopScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.title}>Магазин</Text>
                <AppCard>
                    <AppCardShopItem/>
                    <AppCardShopItem/>
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

export default ShopScreen
