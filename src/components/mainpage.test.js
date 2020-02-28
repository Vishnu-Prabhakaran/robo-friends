import React from 'react';
// Enzyme
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  // Mock props
  // jest.fn() - test function dont call origanal api
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders main page without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'john',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper.instance().filterRobots()).toEqual([]);
  expect(wrapper2.instance().filterRobots([])).toEqual([
    {
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }
  ]);
});

it('filters robots correctly', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }
    ],
    searchField: 'a',
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper.instance().filterRobots()).toEqual([]);
  expect(wrapper3.instance().filterRobots([])).toEqual(filteredRobots);
});