import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: lightblue;
  padding: 10px;
`;

const NavbarTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin: 0 10px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 5px;

  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
      <NavbarContainer>
        <NavbarTitle>Crud</NavbarTitle>
        <NavbarList>
          <NavbarItem>
            <NavbarLink to="/signin">Signin</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/signup">Signup</NavbarLink>
          </NavbarItem>
        </NavbarList>
      </NavbarContainer>
  );
};

export default Navbar;
