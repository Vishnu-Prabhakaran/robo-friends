import React from 'react';
// Enzyme, shallow one at atime, mount is full DOM api
import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';

// Snapshot, only update the snapshot to pass if the change is 100% by pressing 'u' key for update
it('expect to render CounterButton component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  // 2 clicks - the count should be 2 so its a pass
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  // keypress
  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.state()).toEqual({ count: 2 });
  // props fail
  // expect(wrapper.props()).toEqual({color:'red'})
  // props pass
  expect(wrapper.props().color).toEqual('red');
});
