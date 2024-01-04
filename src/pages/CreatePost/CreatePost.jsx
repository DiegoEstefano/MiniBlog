import styles from './Createpost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from '../../hooks/useInsertDocument'
import 

export default function Createpost() {
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [body, setBody] = useState();
    const [tags, setTags] = useState();
    const [formError, setFormError] = useState();

    const {useInsertDocument, reponse} = useInsertDocument();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("")

        // Validade image url

        // Create array of tags

        // check all the values

        useInsertDocument({
            title,
            image,
            body, 
            tags,
            uid:
        })
    }

    return (
        <div className={styles.create_post}>
            <h2>Criar post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título</span>
                    <input type="text"
                        name='title'
                        required
                        placeholder='Pense em um bom título...'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>URL da imagem</span>
                    <input type="image"
                        name='Insira uma imagem para o seu post'
                        required
                        placeholder='Pense em um bom título...'
                        onChange={(e) => setImage(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Conteúdo</span>
                    <textarea
                        name='Insira o conteúdo do teu post'
                        required
                        placeholder='Pense em um bom título...'
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </label>
                <label>
                    <span>Tags: </span>
                    <input type="text"
                        name='tags'
                        required
                        placeholder='Insira as tags separadas por virgula'
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                <button className="btn">Entrar</button>
               {/*  {!loading && <button className="btn">Entrar</button>}
                    <button className="btn" disabled>
                        Aguarde...
                    </button>
                {loading && (
                )}
                {error && <p className="error">{error}</p>} */}
            </form>
        </div>
    )
}