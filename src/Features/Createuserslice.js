import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action 
export const createuser = createAsyncThunk("createuser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://6427c8c146fd35eb7c45990d.mockapi.io/crud/crud1", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const result = response.json()
        return result
    } catch (error) {
        rejectWithValue(error)
    }
})

// read action
export const readuser = createAsyncThunk("readuser", async (args, { rejectWithValue }) => {
    const response = await fetch("https://6427c8c146fd35eb7c45990d.mockapi.io/crud/crud1");
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

// delete action
export const deleteuser = createAsyncThunk("deleteuser", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://6427c8c146fd35eb7c45990d.mockapi.io/crud/crud1/${id}`, { method: "DELETE" });
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

// updated action 
export const updateduser = createAsyncThunk("updateduser", async (data, { rejectWithValue }) => {
    const response = await fetch(`https://6427c8c146fd35eb7c45990d.mockapi.io/crud/crud1/${data.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const result = response.json()
        return result
    } catch (error) {
        rejectWithValue(error)
    }
})

const userdetail = createSlice({
    name: "userdetail",
    initialState: {
        user: [],
        loading: false,
        error: null,
        searchData: [],
    },
    reducers:{
        searchuser: (state , action)=>{
            console.log("action payload",action.payload)
            state.searchData=action.payload;
        }
    },
    extraReducers: {
        [createuser.pending]: (state) => {
            state.loading = true;
        },
        [createuser.fulfilled]: (state, action) => {
            state.loading = false
            state.user.push(action.payload)
        },
        [createuser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        },
        // read extra reducer 
        [readuser.pending]: (state) => {
            state.loading = true;
        },
        [readuser.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        [readuser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        // DELETE extra reducer 
        [deleteuser.pending]: (state) => {
            state.loading = true;
        },
        [deleteuser.fulfilled]: (state, action) => {
            state.loading = false
            const { id } = action.payload;
            if (id) {
                state.user = state.user.filter((res) => res.id !== id)
            }
            // state.user=action.payload
            // console.log("action payload", action.payload)

        },
        [deleteuser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // updated user 
        [updateduser.pending]: (state) => {
            state.loading = true;
        },
        [updateduser.fulfilled]: (state, action) => {
            state.loading = false
            state.user=state.user.map((res)=>(res.id === action.payload.id ? action.payload : res ))
        },
        [updateduser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        },
    }
})

export const {searchuser}=userdetail.actions
export default userdetail.reducer;