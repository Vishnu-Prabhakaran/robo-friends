import React from 'react';
// Enzyme, shallow one at atime, mount is full DOM api
import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';

// Snapshot, only update the snapshot to pass if the change is 100% by pressing 'u' key for update
it('expect to render CardList component', () => {
  // Mocks robots
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      Username: 'JohnJohn',
      email: 'john2email.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
