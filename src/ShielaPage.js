  
import React, { Component } from 'react';
import fetch from 'superagent';
import Header from './Header.js'
import ShielaList from './ShielaList.js';

export default class ShielaPage extends Component {
    state = {
        shielas: [],
        loading: false,
    }
    componentDidMount = async () => {
        const shiela = await fetch.get(`https://salty-meadow-30783.herokuapp.com/rogues`)

        this.setState({
            shielas: shiela.body,
            loading: false
        })

        console.log(this.state.shielas)
    }

    handleBoolean = async (e) => {
        
    }

    render() {
        return (
            <div>
                <Header />
                <div className="shielas">
                {
                    this.state.shielas.length === 0
                    ? <img className="loading" src="/shiela.png" alt="loading..." />
                    : this.state.shielas.map(shielas =>
                        <div key={shielas.shielas}>
                            <ShielaList
                            shielas={shielas}/>
                        </div>
                )}
                </div>
            </div>
        )
    }
}