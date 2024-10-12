import {useState, useEffect} from "react";
import Movie from './Movie';
import styles from "./Home.module.css"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await( await  fetch(
                'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023')
        ).json();

        setMovies(json.data.results);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>MAVEL</h1>
            </div>
            {loading ?
            (<h1>Loading...</h1>) :
            (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie  key={movie.id}
                                id={movie.id}
                                coverImg={movie.thumbnail.path}
                                name={movie.name}/>
                    ))}
                </div>
            )
        }
        </div>
    );

}


export default Home;

