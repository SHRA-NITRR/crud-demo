import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../components/common/button';

describe('Button component', () => {
  const mockCallBack = jest.fn();

  const props = {
    onClick: mockCallBack,
    mainClass: 'control',
    buttonClass: 'btnClass',
    label: 'Submit'
  };

  const wrapper = shallow(<Button {...props} />);

  it('should be a div with classname "control"', () => {
    expect(wrapper.is('.control')).toBe(true);
  });
  it('should have a button with a label', () => {
    const button = wrapper.find('.btnClass');

    button.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should have a button with a label', () => {
    const button = wrapper.find('.btnClass');

    expect(button.text()).toEqual('Submit');
  });
});
