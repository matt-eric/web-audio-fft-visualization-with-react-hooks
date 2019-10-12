import React from 'react';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

export default function MySlider(props) {

  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>

      <Slider
        value={props.value}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
      />

    </div>
  );
}
