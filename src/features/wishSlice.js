import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
    name: "wish",
    initialState:{
      wish:[],
    },
  
    reducers: {
      add: (state,action)=>{
        // state.user = action.payload;
        return{
            ...state,
            wish : [...state.wish,action.payload]
        }
      },
      remove : (state,action)=>{
        const data = state.wish.filter((ele)=> ele.id !== action.payload)

            return{
                ...state,
                wish:data
            }
      }
    //   logout: (state) =>{
    //     state.user = null;
    //   },
    },
  });

export const { add, remove } = wishSlice.actions;

export const wishList = (state) => state.wish.wish;

export default wishSlice.reducer;