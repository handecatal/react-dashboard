import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Wallet from "./components/wallet";
import Info from "./components/info";

function App() {
    return (
        <div>
            <Container>
                <Sidebar />
                <ContainerContent>
                    <SubContainer>
                        <SectionOne>
                            <ColumnOne1>
                                <Wallet />
                                <Info />
                                
                            </ColumnOne1>
                            
                        </SectionOne>
                        
                    </SubContainer>
                </ContainerContent>
                
            </Container>

        </div>

    );
}


const ContainerContent = styled.div`
  width: 60%;
  margin: 1rem 2rem 1rem 2rem;
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 125%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  
  width: 100%;
  @media screen and (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
  @media screen and (min-width: 360px) and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
  @media only screen and (width: 360px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
  @media screen and (min-width: 540px) and (max-width: 915px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;

const ColumnOne1 = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  flex-direction: row;
  @media screen and (max-width: 360px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
  @media screen and (min-width: 360px) and (max-width: 540px) {
    margin-top:20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
   @media only screen and (width: 360px) {
    margin-top:20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
   @media screen and (min-width: 540px) and (max-width: 915px) {
    margin-top:20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  padding-bottom:4%;
  background-color: #e6e4ff;
  @media screen and (max-width: 360px) {
    flex-direction: column;
    height: 100%;
  }
  @media only screen and (width: 360px) {
    flex-direction: row;
  }
  @media screen and (min-width: 540px) and (max-width: 915px) {
    flex-direction: row;
  }
`;



export default App;
