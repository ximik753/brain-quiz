import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { fonts } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'

const AppCardStatsItem = ({ label, value, icon }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.wrapper}>
                {icon}
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    label: {
        fontFamily: fonts.bold,
        color: colors.defaultFontColor,
        fontSize: 10,
        marginBottom: 3
    },
    wrapper: {
        width: 110,
        height: 24,
        backgroundColor: 'rgba(239, 239, 239, .2)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 54
    },
    icon: {
        width: 17,
        height: 13
    },
    value: {
        fontFamily: fonts.semiBold,
        color: colors.defaultFontColor,
        fontSize: 14,
        marginLeft: 15
    }
})

export default AppCardStatsItem
