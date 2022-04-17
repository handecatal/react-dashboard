import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import Profile from "./profile";
import SidebarLinks from "./sidebarLinks";
import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
        } else {
            // search functionality
        }
    };

    return (
        <div>
            <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                <FontAwesomeIcon icon={faBars} />
            </SSidebarButton>
                <SSidebar isOpen={sidebarOpen}>
                    <ButtonCross isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                        <FontAwesomeIcon icon={faMultiply} />
                    </ButtonCross>
                    <Profile isOpen={sidebarOpen} />
                    <SidebarLinks isOpen={sidebarOpen} />

                </SSidebar>
        </div>



    );


}

const ButtonCross = styled.button`
    margin-top: 1%;
    margin-left: ${({ isOpen }) => (isOpen ? `2%` : `85%`)};
    width: 30px;
    height: 30px;
    cursor: pointer;
    
`;


const SSidebarButton = styled.button`
    margin-top: ${({ isOpen }) => (isOpen ? `10%` : `-15%`)};
    margin-left: ${({ isOpen }) => (isOpen ? `5%` : `-50%`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media only screen and (max-width: 1080px) {
    margin-top: ${({ isOpen }) => (isOpen ? `3%` : `-15%`)};  }
`;

const SSidebar = styled.div`
    width: 120%;
    transform: ${({ isOpen }) => (!isOpen ? 'translateX(0)' : 'translateX(-110%)')};
    background-color: #7952B3;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    
   @media screen and (min-width: 360px) and (max-width: 540px) {
    width: 140%;
  }
    @media only screen and (max-width: 360px) {
    margin-top:3%;
    width: 90%;
  }
    @media only screen and (width: 360px) {
    margin-top:0;
    width: 140%;
  }
    @media screen and (min-width: 540px) and (max-width: 915px) {
    margin-top:0;
    width: 150%;
  }
    
`;

export default Sidebar;