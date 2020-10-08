import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { fonts } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'

const AppCardBoosterItem = ({ label, count, icon }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={icon}
            />
            <View style={styles.wrapper}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.count}>{count}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon: {
        width: 30,
        height: 27
    },
    wrapper: {
        paddingLeft: 10
    },
    label: {
        fontFamily: fonts.medium,
        color: colors.defaultFontColor,
        fontSize: 11
    },
    count: {
        fontFamily: fonts.semiBold,
        color: colors.boosterCountColor,
        fontSize: 18
    }
})

export default AppCardBoosterItem
