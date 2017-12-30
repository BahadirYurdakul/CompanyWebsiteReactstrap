import React from 'react';

const Image = ({ url }) => (
    <div>
        {url ? <img src={url} className="col-xl-12" /> : <span>Sorry, No Image Found</span>}
    </div>
);

export default Image;