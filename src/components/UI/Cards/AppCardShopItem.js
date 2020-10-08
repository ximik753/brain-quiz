import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { fonts } from '../../../utils/fonts'
import AppButtonOutline from '../AppButtonOutline'

const AppCardShopItem = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperIcon}>
                <Image
                    source={require('../../../assets/images/main/boosters/icon_heart.png')}
                    style={styles.icon}
                />
            </View>
            <View>
                <View>
                    <Text style={styles.title}>Жизнь</Text>
                    <Text style={styles.description}>Описание</Text>
                </View>
                <View style={styles.buyWrapper}>
                    <AppButtonOutline
                        text="Купить"
                    />
                    <Text style={styles.price}>2200</Text>
                    <Image
                        source={require('../../../assets/images/main/icon_coin.png')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginBottom: 30
    },
    wrapperIcon: {
        width: 36,
        height: 36,
        backgroundColor: '#4D1C8D',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    icon: {
        width: 25,
        height: 22
    },
    title: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: '#FFF'
    },
    description: {
        fontFamily: fonts.semiBold,
        fontSize: 12,
        color: '#FFF'
    },
    buyWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5
    },
    price: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: '#FFF',
        marginRight: 5,
        marginLeft: 10
    }
})

export default AppCardShopItem
