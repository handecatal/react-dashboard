import React from "react";
import styled from "styled-components";

class Info extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "data.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { items } = this.state;

        return (
            items.map((item, index) => (
                <InfoCard>
                    <CardContent>
                        <InfoText>{item.loan.title}</InfoText>
                        <InfoButton>{item.loan.cta.title}</InfoButton>
                    </CardContent>
                </InfoCard>
            ))
        );
    }
}

const InfoCard = styled.div`
  height: 100%;
  width: 60%;
  border-radius: 10px;
  background-color: white;
  margin-top: 1%;
  padding: 1rem;
  color: grey;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: grey;
  }

  @media only screen and (max-width: 360px) {
    height: 50%;
    width: 100%;
    margin: 0;
  }
  @media screen and (min-width: 360px) and (max-width: 540px) {
    width: 99%;
    margin-right:114%;
    height: 40%;
  }
  @media only screen and (width: 360px) {
    width: 120%;
    margin-right:120%;
  }
  @media screen and (min-width: 540px) and (max-width: 915px) {
    width: 80%;
    margin-right:48%;
  }
`;

const CardContent = styled.div`
  margin: 3rem;
  @media screen and (min-width: 360px) and (max-width: 540px) {
    margin: 1rem;
  }

`;


const InfoText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const InfoButton = styled.h5`
  text-align: center;
  font-weight: normal;
  padding: 0.5rem;
  background-color: transparent;
  cursor: pointer;
  width: 50%;
  margin-left: 23%;
  transition: all 0.3s ease-out; 
  &:hover {
    background-color: rgb(240, 240, 255);
    color: grey;
    border-radius:25px;
    
`;


export default Info;
