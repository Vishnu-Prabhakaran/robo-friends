import React from 'react';
// Enzyme, shallow one at atime, mount is full DOM api
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

it('expect to render Card component', () => {
  expect(shallow(<Card />).length).toEqual(1);
});
