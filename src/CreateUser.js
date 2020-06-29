import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
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
            <h3>Criar nova conta:</h3>
            {/*JSON.stringify(auth.createUser)*/}
            {
                auth.createUser.createUserState.error !== '' &&
                <p>{auth.createUser.createUserState.error}</p>
            }
            <div className='form-group'>
                <input className='form-control' type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
            </div>
            <div className='form-group'>
                <input className='form-control' type='password' placeholder='Seu senha' value={form.passwd} onChange={onChange('passwd')} />
            </div>
            <button className='btn btn-primary' onClick={() => { auth.createUser.createUser(form.email, form.passwd) } }>Criar conta</button>
        </div>
    )
}

export default CreateUser