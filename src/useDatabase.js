import { useEffect, useState } from 'react'
import firebase from './firebase'

const useDatabase = endpoint => {
    const [data, setData] = useState({})

    useEffect(() => {
        const ref = firebase.database().ref(endpoint)
        ref.on('value', snapshot => { setData(snapshot.val()) })

        return () => {
            ref.off()
        }
    }, [endpoint])

    //return { ...data, endpoint }
    return data
}

export default useDatabase