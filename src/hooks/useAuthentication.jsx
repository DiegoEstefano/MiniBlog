import {
    getAuth,
    createUserWithEmailAndPassword,
    singInWithEmailAndPassword,
    updateProfile,
    singOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const userAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup
    //deal with memory leak
    const [canceled, setCanceled] = useState(false)

    const auth = getAuth()

    function checkIfIsCanceled() {
        if(canceled) {
            return
        }
    }


}