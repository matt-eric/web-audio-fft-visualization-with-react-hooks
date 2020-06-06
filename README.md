[![Build Status](https://travis-ci.org/strengthmate/web-audio-fft-visualization-with-react-hooks.svg?branch=master)](https://travis-ci.org/strengthmate/web-audio-fft-visualization-with-react-hooks) ![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A method for visualizing live spectral data of an audio source in React.js.

Try the [Live Demo](https://matt-eric.github.io/web-audio-fft-visualization-with-react-hooks/).

View a more detailed description on [Medium](https://medium.com/@accomplish3d/using-react-ui-components-to-visualize-real-time-spectral-data-of-an-audio-source-17a498a6d8d7)

![](fft-react-2.gif)

This project utilizes the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to create an [AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode) for generating real-time frequency analysis information of the audio source in the web browser.

When the Start button is pressed, an audio file is played and a requestAnimationFrame loop is invoked which will retrieve an array of current [amplitude values](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData) respective to the specified [Bin Count](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount). The amplitude values are then passed to [Material-UI Paper Components](https://material-ui.com/api/paper/) as height properties, and are also used to create RGB values for the backgroundColor of the Paper Components.

The aim of this project is to visualize each frequency band of an audio data source in real time, using components that can be independently styled according to the current amplitude and frequency values.

![](fft-react-1.gif)

There are alternate approaches to visualizing real-time frequency data of an audio source by producing the data in a single canvas. Such methods can impose limitations for passing the data to other React.js components for re-use outside of the single canvas component.

Using this data with React.js hooks provides significant potential for how the data can be visualized in React.js. The current demonstration provides just one visual representation of the frequency data of an audio source. This project is intended to have more examples in the future.




## Available Scripts

To demo the project locally, run:

### `npm i`

Installs the package dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
