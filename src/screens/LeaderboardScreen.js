import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import AppCard from '../components/UI/Cards/AppCard'
import AppCardLeaderboardItem from '../components/UI/Cards/AppCardLeaderboardItem'
import { fonts } from '../utils/fonts'
import { colors } from '../utils/colors'

const LeaderboardScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.title}>Таблица лидеров</Text>
                <AppCard>
                    <AppCardLeaderboardItem/>
                    <AppCardLeaderboardItem/>
                    <AppCardLeaderboardItem/>
                    <AppCardLeaderboardItem/>
                    <AppCardLeaderboardItem/>
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

export default LeaderboardScreen
