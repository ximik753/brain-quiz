import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'

const LoadingScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Image
                style={styles.logo}
                source={require('../assets/images/loading/logo.png')}
            />
            <Text style={styles.production}>Production by Dev Team</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.loadingBackgroundColor,
        position: 'relative',
        alignItems: 'center'
    },
    logo: {
        position: 'relative',
        top: '25%'
    },
    production: {
        position: 'absolute',
        bottom: 40,
        fontFamily: fonts.semiBold,
        fontSize: 18,
        color: colors.defaultFontColor
    }
})

export default LoadingScreen
