import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState =
{


    AuthUser: {},
    token: "",
    mobiledata: [],
    searchData:'',
    cartCount:0,
}



const AuthSlice = createSlice(
    {
        name: "Auth",
        initialState,
        reducers:
        {
            setAuthUser: (state, action) => {
                state.AuthUser = action.payload
            },
            setAuthUserToken: (state, action) => {
                state.token = action.payload;
            },
            Logout: (state) => {
                state.AuthUser = null;
                state.AuthUserToken = null;
                localStorage.clear();
                toast.success('Logout Successfully',
                    {
                        position:'top-right',
                        autoClose:3000
                    })
            },

            setListData: (state, action) => {
                state.ItemListdata = action.payload
            }
            ,
            setItem: (state, action) => {
                state.Item = action.payload
            },
            setItemdPreviewImg: (state, action) => {
                state.previewImage = action.payload
            },
            setSearchQueryData:(state, action)=>
                {
                    state.searchData=action.payload
                },
            setCartCount:(state, action)=>
                {
                    state.cartCount=action.payload
                }

        }
    })

export const AuthReducer = AuthSlice.reducer;
export const Actions = AuthSlice.actions;