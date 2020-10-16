import React from 'react'
import { View, StyleSheet, Image, Text, ToastAndroid } from 'react-native'
import { fonts } from '../../../utils/fonts'
import AppButtonOutline from '../AppButtonOutline'
import { colors } from '../../../utils/colors'
import { useHttp } from '../../../hooks/http.hook'
import { useDispatch, useSelector } from 'react-redux'
import { updateBoosters } from '../../../store/actions/user'
import { useAlert } from '../../../hooks/alert.hook'

const AppCardShopItem = ({ cost, icon, title, description, id }) => {
    const { post, loading } = useHttp()
    const { create } = useAlert()
    const dispatch = useDispatch()
    const coins = useSelector(state => state.user.coins)

    const pressHandler = async () => {
        try {
            if (coins < cost) {
                return create('Недостаточно средств для покупки')
            }

            const response = await post(`/shop/${id}`, null, true)
            dispatch(updateBoosters(response))
            ToastAndroid.show('Бустер успешно куплен!', ToastAndroid.SHORT)
        } catch (e) {
            create(e.message)
        }
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperIcon}>
                <Image
                    source={{
                        uri: icon
                    }}
                    style={styles.icon}
                />
            </View>
            <View style={styles.wrapperInfo}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.buyWrapper}>
                    <AppButtonOutline
                        text="Купить"
                        pressHandler={pressHandler}
                        loading={loading}
                    />
                    <Text style={styles.price}>{cost}</Text>
                    <Image
                        source={require('../../../assets/images/main/icon_coin.png')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 20,
        width: 290,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.cardBackgroundColor,
        borderRadius: 20
    },
    wrapperIcon: {
        width: 36,
        height: 36,
        backgroundColor: colors.shopIconBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderRadius: 5
    },
    wrapperInfo: {
        width: 200
    },
    icon: {
        width: 25,
        height: 22
    },
    title: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.defaultFontColor
    },
    description: {
        fontFamily: fonts.medium,
        fontSize: 12,
        color: colors.defaultFontColor
    },
    buyWrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 7,
        width: '80%'
    },
    price: {
        fontFamily: fonts.bold,
        fontSize: 16,
        color: colors.defaultFontColor,
        marginRight: 5,
        marginLeft: 10
    }
})

export default AppCardShopItem
