export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('https://restcountries.eu/rest/v1/all')

  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  })
}

// add other actions here
