import React, { useEffect } from 'react'
import Header from "./Header"
import axios from "axios"
import { BaseUrl} from './baseUrl'

const Exchanges = () => {
    useEffect(()=>{
        const getExchangesData =async()=>{
            const {data} = await axios.get(`${BaseUrl}/exchanges`) 
            console.log(data)
        }
        getExchangesData()
    })
  return (
    <>
    <Header/>
    </>
  )
}

export default Exchanges
