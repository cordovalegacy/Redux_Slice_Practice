import { createSlice } from '@reduxjs/toolkit'

let id = 0

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push({
                id: ++id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age
            })
        },
        removeUser: (state, action) => {
            const updatedUsers = state.filter((user) => user.id !== action.payload.id)
            return updatedUsers
        }
    }
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer