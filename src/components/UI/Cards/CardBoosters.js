import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppCard from './AppCard'
import { fonts } from '../../../utils/fonts'
import AppCardBoosterItem from './AppCardBosterItem'
import { colors } from '../../../utils/colors'
import { useSelector } from 'react-redux'
import AppButton from '../AppButton'

const CardBoosters = () => {
    const boosters = useSelector(state => state.user.boosters)

    let content = (
        <View>
            <Text style={styles.boostersNotFound}>Бустеры отсутствуют</Text>
            <AppButton
                text="Преобрести"
                styleButton={styles.boostersNotFoundButton}
            />
        </View>
    )

    if (boosters.length) {
        content = (
            boosters.map(booster => (
                <AppCardBoosterItem
                    label="Жизни"
                    count={9}
                    icon={require('../../../assets/images/main/boosters/icon_heart.png')}
                />
            ))
        )
    }


    return (
        <AppCard borderColor="#0261FB" style={styles.cardBoosters}>
            <Text style={styles.title}>Бустеры</Text>
            <View style={styles.wrapper}>
                {content}
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
        color: colors.defaultFontColor,
        fontSize: 18
    },
    wrapper: {
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 10
    },
    boostersNotFound: {
        fontFamily: fonts.medium,
        fontSize: 16,
        color: colors.defaultFontColor
    },
    boostersNotFoundButton: {
        height: 30,
        marginTop: 10,
        width: '100%'
    }
})

export default CardBoosters
