
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


class RegisterForm extends Component {

    onChangeColorBox(check) {
        if (check) {
            return { borderColor: '#f86c6b' }
        }
    }


    render() {
        const { handleOnchangeRegister, data, onsubmitRegister} = this.props;

        return (
            <div>

                <Form className="shadow p-3 mb-5 bg-white rounded mt-3">
                   <div className="header mb-3">
                   <h3>สมัครสมาชิก</h3>
                   </div>
                    <FormGroup row>
                        <Label for="username" xs={12} sm={12} md={3}>ชื่อผู้ใช้งาน</Label>

                        <Col xs={12} sm="12" md="9">
                            <Input type="username" name="username" id="username" style={this.onChangeColorBox(data.username.trim()==='')} placeholder="Username" valid={false}
                            onChange={(e) => handleOnchangeRegister(e,'username')} value={data.username} required/>
                        </Col>
                        <Col sm="12" md={{ size: 'auto', offset: 3 }}>
                        <FormText >มีความอย่างน้อย 6 ตัวอักษร ประกอบไปด้วย A-Z a-z 0-9 เท่านั้น.</FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label for="examplePassword" xs={12} sm={12} md={3}>รหัสผ่าน</Label>
                        <Col xs={12} sm="12" md="9">
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" style={this.onChangeColorBox(data.password.trim() === '')}
                                onChange={(e) => handleOnchangeRegister(e, 'password')} value={data.password}/>
                        </Col>
                        <Col sm="12" md={{ size: 'auto', offset: 3 }}>
                        <FormText>รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัว</FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row >
                        <Label for="examplePassword" xs={12} sm={12} md={3}>ยืนยันรหัสผ่าน</Label>
                        <Col xs={12} sm="12" md="9">
                            <Input type="password_confirm" name="password_confirm" id="password_confirm" placeholder="Password Comfirm" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" xs={12} sm={12} md={3}>อีเมล์</Label>

                        <Col xs={12} sm="12" md="9">
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" style={this.onChangeColorBox(data.email.trim() === '')}
                                onChange={(e) => handleOnchangeRegister(e, 'email')} value={data.email}
                            />
                        </Col>
                    </FormGroup>
                    <Button color="primary" onClick={(e) => onsubmitRegister(e)}>สมัครสมาชิก</Button>
                </Form>
            </div>
        )
    }
}

export default RegisterForm
