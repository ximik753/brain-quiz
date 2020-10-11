import React from 'react'
import { StyleSheet } from 'react-native'
import AppInputText from '../components/UI/AppInputText'
import AuthContainer from '../components/AuthContainer'
import { useHttp } from '../hooks/http.hook'
import { Controller, useForm } from 'react-hook-form'

const LoginScreen = () => {
    const { post } = useHttp()
    const { control, handleSubmit, formState } = useForm({ mode: 'onChange' })

    const submitHandler = async (value) => {
        try {
            console.log(await post('/auth/login', value))
            //TODO adding token to storage
        } catch (e) {
            //TODO adding error output
        }
    }

    return (
        <AuthContainer
            textButton="Войти"
            styleInputsWrapper={styles.inputsWrapper}
            verticalOffset={-140}
            pressHandler={handleSubmit(submitHandler)}
            isValid={formState.isValid}
        >
            <Controller
                control={control}
                name="login"
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
        height: 190
    }
})

export default LoginScreen
