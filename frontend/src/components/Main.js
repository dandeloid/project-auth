import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Main = () => {
    const thoughtItems = useSelector((store) => store.thoughts.items)
    const accessToken = useSelector((store) => store.user.accessToken)

    const options = {
        method: 'GET',
        headers: {
            'Authorization': accessToken,
        }
    }

    useEffect(() => {
        fetch(API_URL('thoughts'), options)
            .then(res => res.json())
            .then((data) => console.log(data))
    }, [])

    return (
        <div> Protected </div>
    )
}

export default Main