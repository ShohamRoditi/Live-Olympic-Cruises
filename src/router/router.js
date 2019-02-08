import React from 'react'
import {Route} from 'react-router-dom'
import Header from '../Header'
import CompetitorList from '../Components/CompetitorList';
import SearchByYearName from '../Components/searchByYearName';


const ReactRouter = () => {
    return (
        <React.Fragment>
            <Header/>
            <Route exact path= "/" component= {CompetitorList}/>
            <Route path="/getCruiseByYearCompetitor" component={SearchByYearName}/>

        </React.Fragment>
    )
}

export default ReactRouter