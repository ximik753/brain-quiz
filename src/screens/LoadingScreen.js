import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Text, Animated } from 'react-native'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'

const LoadingScreen = () => {
    const valueScale = useRef(new Animated.Value(1)).current
    const valueOpacity = useRef(new Animated.Value(0)).current

    const scaleAnimation = () => {
        Animated.timing(valueScale, {
            toValue: 1.1,
            duration: 3000,
            useNativeDriver: true
        }).start()
    }

    const opacityAnimation = () => {
        Animated.timing(valueOpacity, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        scaleAnimation()
        opacityAnimation()
    }, [])

    return (
        <View style={styles.wrapper}>
            <Animated.Image
                style={[styles.logo, {
                    transform: [{ scaleX: valueScale }, { scaleY: valueScale }],
                    opacity: valueOpacity
                }]}
                source={require('../assets/images/loading/logo.png')}
            />
            <Text style={styles.production}>Production by Dev Team</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.background.loader,
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
        color: colors.font.default
    }
})

export default LoadingScreen
