import React, { useContext, useState } from 'react';
import { AuthContext } from './auth';


const FormDisplayName = ({ displayName, user }) => {
    const [newDisplayName, setNewDisplayName] = useState(displayName)
    const onChange = evt => {
        setNewDisplayName(evt.target.value)
    }
    const save = () => {
        if (newDisplayName !== '') {
            user.updateProfile({ displayName: newDisplayName })
        }
    }
    return (
        <>
            <div className='form-group'>
                <input className='form-control' type='text' value={newDisplayName} onChange={onChange} />
            </div>
            <button className='btn btn-primary' onClick={save}>Sava display name</button>
        </>
    )
}

const UserInfo = () => {
    const auth = useContext(AuthContext)

    if (auth.user === null) {
        return null
    }

    const { displayName } = auth.user
    const [ alternativeDisplayName ] = auth.user.email.split('@')
    const dn = displayName || alternativeDisplayName

    return (
        <>
            <p>Olá {dn}!</p>
            <FormDisplayName displayName={dn} user={auth.user} />
            <button className='btn btn-primary ml-2' onClick={auth.signout}>Sair</button>
        </>
    )
}

export default UserInfo