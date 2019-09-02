import React, { Component } from 'react';
import axios from "axios";
import Card from "./Card";

class List extends Component {
    state = {
        url : "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100",
        pokemon : null
    };

async componentDidMount(){
    const res = await axios.get(this.state.url);
    this.setState({pokemon: res.data["results"]});
};

    render() {
        return (
            
            <div>
                {this.state.pokemon ? (<div className = "row">{this.state.pokemon.map(pokemon => (
                <Card 
                name = {pokemon.name}
                url = {pokemon.url}
                key = {pokemon.name}
                />))}</div>)
                 : (<h1>loading</h1>)}
                
            </div>
        );
    }
}

export default List;