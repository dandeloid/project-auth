import React from 'react'
import { useDispatch, batch } from 'react-redux'


import { API_URL } from 'utils/constants'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mode, setMode] = useState('signup')

    const onFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method = 'POST',
            headers: {
                'Content-Type': 'application/js'
            },
            body: JSON.stringify({ username, password })
        }
        fetch(API_URL('signup'), options)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    batch(() => {
                        dispatchEvent(user.actions.setUserId(data.response.userId))
                        dispatchEvent(user.actions.setUsername(data.response.username))
                        dispatchEvent(user.actions.setAccessToken(data.response.accessToken))
                        dispatchEvent(user.actions.setError(null))
                    })
                } else {
                    dispatchEvent(user.actions.setUserId(null))
                    dispatchEvent(user.actions.setUsername(null))
                    dispatchEvent(user.actions.setAccessToken(null))
                    dispatchEvent(user.actions.setError(data.response))
                }
            })
    }
}

const Login = () => {
    return (
        <form>
            <label htmlFor="username">Username"</label>
            <input 
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input type="password" />
        </form>
    )
}

export default Login