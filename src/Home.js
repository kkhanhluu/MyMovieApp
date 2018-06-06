import React from 'react'; 
import Header from './Header/Header.js'; 
import Form from './Form/Form.js';

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <Header />
                <Form />
            </div>
        ); 
    }
}

export default Home; 