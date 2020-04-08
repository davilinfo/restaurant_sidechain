import React, { useState, useEffect } from 'react';
import api from './services/api';
import FoodItem from './components/FoodItem';
import FoodItemDetail from './components/FoodItemDetail';

//Componente: Bloco isolado de HTML, CSS e JS o qual não interfere no resto da aplicação. Nesse código está representado por uma função que renderiza algum HTML. (Regra de apenas 1 por arquivo)
//Propriedade: Informações que um componente PAI passa para o componente Filho. Ao utilizar propriedade função da propriedade utiliza (props) para passar propriedade
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade). Utilizar useState [variavel, funcaoParaAtualizarVariavel]

function App() {        
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
                <div id="welcome">
                    <h2></h2>
                    <img src="images/img_welcome.jpg" width="72" height="72" alt="" />
                    <p><span class="headline">Enjoy delicious food</span><br />
                    Seafood, meat, barbecue, menu and delicious dessert created for you. Payment and transactions details managed by Lisk Restaurant sidechain </p>
                    <div class="clear"></div>
                </div>
                <div id="services">
                    <h2></h2>
                    <p class="headline2">You have the option to choose the following foods.</p>
                    <ul >
                    {                       
                        foods.map(food => (
                            <FoodItem key={food.type} food={food}></FoodItem>
                        ))
                    }              
                    </ul>
                    <div class="clear"></div>
                </div>
                </div>
                <div id="rightPan">
                <div id="recipes">
                    <h2></h2>
                    {                       
                        foods.map(food => (
                            <FoodItemDetail key={food.type} food={food}></FoodItemDetail>
                        ))
                    }                
                </div>
                </div>
                <div class="clear" id="end"></div>
            </div>            
        </div>
      );
    }
    
    export default App;