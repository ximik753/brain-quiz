import React from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../../../utils/colors'

const AppCard = ({ borderColor = colors.border.yellow, children, style }) => (
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
        padding: 15,
        width: 290,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background.card,
        position: 'relative'
    }
})

export default AppCard
