    
export default function reducer(state={
    grievances: {
      id: null,
      name: null,
      description: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    // eslint-disable-next-line
    switch (action.type) {
      case "FETCH_GRIEVANCES": {
        return {...state, fetching: true}
      }
      case "FETCH_GRIEVANCES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_GRIEVANCES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          grievances: action.payload,
        }
      }
    }

    return state
}