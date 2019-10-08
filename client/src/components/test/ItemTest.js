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

test(){
    console.log(this.state.items);
};

    render() {
        return (
            <div>
                <h2>Tweet test</h2>
                <ul>
                    {this.state.items.map(items =>
                    <li key={items.id}>{items.text} {items.user.screen_name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ItemTest;
