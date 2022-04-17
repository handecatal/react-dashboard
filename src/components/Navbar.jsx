
import styled from "styled-components";
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";

function Navbar() {

  return (
    <NavbarContainer>
          <FaBars/>
           
    </NavbarContainer>
  );
}


const NavbarContainer = styled.nav`
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 999;
`

const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;


export default Navbar;
