import React from "react";
import styled from "styled-components";
//import { FaHome, FaMap, FaStar, FaSchool } from "react-icons/fa";


//function Sidebar() {
//    return (
//        <Container>
//            <ProfileContainer>
//                <Avatar src={'https://i.ibb.co/swkR93p/bramdejager-600x600.png'} />
//                <Name>John Doe
//                    <br />
//                    ID:3944949
//                </Name>

//            </ProfileContainer>
//            <Button>View Profile</Button>
//            <LinksContainer>
//                <Links>
//                    <Link>
//                        <h3>item.name</h3>
//                    </Link>
//                    <Link>
//                        <h3>Countries</h3>
//                    </Link>
//                    <Link>
//                        <h3>States</h3>
//                    </Link>
//                    <Link>
//                        <h3>Schools</h3>
//                    </Link>
//                </Links>
//            </LinksContainer>
//        </Container>
//    );
//}

class Sidebar extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
            "https://601d848abe5f340017a19c29.mockapi.io/menu")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            items.map((item) => (
                <LinksContainer>
                    <Links>
                        <Link >
                            <h3>{item.name}</h3>
                        </Link>

                    </Links>
                </LinksContainer>
            ))
        );
    }
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
  align-items:left;
  
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 40%;
  padding-left: 2rem;
`;

const Link = styled.li`
  &:hover {
    background-color: rgb(240, 240, 255);
    
  }
  display: flex;
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