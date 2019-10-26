import React from 'react';
import ReactDOM from 'react-dom';
import AudioDataContainer from './components/AudioDataContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AudioDataContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
