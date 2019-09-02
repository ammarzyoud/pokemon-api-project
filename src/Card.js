import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Card extends Component {
    state = {
        name : "",
        imgurl: "",
        pokeindex: "",
        imgloading: true,
        requsterror: false
    }

componentDidMount(){
    const name = this.props.name;
    const url = this.props.url;
    const pokeindex = url.split("/")[url.split("/").length -2];
    const imgurl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeindex}.png?raw=true`;
    this.setState( { name : name, imgurl : imgurl , pokeindex : pokeindex })
}

    render() {
        return (
            <div className = "col-md-4 mb-5 mt-5">
                <Link to={`/pokeSatatus/${this.state.pokeindex}/`}>
                    <div className = "box">
                        <div className = "text-center">
                            <img src = {this.state.imgurl} 
                            onLoad={() => this.setState({imgloading : false})}
                            onError={() => this.setState({requsterror : true})}
                            />
                            <p className = "font-weight-bold bg-light">{this.state.name}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
export default Card;