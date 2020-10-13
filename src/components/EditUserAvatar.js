import React, { useState } from 'react'
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../utils/colors'
import ModalEditUserAvatar from './ModalEditUserAvatar'

const EditUserAvatar = () => {
    const [show, setShow] = useState(false)

    return (
        <View style={[
            { transform: [{ translateX: 10 }, { translateY: -5 }] }
        ]}>
            <TouchableNativeFeedback
                onPress={() => setShow(true)}
            >
                <MaterialIcons
                    name="settings"
                    color={colors.defaultFontColor}
                    size={19}
                />
            </TouchableNativeFeedback>
            <ModalEditUserAvatar
                show={show}
                closeHandler={() => setShow(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default EditUserAvatar
