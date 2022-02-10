import { baseAxios } from ".."

export const login = (dispatch, data, history) => {
    // Popup.showLoading()
    baseAxios.post('a/hash-login', data)
    .then(response => {
        // Popup.close()
        localStorage.setItem("assetdata", response.data.token)
        history.push('/')
    })
    .catch(err => {
        console.log(err);
        history.push('/')
    })
}

export const logout = (dispatch, history) => {
    localStorage.removeItem("assetdata")
    dispatch({type: "CLEAR_USER"})
    history.replace('/login')
}