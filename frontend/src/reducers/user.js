import { createSlice } from "@reduxjs/toolkit"

const user = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        username: null, 
        accessToken: null, 
        error: null,
    },
    reducers: {
        setUserId: (store, action) => {
            store.userId = action.payload
        },

    }
})