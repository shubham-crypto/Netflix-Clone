import React from 'react'
import { Main } from '../componenets/Main'
import requests from '../Requests'
import { Row } from '../componenets/Row'

export const Home = () => {
  return (
    <>
        <Main />
        <Row rowId='1' title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row rowId='2' title='Up Popular' fetchURL={requests.requestPopular}/>
        <Row rowId='3' title='Up Trending' fetchURL={requests.requestTrending}/>
        <Row rowId='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
    </>
  )
}
