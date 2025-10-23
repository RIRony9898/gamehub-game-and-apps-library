import axios from "axios"
import { useEffect, useState } from "react"

const useGames = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios('../games.json')
        .then(data => setGames(data.data))
        .catch(err => setError(err))
    },[])

    return {games, loading, error}
}

export default useGames