// export const SET_PREV_PATH = 'SET_PREV_PATH'
// export const setPrevPath = path => ({
//   type: SET_PREV_PATH,
//   data: path,
// })

// const url = 'https://randomuser.me/api/?results=10'
// export const FETCH_USERS = 'FETCH_USERS'
// export const fetchUsers = () => async (dispatch, getState, api) => {
//   const res = await api.get(url)

//   dispatch({
//     type: FETCH_USERS,
//     data: res.data.results,
//   })
// }

// // add other actions here

export * from './users';