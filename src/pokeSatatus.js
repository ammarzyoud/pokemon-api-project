import React, { Component } from 'react'
import axios from "axios";


class pokeSatatus extends Component {
    state = {
        name : "",
        pokeindex : "",
        imgurl : "",
        types : [],
        description : "",
        stats : {
            hp : "",
            attack : "",
            speed : "",
            specialAttack : "",
            defense : "",
            specialDefense : ""
        },
        height : "",
        weight : "",
        eggGroup : "",
        abilities : "",
    };

async componentDidMount(){
    const { pokeindex } = this.props.match.params;
    const pokemonurl = `https://pokeapi.co/api/v2/pokemon/${pokeindex}/`;
    const pokespecies = `https://pokeapi.co/api/v2/pokemon-species/${pokeindex}/`;
    const pokeRes = await axios.get(pokemonurl);
    const name = pokeRes.data.name;
    const imgurl = pokeRes.data.sprites.front_default;
    let {hp , attack , speed , specialAttack , defense , specialDefense} = "";

    pokeRes.data.stats.map(stat => {
        switch(stat.stat.name){
            case "hp":
                hp = stat["base_stat"];
            break;
            case "attack":
                attack = stat["base_stat"];
            break;
            case "speed":
                speed = stat["base_stat"];
            break;
            case "special-attack":
            specialAttack = stat["base_stat"];
            break;
            case "defense":
                defense = stat["base_stat"];
            break;
            case "special-defense":
                specialDefense = stat["base_stat"];
            break;
        }
    });
const height = pokeRes.data.height;
const weight = pokeRes.data.weight;
const types = pokeRes.data.types.map(type => type.type.name);
const abilities = pokeRes.data.abilities.map(ability => {
    return ability.ability.name
});

    await axios.get(pokespecies).then(res => {
        let description = '';
        res.data.flavor_text_entries.some(flavor => {
          if (flavor.language.name === 'en') {
            description = flavor.flavor_text;
            return;
          }
        });
    const eggGroup = res.data["egg_groups"].map(group => {
        return group.name
    });
    this.setState({
        description,
        eggGroup
    });
});

this.setState(
    {
        imgurl,
        pokeindex,
        name,
        types,
        stats : {
            hp , attack , speed , specialAttack , defense , specialDefense
        },
        height,
        weight,
        abilities
    }
)

};

    render() {    
        return (
            <div className = "text-center bg-light">
                <img src = {this.state.imgurl} />
                <h1>Name : {this.state.name}</h1>
                <br></br>
                <h1>Type : {this.state.types}</h1>
                <br></br>
                <p>Description : {this.state.description}</p>
                <br></br>
                <p>egg Group : {this.state.eggGroup}</p>
                <br></br>
                <p>Hp : {this.state.stats.hp}</p>
                <br></br>
                <p>Attack : {this.state.stats.attack}</p>
                <br></br>
                <p>Speed : {this.state.stats.speed}</p>
                <br></br>
                <p>specialAttack : {this.state.stats.specialAttack}</p>
                <br></br>
                <p>Defense : {this.state.stats.defense}</p>
                <br></br>
                <p>specialDefense : {this.state.stats.specialDefense}</p>
            </div>
        )
    };
};
export default pokeSatatus;