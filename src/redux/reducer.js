import { GET_CITIES, SET_LOADING, SET_PAGE } from "./actionType"


const initState = {
    cities: [],
    countries:[],
    curCity: {},
    loading:true,
    num:1
}

export const conCityReducer = (state = initState, action)=>{
    switch(action.type){

        case GET_CITIES:
            return(
                {
                    ...state,
                    cities:action.payload
                }
            )

        case SET_LOADING:
            return {
                ...state,
                loading:action.payload
            }

        case SET_PAGE:
            return {
                ...state,
                num:action.payload
            }

        default:
            return state
    }
}