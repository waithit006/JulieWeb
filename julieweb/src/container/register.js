import React, { Component } from 'react'
import RegisterForm from '../components/registerForm'
import { Container, Row, Col } from 'reactstrap';
import {connect} from 'react-redux'
import { fetchRegisterMembers} from '../actions/authenticate'
import { withRouter } from "react-router-dom";

class Register extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
       data:{username:'',
      password:'',
      password_confirm:'',
      email:''}
    };
    this.handleOnchangeRegister = this.handleOnchangeRegister.bind(this)
    this.onsubmitRegister = this.onsubmitRegister.bind(this)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleOnchangeRegister(event,type){
       let {data} = this.state;

       data[type] = event.target.value;
    
        this.setState({data})
    console.log(data)
  }

  onsubmitRegister(e){
    e.preventDefault();
    console.log("hello")
    this.props.register(this.state.data.username,this.state.data.email,this.state.data.password)

  }

  render() {
    return (

        <div className="">
            <Container>
              <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <RegisterForm handleOnchangeRegister={this.handleOnchangeRegister} data={this.state.data} onsubmitRegister={this.onsubmitRegister}/>
              </Col>
              </Row>
              </Container>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  register: (username,email,password) => dispatch(fetchRegisterMembers(username,email,password))
})

export default withRouter(connect(null, mapDispatchToProps)(Register))
