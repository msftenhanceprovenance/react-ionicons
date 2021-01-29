import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const BaseballSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Baseball</title><path d="M302.16 56.2a13.88 13.88 0 01-3.42 8.91l-.11 5.13-27.71-.57c0 1.3.09 2.61.16 3.91a177.33 177.33 0 003.45 26.31l24.72-7.18 7.81 26.88-24.71 7.18a177.21 177.21 0 0013.34 27.69l21.27-15 16.16 22.86-21.29 15.05q5.25 6.33 11.11 12.19c3.91 3.91 8 7.6 12.2 11.1l15.71-22.22 22.86 16.16L358 216.75a178.78 178.78 0 0027.68 13.32l7.49-25.8 26.89 7.81-7.5 25.83a177.8 177.8 0 0031 3.67l-.41-24.67 17.41-.29A208 208 0 00301.82 52.93a13.65 13.65 0 01.34 3.27zM214 441.64l27.91.49a177.46 177.46 0 00-3.62-29.95l-24.14 7-7.81-26.88 24.11-7a177.92 177.92 0 00-13.33-27.68L196.79 372l-16.16-22.86L201 334.73c-3.49-4.22-7.19-8.3-11.09-12.2s-8-7.62-12.19-11.12l-13.91 19.68L141 314.93l13.9-19.66a177.26 177.26 0 00-27.7-13.33l-6.37 21.94-26.89-7.81 6.38-22a177.32 177.32 0 00-26.32-3.4c-1.59-.09-3.18-.16-4.78-.2l.4 22.34-17.71.32a207.88 207.88 0 00161.81 166.48z"/><path d="M444.65 302.67l-.55-33.06a206 206 0 01-39.33-4.74L397 291.8l-26.94-7.8 7.83-27a206.91 206.91 0 01-36.06-17.35l-16.36 23.15-22.86-16.16 16.33-23.11a204.21 204.21 0 01-30-30l-22.19 15.67-16.16-22.87 22.17-15.67a206 206 0 01-17.38-36.06l-25.75 7.48-7.81-26.89 25.73-7.47q-2-9.21-3.18-18.64h-.47l-.78-14-.33-6-17.94-.32a13.38 13.38 0 01-1.79-.16l-6.35-.13.06-2.47a14 14 0 01-5.66-11.49 13.27 13.27 0 01.13-1.67A208 208 0 0052.16 217.43l16.1-.28.45 25.18 6.83.38 14 .77v.48q9.42 1.17 18.64 3.18l6.68-23L141.7 232l-6.7 23a205.3 205.3 0 0136.06 17.38l14.53-20.56L208.47 268 194 288.5a203.5 203.5 0 0130 30l21.3-15 16.16 22.86-21.36 15.05a206.86 206.86 0 0117.34 36.06l25.27-7.33 7.81 26.86-25.24 7.33a205.9 205.9 0 014.72 38.3l29.42.53-.29 16.48a207.94 207.94 0 00160-157.21z"/></svg>'}} />
    </SvgContainer>
  )
}


BaseballSharp.defaultProps = {
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


BaseballSharp.propTypes = {
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


export default BaseballSharp