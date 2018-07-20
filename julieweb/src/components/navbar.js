import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


export class Navbar_Head extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Blog</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ระบบสมาชิก
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    โปรไฟล์
                  </DropdownItem>
                  <DropdownItem>
                    ล็อคอิน
                  </DropdownItem>
                  <DropdownItem>
                    สมัครสมาชิก
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    ล็อคเอาท์
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        )
    }
}

export default Navbar_Head
