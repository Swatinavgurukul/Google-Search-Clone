import { useState,useEffect } from 'react'
import API_KEY from "./keys"

const CONTEXT_KEY = "fe53e8be4d4faac48"

const useGoogleSearch = ({term}) => {
    const [data,setData] = useState(null);
    // https://www.googleapis.com/customsearch/v1/?key=AIzaSyBpf919BGgQuEcPBk9vS6L3gnPI3FcZq6Q&cx=fe53e8be4d4faac48&q=navgurukul
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1/?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(respons => respons.json())
            // .then(result => {console.log(result,"soni<<<<")})
            .then(result => { setData(result) })
        }
        fetchData();
    }, [term])
   return { data }
}

export default useGoogleSearch
