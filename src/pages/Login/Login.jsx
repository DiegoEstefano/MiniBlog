
import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";
import UserLogin from "../../hooks/UserLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: loginError, loading } = UserLogin();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      // Lógica adicional após o login, se necessário
    } catch (error) {
      setError(error.message || "Ocorreu um erro durante o login.");
    }
  };


  useEffect(() => {
    if (loginError) {
      setError(loginError);
    }
  }, [loginError]);

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
