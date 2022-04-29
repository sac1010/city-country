import { GET_CITIES, SET_LOADING } from "./actionType"


const initState = {
    cities: [],
    countries:[],
    curCity: {},
    loading:true
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

        default:
            return state
    }
}