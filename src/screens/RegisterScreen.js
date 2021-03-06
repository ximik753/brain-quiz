import React, { useState } from 'react'
import AppInputText from '../components/UI/AppInputText'
import AppSelectSex from '../components/UI/AppSelectSex'
import AuthContainer from '../components/AuthContainer'
import { useHttp } from '../hooks/http.hook'
import { useForm, Controller } from 'react-hook-form'
import { setUserToken } from '../store/actions/user'
import { useDispatch } from 'react-redux'
import { useLogin } from '../hooks/login.hook'
import { useAlert } from '../hooks/alert.hook'
import { Keyboard } from 'react-native'

const RegisterScreen = () => {
    const { post, loading } = useHttp()
    const { registerToken } = useLogin()
    const { create } = useAlert()
    const { control, watch, handleSubmit, formState } = useForm({ mode: 'onChange' })
    const [sex, setSex] = useState(0)
    const dispatch = useDispatch()

    const submitHandler = async (value) => {
        Keyboard.dismiss()

        try {
            const { token } = await post('/auth/register', { ...value, sex })
            await registerToken(token)
            dispatch(setUserToken(token))
        } catch (e) {
            create(e.message)
        }
    }

    return (
        <AuthContainer
            textButton="Создать аккаунт"
            pressHandler={handleSubmit(submitHandler)}
            isValid={formState.isValid}
            loading={loading}
        >
            <Controller
                control={control}
                name="name"
                render={({ onChange }) => (
                    <AppInputText
                        label="Логин"
                        maxLength={7}
                        changeHandler={onChange}
                    />
                )}
                defaultValue=""
                rules={{ required: true, minLength: 3 }}
            />
            <Controller
                control={control}
                name="password"
                render={({ onChange }) => (
                    <AppInputText
                        label="Пароль"
                        secureTextEntry={true}
                        maxLength={32}
                        changeHandler={onChange}
                    />
                )}
                defaultValue=""
                rules={{ required: true, minLength: 6 }}
            />
            <Controller
                control={control}
                name="passwordConfirm"
                render={({ onChange }) => (
                    <AppInputText
                        label="Повторите пароль"
                        secureTextEntry={true}
                        changeHandler={onChange}
                    />
                )}
                defaultValue=""
                rules={{ required: true, validate: value => value === watch('password') }}
            />
            <AppSelectSex
                changeHandler={setSex}
            />
        </AuthContainer>
    )
}

export default RegisterScreen
