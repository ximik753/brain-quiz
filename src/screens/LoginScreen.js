import React from 'react'
import { Keyboard, StyleSheet } from 'react-native'
import AppInputText from '../components/UI/AppInputText'
import AuthContainer from '../components/AuthContainer'
import { useHttp } from '../hooks/http.hook'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setUserToken } from '../store/actions/user'
import { useLogin } from '../hooks/login.hook'
import { useAlert } from '../hooks/alert.hook'

const LoginScreen = () => {
    const { post, loading } = useHttp()
    const { registerToken } = useLogin()
    const { create } = useAlert()
    const { control, handleSubmit, formState } = useForm({ mode: 'onChange' })
    const dispatch = useDispatch()

    const submitHandler = async (value) => {
        Keyboard.dismiss()

        try {
            const { token } = await post('/auth/login', value)
            await registerToken(token)
            dispatch(setUserToken(token))
        } catch (e) {
            create(e.message)
        }
    }

    return (
        <AuthContainer
            textButton="Войти"
            styleInputsWrapper={styles.inputsWrapper}
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
        </AuthContainer>
    )
}

const styles = StyleSheet.create({
    inputsWrapper: {
        marginTop: 50,
        marginBottom: 80,
        height: 190
    }
})

export default LoginScreen
