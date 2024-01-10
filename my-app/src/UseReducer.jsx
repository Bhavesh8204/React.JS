import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const UserReducer = createSlice({
    name: "users",
    initialState: userList,
    reducers: {

        addUsers: (state, action) => {
            state.push(action.payload)
        },
        EditUsers: (state, action) => {
            const { id, name, email, phone } = action.payload

            const userid = state.find(user => user.id == id)

            if (userid) {
                userid.name = name
                userid.email = email
                userid.phone = phone
            }

        }

    }
})

export const { addUsers, EditUsers } = UserReducer.actions
export default UserReducer.reducer;
