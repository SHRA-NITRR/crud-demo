import React from 'react';
import {shallow} from 'enzyme';
import Admin from '../../components/admin';
import AdminContainer from '../../containers/admin-container';
import mockStore from '../../../test/mock-utils/mock-store';

describe('AdminContainer', () => {
    const any = {
        props: () => {
            return {
            };
        },
        state: () => {
            return {
                logIn: {
                    isLoginSuccess: true,
                    loginError: false
                },
                addUser:{
                    userList:[],
                    isModalOpen: false,
                    loggedInUserRole: 'ADMIN'
                    
                }
            };
        }
    };

    function render(state = any.state(), props = any.props()) {
        const store = mockStore(state);

        return shallow(
            <AdminContainer
                store={store}
                {...props}
            />
        );
    }

    it('should be a <Admin />', () => {
        const component = render();

        expect(component.find(Admin).length).toEqual(1);
    });

    it('should pass the states to Admin', () => {
        const props = any.props();
        const state = any.state();
        const component = render(state, props);

        expect(component.find(Admin).prop('isLoginSuccess')).toEqual(true);
        expect(component.find(Admin).prop('loginError')).toEqual(false);
    });
});