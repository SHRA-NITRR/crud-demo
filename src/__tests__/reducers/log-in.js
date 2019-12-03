import {logIn} from '../../reducers/login';
import * as actions from '../../actions'

describe('log In reducer', () => {
    const defaultState={
        isLoginSuccess: false,
        loggedInUser: '',
        loggedInUserRole: ''
    };
    it('should return default state if action type is undefined', () => {
        const action = {}; 
                
        expect(logIn(undefined, action)).toEqual(defaultState)
    })

    it('should handle LOGIN', () => {
        const action = {
            type: actions.LOG_IN,
            email: 'email',
            role:'ADMIN'
        }; 
        const expectedState= {
            isLoginSuccess: true,
            loggedInUser: action.email,
            loggedInUserRole: action.role
        }       
        expect(logIn({}, action)).toEqual(expectedState);
    })
    it('should handle LOG_OUT', () => {
        const action = {
            type: actions.LOG_OUT
        }; 
      
        expect(logIn({}, action)).toEqual(defaultState);
    })
})