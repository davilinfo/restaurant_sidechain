import React, { useState, useEffect } from 'react';
import api from '../services/api';
import FoodItemDetail from './FoodItemDetail';
import '../styles.css';

//Componente: Bloco isolado de HTML, CSS e JS o qual não interfere no resto da aplicação. Nesse código está representado por uma função que renderiza algum HTML. (Regra de apenas 1 por arquivo)
//Propriedade: Informações que um componente PAI passa para o componente Filho. Ao utilizar propriedade função da propriedade utiliza (props) para passar propriedade
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade). Utilizar useState [variavel, funcaoParaAtualizarVariavel]

function Menu() {    
    var [foods, setFoods] = useState([]);      
    useEffect (() => {
      async function loadFoods(){
        console.log("loading foods");        
        const response = await api.get('/list');        
        foods = response.data.result;
        setFoods(foods);
      }      
      
      loadFoods();             
    }, []);                 

    return (
        <div id="app">
            <div id="content">
                <div id="leftPan">
                    <div id="recipes">
                        <ul>
                        {                       
                            foods.filter(menu=> menu.type === 4 ).map(food => (                            
                                <FoodItemDetail key={food.type} food={food}></FoodItemDetail>                            
                            ))
                        }              
                        </ul>
                    </div>            
                    <div className="clear" id="end"></div>
                </div>
            </div>            
        </div>        
    );    
        
}
        
export default Menu;