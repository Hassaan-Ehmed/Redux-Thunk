import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

// Action
export const fetchTodos = createAsyncThunk('fetchTodos',async()=>{

    const response = await fetch('https://jsonplaceholder.typicod.com/todos');

    const result  = await response.json();

    return result
})

const todoSlice = createSlice({ 
name:"todo",

initialState:{
    data:null,
    isLoading:false,
    isError:false
},


reducers:{},


// We use extraReducers to listen changes on fetchTodos() function👆
// and we have builder parameter to listen states like: [pending,fulfilled,rejected]
extraReducers:(builder) =>{


builder.addCase(fetchTodos.pending,(state,action)=>{
     state.isLoading = true;
});

    builder.addCase(fetchTodos.fulfilled,(state,action)=>{
        state.isLoading  = false;
        state.data = action.payload;
    });


    builder.addCase(fetchTodos.rejected,(state,action)=>{
        console.log("Error: ",action.payload);
        state.isLoading = false;
        state.isError = true;

        
    });
}

});



export default todoSlice.reducer
