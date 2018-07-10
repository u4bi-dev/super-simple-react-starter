import { ActionTypes } from '../constants';

export const fetchUsers = () => {
	return {
		type: ActionTypes.FETCH_USERS
	}
};

export const fetchUsersSuccess = (data) => {
	return {
		type : ActionTypes.FETCH_USERS_SUCCESS,
		data : data
	}
};