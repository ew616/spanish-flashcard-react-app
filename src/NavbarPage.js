import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

//MDB Bootstrap React Navbar, adjusted with correct routes, dropdown is currently commented out
function NavbarPage() {
  const { isOpen, setIsOpen } = useState(false);

  function toggleCollapse() {
    let opposite = !isOpen;
    setIsOpen(opposite);
  }

  return (
    <MDBNavbar color="unique-color-dark" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Cartas</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem className="navbar-item">
            <MDBNavLink to="/TestYourself" href="/TestYourself">
              Vocab Test
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="navbar-item">
            <MDBNavLink to="/AddingToBankRoute">Add Words</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="navbar-item">
            <MDBNavLink to="/ArticleFetching">Practice Reading</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="navbar-item">
            <MDBNavLink to="/MerriamApiCall">Translate</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="navbar-item">
            <MDBNavLink to="/">Word Bank</MDBNavLink>
          </MDBNavItem>
          {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="twitter" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="google-plus-g" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default NavbarPage;
