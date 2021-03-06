import axios from "axios"
import { GET_CITIES, SET_LOADING, SET_PAGE } from "./actionType"


const addCities = (cities)=>{
 return {
     type: GET_CITIES,
     payload: cities
 }
}

const addEdited = (cities)=>{
    return {
        type: GET_CITIES,
        payload: cities
    }
   }

const setLoading = (payload)=>{
    return {
        type: SET_LOADING,
        payload: payload
    }
   }

   const setPages = (payload)=>{
    return {
        type: SET_PAGE,
        payload: payload
    }
   }


export const loadCities = (page)=>{
    return function(dispatch){
        dispatch(setLoading(true))
        axios.get("https://city-country101.herokuapp.com/cities", {
            params: {
              _page: page,
              _limit: 3
            }
          }).then((res)=>{
            dispatch(addCities(res.data))
            dispatch(setPages(res.headers["x-total-count"]))
            dispatch(setLoading(false))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const loadEdited = (city, id)=>{
    return function(dispatch){
        dispatch(setLoading(true))
        axios.put(`https://city-country101.herokuapp.com/cities/${id}`, city).then(()=>{
            axios.get("https://city-country101.herokuapp.com/cities").then((res)=>{
                dispatch(addEdited(res.data))
                dispatch(setLoading(false))
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const loadDeleted = (id)=>{
    return function(dispatch){
        dispatch(setLoading(true))
        axios.delete(`https://city-country101.herokuapp.com/cities/${id}`).then(()=>{
            dispatch(loadCities())
            dispatch(setLoading(false))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const loadSorted = (sort)=>{
    return function(dispatch){
        dispatch(setLoading(true))
        axios.get(`https://city-country101.herokuapp.com/cities?_sort=population&_order=${sort}`).then((res)=>{
            dispatch(addCities(res.data))
            dispatch(setLoading(false))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

