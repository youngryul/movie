import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, name}) {
    return      (
        <div className={styles.container}>
            <img className={styles.image} src={`${coverImg}.jpg`} alt={name}/>
            <Link className={styles.title} to={`/movie/${id}`}>{name}</Link>
        </div>)
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Movie;