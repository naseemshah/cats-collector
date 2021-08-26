import React from 'react';
import styled from 'styled-components';

function GridItem(props) {
    return (
        <StyledGridItem>
            <img src="/cat-photos/cat-1.jpg" alt="" />
            <p>Cat name</p>
        </StyledGridItem>
    );
}

export default GridItem;

let StyledGridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: antiquewhite;
    border-radius: 10px;
    /* width: 30%; */
    padding: 10px;
    box-shadow: 0px 2px 50px rgba(0,0,0,0.2);
    cursor: grab;
    transition: all 0.3s ease-in-out;
    img{
        border-radius: 10px;
        width: 100%;
        pointer-events: none;
        box-shadow: 0px 2px 10px rgba(0,0,0,0.08);
    }
    p{
        margin: 5px 0 0 0;
        padding: 0;
        text-transform: uppercase;
        text-align: center;
        font-weight: 800;
        pointer-events: none;
    }
    :hover{
        background-color: #9b5e02;
        color: white;
        transition: all 0.3s ease-in-out;
        transform: scale(1.05);
        box-shadow: 0px 15px 50px rgba(0,0,0,0.6);
    }
`