import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class Images extends Component {

    log = (props) =>{
        if(!this.props.elon[0])
            return;
        console.log(this.props.elon[0].user)
    }

    

    render(props) {

        //check for props to load before rendering / failsafe
        if(!this.props.elon[0])
        return <Container>error</Container>;

        if(!this.props.nasa[0])
        return <Container>error</Container>;

        if(!this.props.neil[0])
        return <Container>erro</Container>;

        if(!this.props.cap[0])
        return <Container>error</Container>;


        return (
          
            <Container>
             {this.log()}
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={this.props.elon[0].user.profile_image_url} onClick={(event) => {this.props.selectElon()}} roundedCircle/>
                        <h3>Elon Musk </h3>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={this.props.nasa[0].user.profile_image_url} onClick={(event) => {this.props.selectNasa()}} roundedCircle/>
                        <h3>N.A.S.A</h3>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={this.props.neil[0].user.profile_image_url} onClick={(event) => {this.props.selectNeil()}} roundedCircle/>
                        <h3>Neil D.Tyson</h3>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={this.props.cap[0].user.profile_image_url} onClick={(event) => {this.props.selectCap()}} roundedCircle/>
                        <h3>Chris Hadfield</h3>
                    </Col>
                   
                </Row>
                </Container>
        )
    }
}

export default Images
