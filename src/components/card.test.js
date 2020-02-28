import React from 'react';
// Enzyme, shallow one at atime, mount is full DOM api
import { shallow, mount, render } from 'enzyme';
import Card from './Card';


// Snapshot, only update the snapshot to pass if the change is 100% by pressing 'u' key for update
it('expect to render Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
