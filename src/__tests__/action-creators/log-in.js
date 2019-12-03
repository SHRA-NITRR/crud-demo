import * as actions from '../../actions'
import {login, logOut} from '../../action-creators/login'
import mockStore from '../../../test/mock-utils/mock-store';

describe('actions creators', () => {

  it('should create an action Log out', () => {
    const expectedAction = {
      type: actions.LOG_OUT,
    }
    expect(logOut()).toEqual(expectedAction)
  })

  describe('login actions', () => {

    it('creates an action LOG_IN when "log in" is sucess', () => {
        const role='ADMIN', password='123', userName='abc';
        const expectedActions = [
            { type: actions.LOG_IN,
            email: userName,
            role
        }
          ];
        const store = mockStore({addUser:{
            userList:[{role, userName}] 
        }});
    
        store.dispatch(login(userName, password));
        expect(store.getActions()).toEqual(expectedActions);
    })
    it('creates an action LOG_IN_ERROR when "log in" is failed', () => {
        const role='ADMIN', password='123a', userName='abc';
        const expectedActions = [
            { type: actions.LOG_IN_ERROR
        }
          ];
        const store = mockStore({addUser:{
            userList:[{role, userName}] 
        }});
    
        store.dispatch(login(userName, password));
        expect(store.getActions()).toEqual(expectedActions);
    })
    it('creates an action LOG_IN and role as teacher when "log in" is succuess and ', () => {
        const role='TEACHER', password='123', userName='teacher';
        const expectedActions = [
            {   type: actions.LOG_IN,
                email: userName,
                role
        }
          ];
        const store = mockStore({addUser:{
            userList:[{role, userName}] 
        }});
    
        store.dispatch(login(userName, password));
        expect(store.getActions()).toEqual(expectedActions);
    })
  })

});
