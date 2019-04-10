import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';

//now to bring in what i am testing
import Controls from './Controls.js';


//snapshot
describe('<Controls />', () => {
    it('should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();
    expect(tree).toMatchSnapshot();
    });

    // it('rendered text', () => {
    //     const { getByText } = render(<Controls />);
    
    //     getByText(/open gate/i);
    //     });

});
