
import axios from "axios";

export function fetchGrievances() {
    return function(dispatch) {
        dispatch({type: "FETCH_GRIEVANCES"});
        axios.get("../data.json")
          .then((response) => {
            dispatch({type: "FETCH_GRIEVANCES_FULFILLED", payload: response.data})
          })
          .catch((err) => {
            dispatch({type: "FETCH_GRIEVANCES_REJECTED", payload: err})
          })
      }
} 