import React from 'react'; 
import Header from '../Header/Header.js'; 
import Form from '../Form/Form.js';
import Cast from '../Cast/cast.js';
import './movie.css'; 

class Movie extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            movie: {
                genres: [], 
                credits: {
                    cast: [],
                    crew: []
                }
            }
        }
        this.getData = this.getData.bind(this); 
    }

    getData() {
        const key = 'f3e9f7d1677c7aa63c9ab526381eeceb';
        const id = window.location.pathname.substring(7); 
        console.log(id); 
        fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + key + "&language=en-US&append_to_response=credits")
        .then(respone => {
            if(respone.status !== 200) {
                console.log("Error:" + respone.status); 
                return; 
            }
            respone.json().then(data => {
                const movie = data; 
                this.setState({movie:movie});
            });
        })
        .catch(error => {
            console.log("Fetch Error: -S " + error); 
        });
    }
    
    componentDidMount() {
        this.getData(); 
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.movie !== this.state.movie) {
            this.getData(); 
        }
    }

    render() {
        const link = 'https://image.tmdb.org/t/p/w300'; 
        return(
            <div className="container">
                <Header />
                <Form id="form" />
                <div className="moviePage">
                    <div className="poster">
                        <img src={this.state.movie.poster_path == null ? 'http://via.placeholder.com/300x450' : (link + this.state.movie.poster_path)} />
                    </div>
                    <section className="movieDetails"> 
                        <h2 className="sectionTitle">{this.state.movie.title}</h2>
                        <ul className="detailList">
                            <li><span className="bold">Release Date: </span>{this.state.movie.release_date}</li>
                            <li><span className="bold">Rating: </span>{this.state.movie.vote_average}</li>
                            <li><span className="bold">Vote Count: </span>{this.state.movie.vote_count}</li>
                            <li><span className="bold">Genres: </span>{this.state.movie.genres.map((element, index) => {
                                if(index < this.state.movie.genres.length - 1) {
                                    return (element.name + ", ");
                                }
                                else {
                                    return element.name; 
                                }
                            })}
                            </li>
                        </ul>
                        <p>{this.state.movie.overview}</p>
                    </section>
                </div>
                <Cast casting={this.state.movie.credits.cast} />
            </div>
        ); 
    }

    
}

export default Movie;