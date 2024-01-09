// CSS
import styles from '../Search/Search.module.css'

import { useQuery } from "../../hooks/useQuery"
//hooks
import useFetchDocuments from '../../hooks/useFetchDocuments'

//components
import { Link } from 'react-router-dom'
import PostDetail from '../../components/PostDetail/PostDetail'

export default function Search() {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h1>Resultados encontrados para: {search}</h1>
      <div className="post-list">
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};