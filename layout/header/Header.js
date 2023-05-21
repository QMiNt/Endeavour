import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
// import Image from "next/image";
import logo from "../../assets/images/logos/green-logo.png";
import logo2 from "../../assets/images/logos/white-logo.png";
// import image from "next/image";
// import logo from "../../assets/images/logos/white-text.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="" id="top">
      <div className="" style={{background:"#fdbfa8",boxShadow:"0px 5px 44px -11px rgba(0,0,0,0.75)"}}>
        <Container>
          <Navbar className="navbar-expand-lg h2-nav" style={{padding:"0px",height:"64px"}}>
            <NavbarBrand href="#">
              <Image src={logo2} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About Us</NavLink>
                </NavItem>
                
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Services <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem>Separated link</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>One more separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                
                <NavItem>
                  <a className="btn btn-info" href="#">
                    Talk to our BOT
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>    
    </div>
  );
};

export default Header;
