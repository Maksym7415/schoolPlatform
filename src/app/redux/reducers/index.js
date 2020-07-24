import { combineReducers } from 'redux';
import authReducer from '../authorization/reducer';
import themeReducer from '../theme/reducer';
import tenentsReducer from '../tenants/reducer';
import userReducer from '../user/reducer';
import subscriptionsReducer from '../subscriptions/reducer';
import syncReducer from '../syncStore/reducer';

export default combineReducers({
  themeReducer,
  authReducer,
  tenentsReducer,
  userReducer,
  subscriptionsReducer,
  syncReducer,
});
