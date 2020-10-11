import React, { useState } from 'react'
import AppInputText from '../components/UI/AppInputText'
import AppSelectSex from '../components/UI/AppSelectSex'
import AuthContainer from '../components/AuthContainer'
import { useHttp } from '../hooks/http.hook'
import { useForm, Controller } from 'react-hook-form'

const RegisterScreen = () => {
    const { post } = useHttp()
    const { control, watch, handleSubmit, formState } = useForm({ mode: 'onChange' })
    const [sex, setSex] = useState(0)

    const submitHandler = async (value) => {
        try {
            await post('/auth/register', { ...value, sex })
            //TODO adding token to storage
        } catch (e) {
            //TODO adding error output
        }
    }

    return (
        <AuthContainer
            textButton="Создать аккаунт"
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
