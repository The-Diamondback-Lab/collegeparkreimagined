//react
import * as React from 'react';

//gallery data
import gallery from '../config/gallery.json';

const Gallery = () => {
  return (
    <figure id='gallery'>
      <div className="galleria">
        {gallery.map((img, i) => {
          return <img key={i} src={img.url} alt="" />;
        })}
      </div>
      <figcaption>
        A look at some of the key areas of development in the College Park region. (Photos by Tom Hausman/The Diamondback)
      </figcaption>
    </figure>
  );
}

export default Gallery;
