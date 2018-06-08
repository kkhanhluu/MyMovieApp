import React from 'react'; 
import Header from './Header/Header.js'; 
import Form from './Form/Form.js';
import NewMovie from './NewMovie/newmovie.js';

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <Header />
                <Form />
                <NewMovie />
            </div>
        ); 
    }
}

export default Home; 