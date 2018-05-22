//react
import * as React from 'react';

//gallery data
import * as gallery from '../config/gallery.json';

export default class Gallery extends React.Component {
  render() {
    return (
      <div className="galleria" id="gallery">
        {gallery.map((img, i) => {
          return (
            <img
              key={i}
              src={img.url}
              alt={img.title}
              data-title={img.title}
              data-description={img.description}
            />
          );
        })}
      </div>
    );
  }
}
