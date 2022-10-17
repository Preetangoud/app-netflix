import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'
import Requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowId="1" title = 'Upcoming' fetchURL = {Requests.requestUpcoming}/>
      <Row rowId="2" title = 'Popular' fetchURL = {Requests.requestPopular}/>
      <Row rowId="3" title = 'Trending' fetchURL = {Requests.requestTrending}/>
      <Row rowId="4" title = 'Top Rated' fetchURL = {Requests.requestTopRated}/>
      <Row rowId="5" title = 'Horror' fetchURL = {Requests.requestHorror}/>
    </div> 
  )
}

export default Home