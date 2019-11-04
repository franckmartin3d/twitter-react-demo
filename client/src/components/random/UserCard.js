import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'



export class UserCard extends Component {
    render() {
        return (
            <div>
                 <Col xs={6} md={4}>
                        <Image src={this.props.imageUrl} onClick={(event) => {this.props.select(this.props.username)}} roundedCircle/>
                        <h3>{this.props.username}</h3>
                    </Col>
            </div>
        )
    }
}

export default UserCard
