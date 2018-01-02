import React from 'react';

const AuthorAndDateInfo = ({author,date}) => (
  <div style={{margin:"10px", borderTop:"2px groove", borderBottom:""}}>
      <div style={{marginTop:"10px"}}>
          <h5>{author}</h5>
          <h5>{date}</h5>
      </div>
  </div>
);

export default AuthorAndDateInfo;
