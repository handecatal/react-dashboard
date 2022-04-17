import React from "react";
import styled from "styled-components";
function Info() {
  return (
      <InfoCard>
          <CardContent>
              <InfoText>Are you cash strapped?</InfoText>
              <InfoButton>Request for Salary Advance</InfoButton>
          </CardContent>
      </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 100%;
  width: 60%;
  background-color: white;
  padding: 1rem;
  color: grey;
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
  margin-top:15%;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
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
  transition: all 0.3s ease-out; 
  &:hover {
    background-color: rgb(240, 240, 255);
    color: grey;
`;


export default Info;
