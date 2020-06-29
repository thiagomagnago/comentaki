import React, { useState, useContext } from 'react';
import firebase from './firebase'
import useDatabasePush from './useDatabasePush';
import { AuthContext } from './auth';

const NewComment = () => {
    const [, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')

    const auth = useContext(AuthContext)
    //console.log(auth)

    if (auth.user === null) {
        return null
    }

    const { displayName } = auth.user
    const [ alternativeDisplayName ] = auth.user.email.split('@')

    const createComment = () => {
        if (comment !== '') {
            save({
                content: comment,
                createAt: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: auth.user.uid,
                    name: displayName || alternativeDisplayName
                }
            })
            setComment('')
        }
    }

    return (
        <div>
            <div className='form-group'>
                <textarea className='form-control' value={comment} onChange={evt => setComment(evt.target.value)} />
            </div>
            <button className='btn btn-primary' onClick={createComment}>Toggle</button>
        </div>
    )
}

export default NewComment