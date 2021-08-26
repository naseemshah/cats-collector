import React from 'react';
import styled from 'styled-components';
import GridSection from './GridSection';

function Dashboard(props) {
    return (
        <StyledDashboard>
            <section className="dash-header">
                <h4>Cats Collector</h4>
                <h1>Collector's Dashboard</h1>
            </section>
            <GridSection />
        </StyledDashboard>
    );
}

export default Dashboard  ;

let StyledDashboard = styled.div`
    width: 80vw;
    margin: 0px auto;
    .dash-header{
        color: #552400;
        margin: 10px 0 0 0;
        padding-bottom: 10px;
        border-bottom: 2px solid black; 
        /* background-color: aqua; */
        h4{
            padding: 0;
            margin: 0;
        }
        h1{
            padding: 0;
            margin: 0;
        }
    }
`