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


`