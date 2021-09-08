import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HomePage(props) {
    return (
        <StyledHomePage>
            <h1>Welcome to Cat Collector</h1>
            <h2>Collect cat pictures and arrange your favourites.</h2>
            <Link to="/dash">
                <button>Launch Dashboard</button>
            </Link> 
        </StyledHomePage>
    );
}

export default HomePage;

let StyledHomePage = styled.div`
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #552400;
    text-align: center;
    box-sizing: border-box;
    h1{
        margin: 0;
        padding: 0;
        font-size: 40px;
    }
    h2{
        margin: 0;
        padding: 0;
        font-size: 25px;
    }
    button{
        background-color: #552400;
        margin-top: 50px;
        padding: 20px 40px;
        color: white;
        font-size: 25px;
        text-transform: uppercase;
        border: none;
        border-radius: 60px;
        font-family: 'Poppins';
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover{
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
        }
    }

`