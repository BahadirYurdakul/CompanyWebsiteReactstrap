import React from 'react';

const AuthorAndDateInfo = ({props}) => (
  <div style={{margin:"10px", borderTop:"2px groove", borderBottom:""}}>
      <div style={{marginTop:"10px"}}>
          <h5>{props.author}</h5>
          <h5>{props.date}</h5>
      </div>
  </div>
);

export default AuthorAndDateInfo;
