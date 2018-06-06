const url = 'https://randomuser.me/api/?results=10'

export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get(url)

  dispatch({
    type: FETCH_USERS,
    payload: res.data.results,
  })
}

// add other actions here
