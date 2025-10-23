import axios from "axios"
import { useEffect, useState } from "react"

const useGames = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios('../games.json')
        .then(data => {
            setGames(data.data)
            setLoading(false) // Set loading to false after data is fetched
        })
        .catch(err => {
            setError(err)
            setLoading(false) // Also set loading to false on error
        })
    },[])

    return {games, loading, error}
}

export default useGames