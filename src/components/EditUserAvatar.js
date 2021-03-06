import React, { useState } from 'react'
import { View, TouchableNativeFeedback } from 'react-native'
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
                    color={colors.font.default}
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

export default EditUserAvatar
