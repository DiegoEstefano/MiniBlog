import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
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
        if (canceled) {
            return
        }
    }

    const createUser = async (data) => {

        checkIfIsCanceled();
        setLoading(true)
        setError(null)

        try {

            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })


            setLoading(false)

            return user;

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage;

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa incluir pelo menos 6 caracteres"
            } else if (error.message.includes("EMAIL_EXISTS")) {
                systemErrorMessage = "E-mail já cadastrado"
            } else if (error.message.includes("INVALID")){
                systemErrorMessage = "O e-mail é invalido, tente outro endereço de e-mail"
            } else {
                systemErrorMessage = "Ocorreu um erro, tente mais tarde."
            }
            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    useEffect(() => {
        setCanceled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading
    };

}