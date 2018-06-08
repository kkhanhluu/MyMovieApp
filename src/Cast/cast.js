import React from 'react'; 
import './cast.css'; 

class Cast extends React.Component {
    
    render() {
        const link = "https://image.tmdb.org/t/p/w300/"; 
        return(
            <React.Fragment>
            <h3>Cast </h3>
            <div class="figureContainer">
                {this.props.casting.map((actor, index) => {
                    return (
                        <figure key={index}>
                            <img src={actor.profile_path === null ? "http://via.placeholder.com/300x450" : (link + actor.profile_path)} className="imgResponsive" />
                            <figcaption>{actor.name}</figcaption>
                        </figure>
                    );  
                })}
            </div>
            </React.Fragment>
        );
    }
}

export default Cast; 