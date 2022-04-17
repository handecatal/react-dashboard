import React from "react";
import styled from "styled-components";

function Wallet() {
  return (
      <WalletCard>
      <CardContent>
          <FeaturedTitle>YOUR WALLET</FeaturedTitle>
        
        <FeaturedText>Wallet Balance</FeaturedText>
        <Value>9000 USD</Value>
      </CardContent>
      </WalletCard>
  );
}


const FeaturedTitle = styled.span`
    font-size: 20px;
`

const WalletCard = styled.div`
  height: 100%;
  width: 60%;
  background-color: grey;
  padding: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: grey;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const FeaturedText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const Value = styled.h2`
  text-align: center;
`;


export default Wallet;
