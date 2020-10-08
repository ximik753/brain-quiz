import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { fonts } from '../utils/fonts'
import CardStats from '../components/UI/Cards/CardStats'
import CardBoosters from '../components/UI/Cards/CardBoosters'
import CoinBanner from '../components/UI/CoinBanner'
import { colors } from '../utils/colors'

const MainScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.titleTimer}>Следущая игра в:</Text>
                <View style={styles.timerWrapper}>
                    <Text style={styles.timer}>20:00</Text>
                    <Image
                        style={styles.timerParticle}
                        source={require('../assets/images/main/particle.png')}
                    />
                </View>
                <CardStats/>
                <CardBoosters/>
                <CoinBanner/>
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
    titleTimer: {
        marginTop: 20,
        fontFamily: fonts.semiBold,
        fontSize: 18,
        color: colors.defaultFontColor
    },
    timerWrapper: {
        position: 'relative'
    },
    timer: {
        fontFamily: fonts.black,
        fontSize: 24,
        color: colors.defaultFontColor,
        zIndex: 2
    },
    timerParticle: {
        position: 'absolute',
        bottom: -5,
        left: -9
    }
})

export default MainScreen
