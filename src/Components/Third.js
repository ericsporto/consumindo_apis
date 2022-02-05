import React from "react";
import axios from "axios";



class Movies extends React.Component{

    state = {
        filmes: [],
    }

    async componentDidMount() {
        axios.get('https://api.tvmaze.com/search/shows?q=star%20wars')
        .then (res => {
            const filmes = res.data;
            this.setState({filmes})
        })
        
    }

    

    render() {
        return (
            <div className="bg-light">
                <h2>Consumindo Api com Componentes de Classes</h2>
                <hr />
                <ul>
                    {this.state.filmes.map((filme, index) => <li key={index} style={{color: 'black'}}>{filme.show.name}</li>)}
                </ul>
            </div>

        )
    }
}
 
export default Movies ;