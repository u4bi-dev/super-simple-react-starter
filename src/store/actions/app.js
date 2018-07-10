import { ActionTypes } from '../constants';

export const setPrevPath = (path) => {
	return {
		type: ActionTypes.SET_PREV_PATH,
		data : path
	}
};