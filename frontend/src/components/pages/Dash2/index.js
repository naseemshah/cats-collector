import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ApiContext } from '../../../contexts/ApiContext';
import LoadingSpinner from '../../common/LoadingSpinner';
import GridSection2 from './GridSection.js';

function Dashboard(props) {
    let { api } = useContext(ApiContext)
    let [catsData,setCatsData] = useState([])
    let [isCatsDataLoading,setIsCatsDataLoading]=useState(true)
    useEffect(()=>{
        setIsCatsDataLoading(true)
        api.get('/cats')
        .then( ({data,status}) =>{
          console.log(data);
          console.log(status);
          setCatsData(data);
          setIsCatsDataLoading(false)
        })
        .catch((error)=>{
            setIsCatsDataLoading(false)
            console.log('Error', error.message);
        });
    },[api])
    return (
        <StyledDashboard>
            <section className="dash-header">
                <h4>Cats Collector</h4>
                <h1>Collector's Dashboard</h1>
            </section>
            {
                isCatsDataLoading ?
                (
                    <div className="loading-container">
                        <LoadingSpinner className="loading-spinner"/>
                        <p>Loading....</p>
                    </div>
                )
                :
                <GridSection2 catsData={catsData} />
            }
        </StyledDashboard>
    );
}

export default Dashboard  ;

let StyledDashboard = styled.div`
    width: 80vw;
    margin: 0px auto;
    .loading-container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        /* background-color: blue; */
        p{
            margin: 0;
            padding: 0;
            font-size: 25px;
        }
        .loading-spinner{
            width: 50px;
            height: 50px;
            margin: 0!important;
        }
    }
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