import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', height: '800px', margin: '10px' }}>
      {props.children}
    </div>
  )
}

export default Scroll