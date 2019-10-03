import React, { Component } from 'react'
import './ItemTest.css';


class ItemTest extends Component {
constructor(){
    super();
    this.state = {
        items: []
    }
}

// life cycle of component
componentDidMount(){
    fetch('/api/list')
    .then(res => res.json())
    .then(items => this.setState({items}, ()=> console.log("items fetched", items)));
}
 

    render() {
        return (
            <div>
                <h2>Fetch Items test</h2>
                <ul>
                    {this.state.items.map(items =>
                    <li key={items.id}>{items.user} {items.tweet}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ItemTest;
