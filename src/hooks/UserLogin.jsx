
import { useState } from 'react';

import {
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";

import { useAuthentication } from "./useAuthentication";

const UserLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { checkIfIsCanceled, auth } = useAuthentication()


    const login = async (email, password) => {
        checkIfIsCanceled();

        setLoading(true);
        setError(null);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
        } catch (error) {
            handleAuthError(error);
        }
    };


    const handleAuthError = (error) => {
        let systemErrorMessage;

        if (error.message.includes("auth/invalid-credential")) {
            systemErrorMessage = "Usuário ou senha incorreta";
        } else if (error.message.includes("wrong-password")) {
            systemErrorMessage = "Senha incorreta.";
        } else {
            systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
        }
   
        setLoading(false);
        setError(systemErrorMessage);
        console.log(error.message)
        console.log(systemErrorMessage)
    };


    return {
        login,
        error,
        loading,
    };
};

export default UserLogin;