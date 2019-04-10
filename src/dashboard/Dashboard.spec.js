// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';

//now to bring in what i am testing
import Dashboard from './Dashboard.js';


//snapshot
describe('<Dashboard />', () => {
    it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
    });
});