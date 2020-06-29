import React, { useContext } from 'react';
import Time from './Time';
import { AuthContext } from './auth';

const Comment = ({ comment }) => {
    const auth = useContext(AuthContext)

    return (
        <div>
            {comment.content}&nbsp;
            Por: {comment.user.name}&nbsp;
            Em: <Time timestamp={comment.createAt} />
        </div>
    )
}

export default Comment