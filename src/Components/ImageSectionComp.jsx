import React from 'react';
import doctor from '../Assets/doctor.avif'
function ImageSection() {
    const doctorimgcss = {
    backgroundColor: 'green',
    float: 'right',
    margin: '10%',
    padding: '20px',
    height: '450px',
    width: '385px',
    backgroundPosition: '-9999px',
    
  }
  const containerStyle= {
    display: 'contents',
    alignItems: 'center',
        position: 'relative'
  
  }
  return (
    <div style={containerStyle}>
      <img src={doctor} className="rounded" alt="..." style={doctorimgcss} />
      </div>
  );
}

export default ImageSection;
