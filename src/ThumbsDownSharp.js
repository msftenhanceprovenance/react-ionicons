import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ThumbsDownSharp = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M56 320l156.05 12-23 89.4c-6.08 26.6.7 41.87 22.39 48.62l34.69 9.85a4 4 0 004.4-1.72l129-202.34a8 8 0 016.81-3.81H496V64H378.39a48 48 0 01-15.18-2.46l-76.3-25.43a80 80 0 00-25.3-4.11H83.68c-19 0-31.5 13.52-35.23 32.16L16 206.42V280c0 22.06 18 38 40 40z"/><path d="M378.45 273.93A15.84 15.84 0 01386 272a15.93 15.93 0 00-7.51 1.91zM337.86 343.22l-.13.22a2.53 2.53 0 01.13-.22c20.5-35.51 30.36-55 33.82-62-3.47 7.06-13.34 26.51-33.82 62z" fill="none"/><path d="M372.66 279.16l-1 2a16.29 16.29 0 016.77-7.26 16.48 16.48 0 00-5.77 5.26z"/></svg>
    </SvgContainer>
  )
}


ThumbsDownSharp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


ThumbsDownSharp.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,
  title: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default ThumbsDownSharp