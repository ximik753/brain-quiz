import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { fonts } from '../../../utils/fonts'
import AppButtonOutline from '../AppButtonOutline'
import { colors } from '../../../utils/colors'
import { useHttp } from '../../../hooks/http.hook'
import { useDispatch } from 'react-redux'
import { updateBoosters } from '../../../store/actions/user'

const AppCardShopItem = ({ cost, icon, title, description, id }) => {
    const { post, loading } = useHttp()
    const dispatch = useDispatch()

    const pressHandler = async () => {
        const boosters = await post(`/shop/${id}`, null, true)
        dispatch(updateBoosters(boosters))
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
            <View>
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
        marginBottom: 30,
        width: 200
    },
    wrapperIcon: {
        width: 36,
        height: 36,
        backgroundColor: colors.shopIconBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 5
    },
    icon: {
        width: 25,
        height: 22
    },
    title: {
        fontFamily: fonts.bold,
        fontSize: 16,
        color: colors.defaultFontColor
    },
    description: {
        fontFamily: fonts.semiBold,
        fontSize: 14,
        color: colors.defaultFontColor
    },
    buyWrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
        width: '80%'
    },
    price: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.defaultFontColor,
        marginRight: 5,
        marginLeft: 10
    }
})

export default AppCardShopItem
