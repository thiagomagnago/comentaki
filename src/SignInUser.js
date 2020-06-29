import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const SignInUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
        email: '', 
        passwd: ''
    })

    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }

    if (auth.user !== null) {
        return null
    }

    return (
        <div className='mt-5'>
            <h3>Entrar na sua conta:</h3>
            {
                auth.signInUser.signInUserState.error !== '' &&
                <p>{auth.signInUser.signInUserState.error}</p>
            }
            <div className='form-group'>
                <input className='form-control' type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
            </div>
            <div className='form-group'>
                <input className='form-control' type='password' placeholder='Seu senha' value={form.passwd} onChange={onChange('passwd')} />
            </div>
            <button className='btn btn-primary' onClick={() => { auth.signInUser.signInUser(form.email, form.passwd) }
            }>Entrar conta</button>
        </div>
    )
}

export default SignInUser