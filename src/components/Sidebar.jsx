import React from "react";
import styled from "styled-components";
import { FaHome, FaMap, FaStar, FaSchool } from "react-icons/fa";



function Sidebar() {
    return (
        <Container>
            <ProfileContainer>
                <Avatar src={'https://i.ibb.co/swkR93p/bramdejager-600x600.png'} />
                <Name>John Doe
                    <br />
                    ID:3944949
                </Name>

            </ProfileContainer>
            <Button>View Profile</Button>
            <LinksContainer>
                <Links>
                    <Link>
                        <FaHome />
                        <h3>Dashboard</h3>
                    </Link>
                    <Link>
                        <FaMap />
                        <h3>Countries</h3>
                    </Link>
                    <Link>
                        <FaStar />
                        <h3>States</h3>
                    </Link>
                    <Link>
                        <FaSchool />
                        <h3>Schools</h3>
                    </Link>
                </Links>
            </LinksContainer>
        </Container>
    );
}


const Button = styled.button`
  color: white;
  border-radius: 2rem;
  width:45%;
  height:8%;
  margin: auto;
  background-color: transparent;
  border-color:white;
  cursor: pointer;
  transition: all 0.3s ease-out; 
  &:hover {
    background-color: rgb(240, 240, 255);
    color: grey;
  }
  
`;

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  background-color: #7952B3;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 3rem;
  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    height: max-content !important;

  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: row;
`;

const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-top: 7%;
  margin-left: 3%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.2rem;
  font-weight: 200;
  display: inline;
  margin-left: 5%;
  margin-top: 10%;
`;

const LinksContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  align-items:left;
  
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
  padding-left: 2rem;
`;

const Link = styled.li`
  &:hover {
    background-color: rgb(240, 240, 255);
    
  }
  padding: 5px;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: grey;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 5px;
  }
`;
const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`

export default Sidebar;