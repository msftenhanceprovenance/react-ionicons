import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const FlashOff = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Flash Off</title><path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM431.5 204a16 16 0 00-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 00302.73 23l-92.58 114.46a4 4 0 00.29 5.35l151 151a4 4 0 005.94-.31l60.8-75.16A16.37 16.37 0 00431.5 204zM301.57 369.19l-151-151a4 4 0 00-5.93.31L83.8 293.64A16.37 16.37 0 0080.5 308 16 16 0 0096 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0032.5 14.53l92.61-114.46a4 4 0 00-.28-5.35z"/></svg>
    </SvgContainer>
  )
}


FlashOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


FlashOff.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default FlashOff