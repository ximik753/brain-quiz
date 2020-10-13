import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native'
import Modal from 'react-native-modal'
import { avatars } from '../utils/avatars'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch } from 'react-redux'
import { useHttp } from '../hooks/http.hook'
import { updateAvatar } from '../store/actions/user'

const ModalEditUserAvatar = ({ show, closeHandler }) => {
    const dispatch = useDispatch()
    const { post } = useHttp()

    const changeAvatarHandler = async (id) => {
        try {
            await post('/user/editAvatar', { avatar: id }, true)
            dispatch(updateAvatar(id))
            closeHandler()
        } catch (e) {
            //TODO adding error output
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
                                    <Image
                                        source={avatars[key]}
                                        resizeMode="contain"
                                        style={styles.avatar}
                                    />
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
        backgroundColor: colors.defaultFontColor
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
    avatar: {
        width: 50,
        height: 50
    }
})

export default ModalEditUserAvatar
