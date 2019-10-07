import React, { Component } from 'react'
import './ItemTest.css';


class ItemTest extends Component {
constructor(){
    super();
    this.state = {
        items: "employees":[
            { "firstName":"John", "lastName":"Doe" },
            { "firstName":"Anna", "lastName":"Smith" },
            { "firstName":"Peter", "lastName":"Jones" }
          ]
    }
}

// life cycle of component
// componentDidMount(){
//     fetch('/api/list')
//     .then(res => res.json())
//     .then(items => this.setState({items}, ()=> console.log("items fetched", items)));
// }

test(){
    console.log(this.state.items);
};

    render() {
        return (
            <div>
                <h2>Tweet test</h2>
                <p>{this.state.items}</p>
            </div>
        )
    }
}

export default ItemTest;
