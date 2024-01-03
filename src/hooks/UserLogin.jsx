
import { useState } from 'react';

import {
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";

import { useAuthentication } from "./useAuthentication";

const UserLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [canceled, setCanceled] = useState(false);
    const {checkIfIsCanceled, auth} = useAuthentication()

  



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

        if (error.code === "auth/user-not-found") {
            systemErrorMessage = "Usuário não encontrado";
        } else if (error.code === "auth/wrong-password") {
            systemErrorMessage = "Senha incorreta";
        } else {
            systemErrorMessage = "Ocorreu um erro, tente mais tarde.";
        }

        setLoading(false);
        setError(systemErrorMessage);
    };

    const cancelLogin = () => {
        setCanceled(true);
    };

    return {
        login,
        error,
        loading,
        cancelLogin
    };
};

export default UserLogin;