import React, {useState} from 'react';
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap
  } from "react-grid-drag";
import catsData from '../../../data/cats.json'
import CatGirdItem from './CatGirdItem';
  
function GridSection() {
    const [cats, setCats] = useState(catsData); // supply your own state
  
    // target id will only be set if dragging from one dropzone to another.
    let onDragChange = (sourceId, sourceIndex, targetIndex, targetId) => {
      console.log(sourceIndex);
      console.log(targetIndex);
      let currentCats = cats;
      if(targetIndex===currentCats.length) targetIndex = targetIndex-1  
      if(currentCats[targetIndex]) currentCats[targetIndex].position = sourceIndex;
      if(currentCats[sourceIndex]) currentCats[sourceIndex].position = targetIndex;
      const nextState = swap(currentCats, sourceIndex, targetIndex);
      console.log(nextState);
      setCats(nextState);
    }
  
    return (
      <GridContextProvider onChange={onDragChange}>
        <GridDropZone
        //   id="items"
          boxesPerRow={3}
          rowHeight={400}
          style={{ height: "400px" }}
        >
          {cats.map(item => (
            <GridItem key={item.type}>
              <CatGirdItem catName={item.title} imageUrl={item.imageUrl} />
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    );
  }

export default GridSection;
