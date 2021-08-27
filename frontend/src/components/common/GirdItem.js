import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import closeIcon from '../../assets/img/close-icon.svg'

function GridItem({catName}) {
    let [showModal,setShowModal] = useState(false)
    
    let handleOnClickModal=()=>{
        setShowModal(true);
    }

    let handleModalCloseBtn=()=>{
        setShowModal(false)
    }

    useEffect(()=>{
        window.addEventListener("keydown",(e)=>{
            if(e.key === "Escape"){
                setShowModal(false)
            }
        },false)
        return ()=>{
            document.removeEventListener("keydown", ()=>{}, false);
        }
    },[showModal])
    
    return (
        <>
            <StyledGridItem
                onClick={handleOnClickModal}
            >
                <img src="/cat-photos/cat-1.jpg" alt="" />
                <p>{catName}</p>
            </StyledGridItem>
            {
                showModal && 
                <StyledModal className="image-modal">
                    <img 
                        className="modal-close-icon"
                        src={closeIcon}
                        onClick={handleModalCloseBtn}
                        alt="" />
                    <img className="modal-image" src="/cat-photos/cat-1.jpg" alt="" />
                </StyledModal>
            }
        </>
    );
}

export default GridItem;

// Styled Components

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
        cursor: pointer;
        :hover{
            transform: scale(1.02);
        }
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

let StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    padding: 10px 10px 20px 10px;
    background-color: antiquewhite;
    border-radius: 10px;
    transform: translate(-50%,-50%);
    z-index: 555;
    .modal-close-icon{
        margin: 10px 0 10px auto;
        width: 25px;
        cursor: pointer;    
    }
    .modal-image{
        height: 80vh;
        border-radius: 10px;
    }
`