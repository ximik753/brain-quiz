import React, { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { colors } from '../utils/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AppDropdownItem from './UI/Dropdown/AppDropdownItem'
import AppDropDown from './UI/Dropdown/AppDropdown'
import { useLogin } from '../hooks/login.hook'

const UserActions = () => {
    const [show, setShow] = useState(false)
    const { removeToken } = useLogin()

    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => setShow(!show)}
            >
                <MaterialIcons
                    name="more-vert"
                    color={colors.font.default}
                    size={20}
                    style={styles.dropDownIcon}
                />
            </TouchableWithoutFeedback>
            {
                show
                && <AppDropDown style={styles.dropDown}>
                      <AppDropdownItem
                          pressHandler={removeToken}
                      >
                          Выйти
                      </AppDropdownItem>
                </AppDropDown>
            }
        </>
    )
}

const styles = StyleSheet.create({
    dropDownIcon: {
        position: 'absolute',
        top: '25%',
        right: 10
    },
    dropDown: {
        position: 'absolute',
        top: '38%',
        right: -20
    }
})

export default UserActions
