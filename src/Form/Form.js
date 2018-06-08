import React from 'react'; 
import search from './search.svg';
import FormResult from './FormResult.js';
import './form.css';  

class Form extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            results: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnKeyUp = this.handleOnKeyUp.bind(this); 
    }

    handleSubmit(e) {
        e.preiventDefault(); 
    }

    handleOnKeyUp(e) {
        document.getElementById("results").className = "formResults"; 
        let val = document.getElementById("searchInput").value; 
       
        if (val === '') {
            document.getElementById("results").className = "noDisplay"; 
        }
        const key = 'f3e9f7d1677c7aa63c9ab526381eeceb'; 
       
        fetch("https://api.themoviedb.org/3/search/movie?api_key=" + key + "&language=en-US&query=" + val + "&page=1&include_adult=false")
        .then(response => {
            if(response.status !== 200) {
                console.log("Error: " + response.status); 
                return;  
            }
            response.json().then(data => {
                const results = data.results; 
                this.setState({results:results}); 
            });
        })
        .catch(error => {
            console.log("Fetch error " + error);
        }); 
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} id="form">
                <img src={search} alt="search icon" className="searchIcon" />
                <input id="searchInput" onKeyUp={this.handleOnKeyUp} type="text" className="searchBar" placeholder="Search a movie" required/>
                <FormResult results={this.state.results}  />
            </form>
        ); 
    }
}

export default Form; 