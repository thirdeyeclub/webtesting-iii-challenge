// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';

//now to bring in what i am testing
import Display from './Display.js';


//snapshot
describe('<Display />', () => {
    it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
    });

    it('rendered text', () => {
        const { getByText } = render(<Display/>);
    
        getByText(/open/i);
        });
});