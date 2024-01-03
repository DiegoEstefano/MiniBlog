import styles from './Createpost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext"

export default function Createpost() {
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [body, setBody] = useState();
    const [tags, setTags] = useState();
    const [formError, setFormError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>Criar post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
            <form onSubmit={handleSubmit}>

            </form>
        </div>
    )
}