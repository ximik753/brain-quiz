import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const CoinBanner = () => {
    return (
        <View style={styles.wrapper}>
            <Image
                source={require('../../assets/images/main/coin_banner.png')}
            />
            <Text style={styles.count}>5000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        marginTop: 25,
        marginBottom: 20
    },
    count: {
        position: 'absolute',
        fontFamily: fonts.bold,
        fontSize: 24,
        color: colors.defaultFontColor,
        top: '20%',
        left: '8.5%'
    }
})

export default CoinBanner
