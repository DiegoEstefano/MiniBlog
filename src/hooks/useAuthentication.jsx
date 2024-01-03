import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

import { useState, useEffect } from 'react'

export const  useAuthentication = () => {
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
    // ----------------------Register-------------------------- 
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

            let systemErrorMessage;

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa incluir pelo menos 6 caracteres"
            } else if (error.message.includes("auth/email-already-in-use")) {
                systemErrorMessage = "E-mail já cadastrado"
            } else if (error.message.includes("auth/invalid-email")) {
                systemErrorMessage = "O e-mail é invalido, tente outro endereço de e-mail"
            } else {
                systemErrorMessage = "Ocorreu um erro, tente mais tarde."
            }
            setLoading(false)
            setError(systemErrorMessage)
        }
    }
    // ----------------------Log Out-------------------------- 

    const LogOut = () => {
        checkIfIsCanceled();
        signOut(auth)
    }


    // -------------------------Login-----------------------------

    /* const Login = async (data) => {
        checkIfIsCanceled();

        setLoading(true);
        setError(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (error) {
            let systemErrorMessage;

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado"
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta"
            } else {
                systemErrorMessage = "Ocorreu um erro por favor tente mais tarde"
            }
            setError(systemErrorMessage)
            setLoading(false)
        }
    } */


    useEffect(() => {
        setCanceled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        LogOut,
        checkIfIsCanceled
    };

}