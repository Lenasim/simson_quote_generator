import React from 'react';
import axios from 'axios';
import DisplayQuote from './DisplayQuote';
import '../App.css';

const sampleQuote = {
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    characterDirection: "Left"
}
class Quotecard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quote: sampleQuote };
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote() {
        // Send the request
        axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            // Extract the DATA from the received response
            .then(response => response.data)
            // Use this data to update the state
            .then(data => {
                this.setState({ quote: data[0] });
            });
    }
    render() {
        return (
            <div className="body">
            <DisplayQuote quote={this.state.quote} />
            <button className="btn" type="button" onClick={this.getQuote}>Get a new quote!</button>
            </div>
        )
    }

}
// https://static.lpnt.fr/images/2019/08/08/19185776lpw-19185932-article-jpg_6428849_980x426.jpg

export default Quotecard