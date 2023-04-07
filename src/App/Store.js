import { configureStore } from "@reduxjs/toolkit";
import userdetail from "../Features/Createuserslice"


const store=configureStore({
    reducer:{
    app:userdetail
    }
})

export default store;