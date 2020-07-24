import React from 'react';

const FormCircles = ({ position }) => (
    <div className='new-course__circles-container'>
      <div className={position >= 0 ? 'new-course__circle new-course__active-circle' : 'new-course__circle'}>
      </div>
      <div className={position >= 1 ? 'new-course__circle new-course__active-circle' : 'new-course__circle'}>
      </div>
      <div className={position >= 2 ? 'new-course__circle new-course__active-circle' : 'new-course__circle'}>
      </div>
      <div className={position >= 3 ? 'new-course__circle new-course__active-circle' : 'new-course__circle'}>
      </div>
    </div>
);

export default FormCircles;
