import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ApiContext } from '../../../contexts/ApiContext';
import LoadingSpinner from '../../common/LoadingSpinner';
import GridSection from './GridSection.js';

function Dashboard(props) {
    let { api } = useContext(ApiContext)
    let [catsData,setCatsData] = useState([])
    let [isCatsDataLoading,setIsCatsDataLoading] = useState(true)
    let [lastUpdatedTime,setLastUpdatedTime] = useState("Now")
    let [hasChanges,setHasChanges] = useState(false)

    let updateCatsToAPI = useCallback(()=>{
        api.post('/updateCats',catsData)
        .then( ({data,status}) =>{
            setLastUpdatedTime(new Date().toLocaleString())
            setHasChanges(false)
            console.log("asvef");
        })
        .catch((error)=>{
            console.log('Error', error.message);
            setLastUpdatedTime("Auto-update Failed.")
        });
    },[api,catsData])

    useEffect(()=>{
        setIsCatsDataLoading(true)
        setLastUpdatedTime("Updating....")
        
        api.get('/cats')
        .then(({data,status}) =>{
            data.sort((a,b)=>{ return a.position - b.position })
            setCatsData(data);
            setIsCatsDataLoading(false)
            setLastUpdatedTime(new Date().toLocaleString())
            setHasChanges(false)
        })
        .catch((error)=>{
            setIsCatsDataLoading(false)
            console.log('Error', error.message);
            setLastUpdatedTime("Update Failed.")
        });

    },[api])

    useEffect(()=>{
        let autoSaveTimer = setInterval(()=>{
            console.log("time");
            console.log(hasChanges);
            if(hasChanges){
                updateCatsToAPI()
            }
        },5000)

        return ()=>{
            clearInterval(autoSaveTimer)
        }
    },[hasChanges,updateCatsToAPI])
    
    return (
        <StyledDashboard>
            <section className="dash-header">
                <div>
                    <h4>Cats Collector</h4>
                    <h1>Collector's Dashboard</h1>
                </div>
                <div>
                    <p>Last Updated: {lastUpdatedTime}</p>
                    <p>{hasChanges ? "Unsaved changes pending." : "No pending changes to save."}</p>
                </div>
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
                <GridSection 
                    catsData={catsData}
                    setCatsData={setCatsData}
                    hasChanges={hasChanges}
                    setHasChanges={setHasChanges}
                />
            }
        </StyledDashboard>
    );
}

export default Dashboard;

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
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        color: #552400;
        margin: 20px 0 20px 0;
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
        p{
            margin: 0;
            padding: 0;
            text-align: right;
        }
    }
`