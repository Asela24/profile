import './AutoPage.css';
import {useState} from "react";

export default function AutoPage() {

    // состояния для всего

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // состояния для вывода ошибки
    const [passwordError, setPasswordError] = useState('Введите email')
    const [emailError, setEmailError] = useState('Введите пароль')

    // состояния для проверки пустоты ячейки
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    // валидация почты
    const emailInput = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailDirty(true)
            setEmailError('Некоректный email')
        } else {
            setEmailError('')
        }
    }

    // блюр
    const blurInput = (e) => {
        switch (e.target.name) {
            case 'email' :
                setEmail(e.target.value)
                if (email === '') {
                    setEmailDirty(true)
                    setEmailError('Введите email')
                }
                break
            case 'password':
                setPassword(e.target.value)
                if (password === '') {
                    setPasswordDirty(true)
                    setPasswordError('Введите пароль')
                }
                break
            default: {
                setEmailDirty(false)
                setEmailDirty(false)
            }

        }
    }

    //проверка пароля
    const passwordInput = (e) => {
        setPassword(e.target.value)
        if (password.length < 8 && password !== '') {
            setPasswordDirty(true)
            setPasswordError('Пароль должен быть длинее 8 символов')
        }
    }

    return(
        <div>
            <form className={'container'}>
                <div className="container_auto">
                    <div className="entrance_format">Login</div>
                <div className="form_container">
                    <div className={'input_container'}>

                        <div className={'names'}> Email </div>
                        <input placeholder='Input email' className={'input-text input-text__user-input'} onBlur={(e) => blurInput(e)} name='email' onChange={e => emailInput(e)} value={email}/>
                        {(emailDirty && emailError) && <div className={'error'}> {emailError} </div>}

                        <div className={'names'}>Password</div>
                        <input type='password' className={'input-text input-text__user-input'} placeholder='Input password' onBlur={(e) => blurInput(e)} name='password' onChange={(e) => passwordInput(e)}  value={password} />
                        {(passwordDirty && passwordError) && <div className={'error'}> {passwordError} </div>}

                    </div>

                    <div className={'form-button'}>
                    <button className={'form-button form-button__text'}> Login</button>
                    </div>
                </div>
                </div>
            </form>
        </div>
    )
}

