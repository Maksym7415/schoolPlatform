
import * as types from './actionTypes';

export const addAction = (name, data) => ({ type: types.SYNC_STORE_ADD, name, data });

export const dropZoneAction = (data) => ({ type: types.SYNC_STORE_DROP_ZONE, data });

export const deleteData = (name) => ({ type: types.SYNC_STORE_DELETE, name });
