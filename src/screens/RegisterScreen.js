import React, { useState } from 'react'
import AppInputText from '../components/UI/AppInputText'
import AppSelectSex from '../components/UI/AppSelectSex'
import AuthContainer from '../components/AuthContainer'

const RegisterScreen = () => {
    const [sex, setSex] = useState(0)

    return (
        <AuthContainer
            textButton="Создать аккаунт"
        >
            <AppInputText
                label="Логин"
                maxLength={5}
            />
            <AppInputText
                label="Пароль"
                secureTextEntry={true}
            />
            <AppInputText
                label="Повторите пароль"
                secureTextEntry={true}
            />
            <AppSelectSex
                changeHandler={setSex}
            />
        </AuthContainer>
    )
}

export default RegisterScreen
