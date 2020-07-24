import React from 'react';

const FormTopCircles = (props) => (
    <div className='register__circles-container'>
      <div className={props.position === 0 ? 'register__outer-circle register__active' : 'register__outer-circle'}>
        <div className='register__circles-item register__item-active'>1</div>
      </div>
      <div className={props.position === 1 ? 'register__outer-circle register__active' : 'register__outer-circle'}>
        <div className={props.position > 0 ? 'register__circles-item register__item-active' : 'register__circles-item register__item-disabled'}>2</div>
      </div>
      <div className={props.position === 2 ? 'register__outer-circle register__active' : 'register__outer-circle'}>
        <div className={props.position > 1 ? 'register__circles-item register__item-active' : 'register__circles-item register__item-disabled'}>3</div>
      </div>
      <div className={props.position === 3 ? 'register__outer-circle register__active' : 'register__outer-circle'}>
        <div className={props.position > 2 ? 'register__circles-item register__item-active' : 'register__circles-item register__item-disabled'}>4</div>
      </div>
      <div className={props.position === 4 ? 'register__outer-circle register__active' : 'register__outer-circle'}>
        <div className={props.position > 3 ? 'register__circles-item register__item-active' : 'register__circles-item register__item-disabled'}>5</div>
      </div>
    </div>
);

export default FormTopCircles;
