import axios from "axios";

export const SONG_SEND = "POST_SEND";
export const RESULTS_FETCH = "RESULTS_FETCH";
export const RESULTS_SUCCESS = "RESULTS_SUCCESS";
export const RESULTS_FAILED = "RESULTS_FAILED";

// export const postSend = (data) => ({
//     type: POST_SEND,
//     payload: data
// })

// export const resultsFetch = () => ({
//     type: RESULTS_FETCH,
// })

// export const resultsSuccess = (results) => ({
//     type: RESULTS_SUCCESS,
//     payload: results
// })

// export const submitPost = (data) => dispatch => {

//     console.log(data)

//     axios
//         .post("", data)
//         .then(response => {
//             console.log("results from DS", response.data);
//             dispatch({ type: RESULTS_SUCCESS, payload: response.data })
//             // props.history.push('/results');
//         })
//         .catch(error => console.log(error.response));


// }

export const saveResults = (data) => dispatch => {
    console.log("reaching this", data)
    axios
        .create({
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .post("/save", data)
        .then(response => {
            console.log("saveResults", response)
        })
        .catch(err => console.log(err))
}