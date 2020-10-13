import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppCard from './AppCard'
import { fonts } from '../../../utils/fonts'
import AppCardBoosterItem from './AppCardBosterItem'
import { colors } from '../../../utils/colors'
import { useSelector } from 'react-redux'
import AppButton from '../AppButton'
import { useLinkTo } from '@react-navigation/native'

const CardBoosters = () => {
    const boosters = useSelector(state => state.user.boosters)
    const linkTo = useLinkTo()

    let content = (
        <View>
            <Text style={styles.boostersNotFound}>Бустеры отсутствуют</Text>
            <AppButton
                text="Преобрести"
                styleButton={styles.boostersNotFoundButton}
                pressHandler={() => linkTo('/Shop')}
            />
        </View>
    )

    if (boosters.length) {
        content = (
            boosters.map(({ count, booster }) => (
                <Fragment key={booster.title}>
                    <AppCardBoosterItem
                        label={booster.title}
                        count={count}
                        icon={`http://192.168.1.69:3000/images/${booster.icon}.png`}
                    />
                </Fragment>
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
        justifyContent: 'space-between',
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
