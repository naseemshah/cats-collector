import React from 'react';
import styled from 'styled-components';
import GridItem from '../../common/GirdItem';

import catsData from '../../../data/cats.json';

function GridSection(props) {
    return (
        <StyledGridSection>
            {
                catsData.map((cat,id)=>{
                    return( 
                        <GridItem
                            key={id}
                            catName={cat.title}
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