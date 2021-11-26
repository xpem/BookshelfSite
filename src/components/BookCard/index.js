import React from 'react';
import './styles.css';

function BookCard ({ Title, SubTitle ,Volume, Authors,Year,Pages,Rate }) {
    return (
        <div className="Card-Book">
        <p className="p-title"><b>{Title}</b></p>
        <p className="p-subtitle">{SubTitle}; Vol.: {Volume}</p>
        <p className="p-authoryear">{Authors}; Ano {Year}</p>
        <p className="p-pages">Páginas: {Pages}</p>
        <p className="p-rate">Avaliação pessoal: {Rate} de 5</p>
       </div>
    );
}

export default BookCard;