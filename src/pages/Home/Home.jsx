//Css
import styles from "./Home.module.css"

import { useNavigate, Link, Navigate } from "react-router-dom"
import { useState } from "react"
import useFetchDocuments from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail/PostDetail"

export default function Home() {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Ou busque por tags..." onChange={(e) => setQuery(e.target.value)} />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}

        {posts && posts.map((post, key) => (
          <PostDetail post={post} key={post.id} />
        ))}
        
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados nenhum post</p>
            <Link to="/posts/create" className="btn">Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
} 