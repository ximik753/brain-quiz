import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppCard from './AppCard'
import { fonts } from '../../../utils/fonts'
import AppCardBoosterItem from './AppCardBosterItem'

const CardBoosters = () => {
    return (
        <AppCard borderColor="#0261FB" style={styles.cardBoosters}>
            <Text style={styles.title}>Бустеры</Text>
            <View style={styles.wrapper}>
                <AppCardBoosterItem
                    label="Жизни"
                    count={9}
                    icon={require('../../../assets/images/main/boosters/icon_heart.png')}
                />
                <AppCardBoosterItem
                    label="Опыт"
                    count={9}
                    icon={require('../../../assets/images/main/boosters/icon_iq.png')}
                />
            </View>
        </AppCard>
    )
}

const styles = StyleSheet.create({
    cardBoosters: {
        marginTop: 20
    },
    title: {
        fontFamily: fonts.semiBold,
        color: '#FFF',
        fontSize: 18
    },
    wrapper: {
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 10
    }
})

export default CardBoosters
