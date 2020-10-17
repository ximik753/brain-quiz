import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native'
import Modal from 'react-native-modal'
import { avatars } from '../utils/avatars'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import { useHttp } from '../hooks/http.hook'
import { updateAvatar } from '../store/actions/user'
import { useAlert } from '../hooks/alert.hook'

const ModalEditUserAvatar = ({ show, closeHandler }) => {
    const dispatch = useDispatch()
    const avatar = useSelector(state => state.user.avatar)
    const { post } = useHttp()
    const {create } = useAlert()

    const changeAvatarHandler = async (id) => {
        try {
            if (avatar !== id)
            {
                await post('/user/editAvatar', { avatar: id }, true)
                dispatch(updateAvatar(id))
            }

            closeHandler()
        } catch (e) {
            create(e.message)
        }
    }

    return (
        <Modal
            isVisible={show}
            onBackButtonPress={closeHandler}
            onBackdropPress={closeHandler}
        >
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.title}>Выберите аватар</Text>
                    <TouchableNativeFeedback
                        onPress={closeHandler}
                    >
                        <MaterialIcons
                            name="close"
                            size={21}
                        />
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.avatarsWrapper}>
                    {
                        Object.keys(avatars).map(key => (
                            <Fragment key={key}>
                                <TouchableNativeFeedback
                                    onPress={() => changeAvatarHandler(key)}
                                >
                                    <View style={styles.avatarWrapper}>
                                        <Image
                                            source={avatars[key]}
                                            resizeMode="contain"
                                            style={styles.avatar}
                                        />
                                    </View>
                                </TouchableNativeFeedback>
                            </Fragment>
                        ))
                    }
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.font.default
    },
    headerWrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },
    title: {
        fontFamily: fonts.semiBold,
        fontSize: 16
    },
    avatarsWrapper: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 15
    },
    avatarWrapper: {
        padding: 7,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: colors.background.avatarWrapper,
        marginLeft: 10
    },
    avatar: {
        width: 50,
        height: 50
    }
})

export default ModalEditUserAvatar
