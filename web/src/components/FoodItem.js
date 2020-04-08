import React from 'react';

import '../styles.css';

function FoodItem(props){
    const { food } = props;

    return (
        <li><a href="#"> {food.food} </a></li>

        /*<li className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name}></img>
              <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </div>
            </header>
            <p>
              {dev.bio}
            </p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        </li>*/
    );
}

export default FoodItem;