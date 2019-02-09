import React from 'react'
import {Route} from 'react-router-dom'
import Header from '../Header'
import CompetitorList from '../Components/CompetitorList';
import SearchByYearName from '../Components/searchByYearName';

const path = window.location.pathname;

const ReactRouter = () => {
    return (
        <React.Fragment>
            <Header/>
            <Route exact path= {path} component= {CompetitorList}/>
            <Route path = {`${path}getCruiseByYearCompetitor`} component={SearchByYearName}/>

        </React.Fragment>
    )
}

export default ReactRouter