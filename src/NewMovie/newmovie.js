import React from 'react'; 
import {Link} from 'react-router-dom';
import './newmovie.css';
import Cast from '../Cast/cast';
class NewMovie extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const key = 'f3e9f7d1677c7aa63c9ab526381eeceb'; 

        let date = new Date(); 
        let today = date.getFullYear() + "-" + (date.getMonth() + 1)  + "-" + date.getDay(); 
        let oneMonthAgo = (date.getMonth() === 0 ? (date.getFullYear() - 1) : date.getFullYear())
        + "-" + (date.getMonth() === 0 ? "12" : date.getMonth()) + "-" + date.getDay(); 
        
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=" 
        + oneMonthAgo + "&primary_release_date.lte=" + today)
        .then(response => {
            if(response.status !== 200) {
                console.log("Error " + response.status); 
            }
            response.json().then(data => {
                console.log(data);
                const movies = data.results;
                this.setState({ movies }); 
            })
        })
        .catch(error => {
            console.log("Error FETCH -S: ", error); 
        })
    }

    render() {
        return(
            <section>
                <h2>New Release </h2> 
                <div className="newMovies">
                {this.state.movies.map((element, index) => {
                    return(
                        <Link to={"/movie/" + element.id} className="movieLink">
                            <img src={element.poster_path === null ? 'http://via.placeholder.com/300x450' :
                                     ("https://image.tmdb.org/t/p/w300/" + element.poster_path)} className="imgResponsive"/>
                            <div className="movieInfo">
                                <h3>{element.title}</h3>
                                <p>{element.release_date}</p>
                            </div>
                        </Link>
                    );
                })}
                </div> 
            </section>
        ); 
    }
}

export default NewMovie;