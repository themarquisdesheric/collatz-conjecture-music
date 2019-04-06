import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import RenderContent from './RenderContent';

jest.mock('chart.js');

describe('renderContent', () => {
  const props = {
    sequence: [],
    wave: 'sine',
    isPlaying: false,
    handleCollatz: jest.fn(),
    handleWave: jest.fn(),
    handleRepeat: jest.fn()
  }
  
  let wrapper = mount(<RenderContent {...props} />);
  
  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('should render playing CollatzGraph if sequence.length is true', () => {
    props.sequence= [1];

    wrapper = mount(<RenderContent {...props} />);

    expect(wrapper.find('CollatzGraph').length).toBe(1);
    expect(wrapper.find('.thinking-emoji').length).toBe(0);
  });
});