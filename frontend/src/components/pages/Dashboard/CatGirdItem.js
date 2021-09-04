import React, { useState } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../../common/LoadingSpinner';
import maximizeIcon from '../../../assets/img/maximize.svg';

function CatGirdItem({catData,setCurrentModalData}) {
    let [hasImageLoaded,setHasImageLoaded] = useState(false)
    
    let onImageLoad =(e)=>{
        setHasImageLoaded(true)
    }

    let handleOnClickModal=()=>{
        setCurrentModalData(catData);
    }

    return (
        <>
            <StyledCatGirdItem
                
            >
                <div
                    className="grid-item-fullscreen"
                    onClick={handleOnClickModal}
                >
                    <img
                        src={maximizeIcon}
                        alt=""
                    />
                </div>
                <div className="image-container">
                    {!hasImageLoaded && <LoadingSpinner className="image-loading-spinner" />}
                    <img
                        className="grid-item-image"
                        src={catData.imageUrl}
                        alt=""
                        onLoad={onImageLoad}
                    />
                </div>
                <p>{catData.title}</p>
            </StyledCatGirdItem>
            
        </>
    );
}

export default CatGirdItem;

// Styled Components

let StyledCatGirdItem = styled.div`
    /* height: 400px; */
    position: relative;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: antiquewhite;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 2px 50px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    user-select: none;

    .grid-item-fullscreen{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 2vw;
        height: 2vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: 2px solid black;
        background-color: #ffffffd3;
        padding: 10px;
        z-index: 10;
        transition: all 0.3s ease-in-out;
        img{
            width: 100%;
        }
        :hover{
            transform: scale(1.2);
            transition: all 0.3s ease-in-out;
        }
    }
    .image-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-height: 320px;
        min-height: 100px;
        border-radius: 10px;
        pointer-events: none;
        background-color: white;
        box-shadow: 0px 2px 10px rgba(0,0,0,0.08);
        overflow: hidden;
        cursor: pointer;
        .image-loading-spinner{
            width: 50px;
            z-index: 50;
        }
        .grid-item-image{
            width: 100%;
        }
        
        :hover{
            transform: scale(1.02);
        }
    }
    p{
        margin: 5px 0 0 0;
        padding: 0;
        text-transform: uppercase;
        text-align: center;
        font-size: 1.1rem;
        font-weight: 800;
        pointer-events: none;
        user-select: none;
        white-space: nowrap;
    }    
    :hover{
        background-color: #9b5e02;
        color: white;
        transition: all 0.3s ease-in-out;
        transform: scale(1.05);
        box-shadow: 0px 15px 50px rgba(0,0,0,0.6);
    }
    @media only screen and (max-width: 600px){
        p{
            font-size: 15px;
        }
        .grid-item-fullscreen{
            padding: 5px;
            width: 3vw;
            height: 3vw;
        }
    }
`

