import React from 'react';
import axios from 'axios';
import '../App.css';


class Quotecard extends React.Component {
    state = {
        quotes: [
            {
                quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
                character: "Nelson Muntz",
                image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
                characterDirection: "Left"
            }
        ]
    }

    getQuote = () => {
        // Send the request
        axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            // Extract the DATA from the received response
            .then(response => response.data)
            // Use this data to update the state
            .then(data => {
                this.setState({ quotes: data });
            });
    }
    render() {
        return (
            <div className="body">
                <div className="card-bg">
                    <div>
                        <img className="imgtitle" src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/79/Les_simpson_logo_France.png/1200px-Les_simpson_logo_France.png" alt="" />
                    </div>
                    <div className="quotecard">
                        <img
                            className="img"
                            src={this.state.quotes[0].image}
                            alt={this.state.quotes[0].character}
                        />
                        <div className="quotetext">
                            <div>{this.state.quotes[0].quote}</div>
                            <p className="character">By {this.state.quotes[0].character}</p>
                        </div>
                    </div>
                </div>
                <button className="btn" type="button" onClick={this.getQuote}>Get a new quote!</button>
            </div>
        )
    }
}

export default Quotecard