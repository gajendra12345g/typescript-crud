import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState:any={
    msg:"",
    user:"",
    token:"",
    loading:false,
    error:""
}

export const signUpUser:any=createAsyncThunk('signupuser',async(body)=>{
const res=await fetch('https://reqres.in/api/register',{
    method:"POST",
    headers:{
        'Content-Type':"application/json"
    },
    body:JSON.stringify(body)
})
return await res.json();
})

export const signInUser:any=createAsyncThunk('signinuser',async(body)=>{
    const res=await fetch('https://reqres.in/api/login',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(body)
    })
    return await res.json();
    })
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
       addToken:(state,action)=>{
          state.token=localStorage.getItem("token")
        },

        addUser:(state,action)=>{
            state.user=localStorage.getItem("user")
          },

        signIn:(state,action)=>{
            state.token=null;
            localStorage.clear();
          }
    },
    extraReducers:{
         [signUpUser.pending]: (state,action)=>{
            state.loading=true
         },
         [signUpUser.pending]: (state,{payload:{error,msg}})=>{
            state.loading=false
            if(error){
                state.error=error
            }else{
                state.msg=msg
            }
         },
         [signUpUser.rejected]: (state,action)=>{
            state.loading=true
         },

         /////////////////////////////////////////////

         [signInUser.pending]: (state,action)=>{
            state.loading=true
         },
         [signInUser.pending]: (state,{payload:{error,msg,token,user}})=>{
            state.loading=false
            if(error){
                state.error=error
            }else{
                state.msg=msg
                state.token=token
                state.user=user

                localStorage.setItem("mag",msg)
                localStorage.setItem("token",token)
                localStorage.setItem("user",JSON.stringify(user))

            }
            
         },
         [signInUser.rejected]: (state,action)=>{
            state.loading=true
         },

    }
})

export const {addToken,addUser,signIn}=authSlice.actions;
export default authSlice.reducer