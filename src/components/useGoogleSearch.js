import { useState,useEffect } from 'react'
import API_KEY from "./keys"

// https://developers.google.com/custom-search/v1/overview#monitoring
// https://cse.google.com/cse/create/new

const CONTEXT_KEY = "fe53e8be4d4faac48"


const useGoogleSearch = ({term}) => {
    const [data,setData] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                
                `https://www.googleapis.com/customsearch/v1/?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(respons => respons.json())
            .then(result => { setData(result) })
        }
        fetchData();
    }, [term])
   return { data }
}

export default useGoogleSearch
