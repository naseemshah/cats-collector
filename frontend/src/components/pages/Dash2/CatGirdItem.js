import React, { useState } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../../common/LoadingSpinner';

function CatGirdItem({catData,setCurrentModalData}) {
    let [hasImageLoaded,setHasImageLoaded] = useState(false)
    
    let onImageLoad =(e)=>{
        console.log(e);
        setHasImageLoaded(true)
    }
    
    let handleOnClickModal=()=>{
        setCurrentModalData(catData);
    }
    

    return (
        <>
            <StyledCatGirdItem
                onClick={handleOnClickModal}
            >
                <div className="image-container">
                    {!hasImageLoaded && <LoadingSpinner className="image-loading-spinner" />}
                    <img
                        // style={{visibility: hasImageLoaded ? "visible" : "hidden"}}
                        className="grid-item-image"
                        src={catData.imageUrl}
                        alt=""
                        onLoad={onImageLoad}
                    />
                </div>
                <p>{catData.catName}</p>
            </StyledCatGirdItem>
            
        </>
    );
}

export default CatGirdItem;

// Styled Components

let StyledCatGirdItem = styled.div`
    /* height: 400px; */
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
    .image-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
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

