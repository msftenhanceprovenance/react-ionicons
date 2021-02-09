import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const HeartDislikeCircleSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm63.73 310.36l-183.14-182.3 22.74-22.51 183.19 182.36zm-63.51 4.86c-35.36-25-66.31-51.92-74.91-62.4-20-24.37-29.58-49.4-29.3-76.5a58.27 58.27 0 01.85-9.31l130.21 129.4c-3.43 2.59-16.21 11.45-26.85 18.81zm74.47-62.4l-.31.38L197.33 169a53.8 53.8 0 0110.21-1 59.34 59.34 0 0144.1 19.41L256 192l4.36-4.6a59.34 59.34 0 0144.1-19.4c30.31 0 55.22 25.27 55.53 56.33.28 27.09-9.31 52.12-29.3 76.49z"/></svg>
    </SvgContainer>
  )
}


HeartDislikeCircleSharp.defaultProps = {
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


HeartDislikeCircleSharp.propTypes = {
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


export default HeartDislikeCircleSharp