import React from 'react';
import styled from 'styled-components';
import GridItem from '../../common/GirdItem';

function GridSection(props) {
    return (
        <StyledGridSection>
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
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