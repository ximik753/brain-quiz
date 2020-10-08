import React from 'react'
import { View, StyleSheet, Image, Text, TouchableNativeFeedback } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { useLinkTo } from '@react-navigation/native'

const CoinBanner = () => {
    const linkTo = useLinkTo()

    return (
        <TouchableNativeFeedback
            onPress={() => linkTo('/Shop')}
        >
            <View style={styles.wrapper}>
                <Image
                    source={require('../../assets/images/main/coin_banner.png')}
                />
                <Text style={styles.count}>5000</Text>
            </View>
        </TouchableNativeFeedback>
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
