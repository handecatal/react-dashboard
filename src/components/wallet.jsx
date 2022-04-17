import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";

class Wallet extends React.Component {

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
                <WalletCard>
                    <CardContent>
                        <FeaturedTitle>{item.wallet.title}</FeaturedTitle>

                        <FeaturedText>{item.wallet.balance.title}</FeaturedText>
                        <Value>{item.wallet.balance.value} {item.wallet.balance.currency}</Value>
                    </CardContent>

                </WalletCard>
            ))
        );
    }
}



const WalletCard = styled.div`
  height: 100%;
  width: 60%;
  border-radius: 10px;
  background-color: grey;
  margin-top: 1%;
  margin-left: 3%;
  padding: 1rem;
  color: white;
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
    width: 100%;
    margin-right:115%;
  }
    @media only screen and (width: 360px) {
    width: 120%;
    margin-right:120%;
  }
    @media screen and (min-width: 540px) and (max-width: 915px) {
    width: 80%;
    margin-right:50%;
  }


`;

const CardContent = styled.div`
  margin: 1rem;
  
`;

const FeaturedTitle = styled.span`
    font-size: 20px;
`

const FeaturedText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const Value = styled.h2`
  text-align: center;
`;


export default Wallet;