import React from 'react';
import '../App.css';


export default function DisplayQuote({ quote }) {
    return (
        <div className="card-bg">
            <div>
            <img className="imgtitle" src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/79/Les_simpson_logo_France.png/1200px-Les_simpson_logo_France.png" alt=""/>
            </div>
            <div className="quotecard">
                <img
                    className="img"
                    src={quote.image}
                    alt={quote.character}
                />
                <div className="quotetext">
                    <div >{quote.quote}</div>
                    <p className="character">By {quote.character}</p>
                </div>
            </div>
        </div>
    );
};