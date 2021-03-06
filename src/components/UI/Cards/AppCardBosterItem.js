import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { fonts } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'

const AppCardBoosterItem = ({ label, count, icon }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={{
                    uri: icon
                }}
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
        width: 120,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon: {
        width: 25,
        height: 22
    },
    wrapper: {
        paddingLeft: 5
    },
    label: {
        fontFamily: fonts.medium,
        color: colors.font.default,
        fontSize: 11
    },
    count: {
        fontFamily: fonts.semiBold,
        color: colors.font.boosterCount,
        fontSize: 18
    }
})

export default AppCardBoosterItem
