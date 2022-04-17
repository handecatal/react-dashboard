import React from "react";
import styled from "styled-components";


class Profile extends React.Component {

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
                <ProfileContainer key={index}>
                    <Avatar src={item.user.picture} />
                    <Name>{item.user.name}
                        <br />
                        {item.user.id.title}: {item.user.id.value}
                    </Name>
                        
                </ProfileContainer>
            ))
        );
    }
}


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


const ProfileContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: row;
  padding-bottom: 10px;
`;

export default Profile;