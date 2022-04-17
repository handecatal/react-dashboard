import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SidebarLinks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

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
            <Loading> Loading... </Loading> </div>;

        return (
            <LinksContainer >
                {items.map((item, index) => (

                    <Links key={index}>
                        <Link >
                            <h3 >
                                <FontAwesomeIcon icon="fa-thin fa-square-small" /> {item.name}</h3>
                        </Link>

                    </Links>

                ))}
            </LinksContainer>
        );
    }
}


const Loading = styled.h3`
  
  display: flex;
  color: grey;
  display: flex;
  flex-direction: column;
  fot-size: 10px;
  padding-left: 2rem;
  
`;

const LinksContainer = styled.div`
  background-color: white;
  align-items:left;
  height: 100%;
  padding-bottom:20%;
  z-index: -999;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  
`;

const Link = styled.li`
  &:hover {
    background-color: rgb(240, 240, 255);
    border-radius: 15px;
    margin-right: 35%;
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


export default SidebarLinks;