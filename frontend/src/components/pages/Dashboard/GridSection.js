import React, {useCallback, useEffect, useState} from 'react';
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap
} from "react-grid-drag";
import CatGirdItem from './CatGirdItem';
import closeIcon from '../../../assets/img/close-icon.svg';
import styled from 'styled-components';
  
function GridSection({ catsData, setCatsData, hasChanges, setHasChanges}) {
    let [gridHeight,setGridHeight] = useState(400)
    let [gridColumns,setGridColumns] = useState(3)
    let [currentModalData,setCurrentModalData] = useState(null)
  
    let handleModalCloseBtn=()=>{
      setCurrentModalData(null)
    }
    
    let onDragChange = (sourceId, sourceIndex, targetIndex, targetId) => {
      let currentCats = catsData;
      const nextState = swap(currentCats, sourceIndex, targetIndex);
      nextState.forEach((element,id) => {
        element.position = id;
      });
      setCatsData(nextState);
      if(sourceIndex>=0 && targetIndex>=0) setHasChanges(true)
    }
    
    let setGridSettings = useCallback((width) =>{
      if(width>1100){
        setGridHeight(400)
        if(gridColumns!==3) setGridColumns(3)
      }
      else if(width<1100 && width>800){
        setGridHeight(320)
        if(gridColumns!==3) setGridColumns(3)
      }
      else if(width<800 && width>600){
        setGridHeight(230)
        if(gridColumns!==3) setGridColumns(3)
      }
      else if(width<600 && width>450){
        if(gridColumns!==2) setGridColumns(2)
        setGridHeight(255)
      }
      else if(width<450){
        setGridHeight(200)
      }
    },[gridColumns])

    let onWindowResize = useCallback((e) => {
      let width = e.target.innerWidth;
      setGridSettings(width);
    },[setGridSettings])

    useEffect(()=>{
      window.addEventListener("keydown",(e)=>{
          if(e.key === "Escape"){
            setCurrentModalData(null)
          }
      },false)
      return ()=>{
          document.removeEventListener("keydown", ()=>{}, false);
      }
    },[currentModalData])

    useEffect(()=>{
      setGridSettings(window.innerWidth)
      window.addEventListener("resize",onWindowResize,false)
      return ()=>{
        window.removeEventListener("resize",onWindowResize,false)
      }
    },[onWindowResize,setGridSettings])

    return (
      <GridContextProvider onChange={onDragChange}>
        <GridDropZone
          id="cats-grid-dropzone"
          boxesPerRow={gridColumns}
          rowHeight={gridHeight}
          style={{ height: `${gridHeight}px` }}
        >
          {
            catsData.map((cat) => (
              <GridItem key={cat.type}>
                <CatGirdItem
                  setCurrentModalData={setCurrentModalData}
                  catData={cat} 
                />
              </GridItem>
            ))
          }
        </GridDropZone>
        {
          currentModalData && 
          <StyledModal className="image-modal">
            <img 
                className="modal-close-icon"
                src={closeIcon}
                onClick={handleModalCloseBtn}
                alt=""
            />
            <img 
              className="modal-image"
              src={currentModalData.imageUrl}
              alt=""
            />
          </StyledModal>
        }
      </GridContextProvider>
    );
  }

export default GridSection;


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
      max-width: 80%;
      max-height: 80vh;
      border-radius: 10px;
  }
`