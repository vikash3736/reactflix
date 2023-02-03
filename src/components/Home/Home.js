import React from 'react'
import requests from '../../api/requests'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Row from '../Row/Row'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Row title='REACTFLIX ORIGINAL' fetchUrl={requests.fetchTrending} isLargeRow />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} isLargeRow />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} isLargeRow />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} isLargeRow />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} isLargeRow />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} isLargeRow />
        </div>
    )
}

export default Home