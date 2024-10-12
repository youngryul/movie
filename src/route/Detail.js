import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react';
import styles from './Detail.module.css';

function Detail() {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)
        ).json();
        setMovies(json.data.results);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <div key={movie.id} className={styles.box}>
                    <img className={styles.image} src={`${movie.thumbnail.path}.jpg`} alt={movie.name}/>
                    <span className={styles.title}>Name: {movie.name}</span>
                    <span className={styles.title}>Modified: {(movie.modified).split("T")[0]}</span>
                </div>
            ))}
        </div>
    )
}

export default Detail;