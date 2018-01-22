import React from 'react';

const LoadError = ({ errorMessage }) => (
    <div style={{textAlign:"center", fontSize:"20px", padding:"70px", height:"500px", backgroundColor: "#F2F1F0"}}>
        {errorMessage ? <div>{errorMessage}</div>:
            <div>Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.</div>
        }
    </div>
);

export default LoadError;