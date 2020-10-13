import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const AppCoinLabel = ({ coins }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>На ваше счету:</Text>
            <View style={styles.wrapper}>
                <Text style={styles.coins}>{coins}</Text>
                <Image
                    source={require('../../assets/images/main/icon_coin.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(239, 239, 239, .2)',
        borderRadius: 50,
        paddingVertical: 3,
        paddingHorizontal: 12
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '70%',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 10
    },
    coins: {
        fontFamily: fonts.bold,
        color: colors.defaultFontColor,
        fontSize: 14,
        marginRight: 5
    },
    title: {
        fontFamily: fonts.medium,
        color: colors.defaultFontColor,
        fontSize: 14
    }
})

export default AppCoinLabel
