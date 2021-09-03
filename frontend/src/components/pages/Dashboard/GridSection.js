import React from 'react';
import styled from 'styled-components';
import GridItem from './GirdItem';


function GridSection({catsData}) {
    return (
        <StyledGridSection>
            {
                catsData.map((cat,id)=>{
                    return( 
                        <GridItem
                            key={id}
                            catName={cat.title}
                            imageUrl={cat.imageUrl}
                        />
                    )
                })
            }
        </StyledGridSection>
    );
}

export default GridSection;

let StyledGridSection = styled.section`
    display: grid;
    margin: 20px 0;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 50px;
    justify-content: space-between;
`