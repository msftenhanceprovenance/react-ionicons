import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const HammerSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M294.28 256.9l-54.42-54.41a12 12 0 00-17 0L12.45 401a12 12 0 00-.27 17.2l66.05 66.28a12 12 0 0017.22-.23l198.81-210.36a12 12 0 00.02-16.99zM499.33 199.33l-43.89-43.58a21.46 21.46 0 00-15.28-6.26 21.89 21.89 0 00-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 00-24.8-28.74.6.6 0 00-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 00257.56 32C226 32 202 46.24 192.81 54.68A53.4 53.4 0 00176 86.17L192 96s8.06-2 13.86-3.39a62.73 62.73 0 0118.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.2 4.23-9.52 21.35-24.16 39.84a8 8 0 00.61 10.62l45.37 45.37a8 8 0 0011 .25c12.07-11 30.49-28 34.67-30.59 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0111.29 2.38 1.24 1.24 0 01-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 00.05 30.54l43.95 43.68a8 8 0 0011.28 0l74.68-74.2a8 8 0 00.06-11.36z"/></svg>
    </SvgContainer>
  )
}


HammerSharp.defaultProps = {
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


HammerSharp.propTypes = {
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


export default HammerSharp