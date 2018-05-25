//react imports
import * as React from 'react';

const LeadImage = (props) => {
  return (
    <figure className='lead-image'>
      <img src={props.image} alt={props.text} />
      <figcaption>
        {props.text}
      </figcaption>
    </figure>
  );
}

export default LeadImage;