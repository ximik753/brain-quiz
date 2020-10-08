import React from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../../../utils/colors'

const AppCard = ({ borderColor = colors.yellowBorderColor, children, style }) => (
    <View
        style={{ ...styles.card, ...style, borderColor }}
    >
        {children}
    </View>
)

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        borderWidth: 2,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.cardBackgroundColor,
        position: 'relative'
    }
})

export default AppCard
