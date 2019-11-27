import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoSnapchat = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M991.996 720.778l-0.378-29.002-28.796-2.556c-30.826-2.792-87.6-14.438-108.602-33.8-32.562-30.022-71.376-72.398-71.376-103.786 0-2.028 0-5.092 8.3-10.372 9.97-6.348 25.178-11.168 38.594-15.42 10.434-3.308 20.288-6.434 28.788-10.472 18.472-8.78 36.996-31.956 34.942-57.614-2.43-30.332-28.848-54.092-60.144-54.092-8.042 0-16.136 1.52-24.054 4.518-16.054 6.082-27.486 8.82-35.41 9.924 1.494-18.638 3.582-40.24 6.422-61.34 10.222-75.896-10.562-147.018-58.528-202.084-50.758-58.266-127.002-90.682-209.188-90.682h-0.566c-82.186 0-158.43 32.416-209.182 90.682-47.964 55.068-68.75 126.69-58.53 202.584 2.832 21.020 4.92 42.462 6.42 61.236-7.94-1.118-19.372-3.996-35.406-10.068-7.93-3.004-16.034-4.59-24.086-4.59-31.282-0.002-57.688 23.704-60.114 54.006-2.054 25.636 16.47 48.786 34.94 57.566 8.502 4.040 18.362 7.156 28.8 10.464 13.414 4.25 28.618 9.064 38.586 15.406 8.294 5.278 8.294 8.336 8.294 10.364 0 17.32-12.382 49.382-71.376 103.776-20.998 19.362-78.11 31.002-109.176 33.794l-29.144 2.622-0.026 29.364c0 3.358 0.624 21.092 12.97 40.638 10.492 16.612 32.146 38.566 75.726 48.814 12.358 2.906 22.372 5.126 30.416 6.908 4.612 1.024 9.11 2.020 12.908 2.906 0.054 0.418 0.108 0.834 0.162 1.246 1.8 14.008 3.222 25.070 8.784 35.5 4.906 9.2 17.148 24.632 44.030 24.632 4.956 0 10.498-0.492 16.944-1.502 3.344-0.526 6.772-1.108 10.4-1.726 14.232-2.424 30.364-5.174 46.902-5.174 20.554 0 37.464 4.376 51.692 13.376 9.062 5.734 17.784 11.944 27.018 18.52 35.982 25.618 76.764 54.656 142.048 54.656 65.452 0 106.586-29.164 142.878-54.892 9.152-6.488 17.796-12.618 26.754-18.284 14.226-9 31.136-13.376 51.692-13.376 16.54 0 32.668 2.75 46.898 5.172 3.628 0.622 7.058 1.204 10.404 1.728 6.446 1.010 11.986 1.502 16.944 1.502 26.88 0 39.124-15.43 44.030-24.626 5.562-10.428 6.984-21.492 8.784-35.498 0.054-0.416 0.11-0.836 0.164-1.258 3.796-0.882 8.296-1.882 12.91-2.904 8.046-1.784 18.058-4.002 30.412-6.908 43.702-10.278 65.222-32.34 75.58-49.036 12.194-19.656 12.592-37.472 12.546-40.842zM416 256c17.672 0 32 21.49 32 48s-14.328 48-32 48-32-21.49-32-48 14.328-48 32-48zM623.23 411.396c-30.494 30.054-69.996 46.604-111.23 46.604-41.676 0-81.208-16.58-111.314-46.686-6.25-6.248-6.248-16.378 0-22.626 6.25-6.248 16.38-6.248 22.626 0 24.064 24.060 55.56 37.312 88.688 37.312 32.774 0 64.3-13.28 88.77-37.396 6.296-6.204 16.426-6.126 22.624 0.164 6.204 6.294 6.13 16.426-0.164 22.628zM608 352c-17.672 0-32-21.492-32-48s14.328-48 32-48 32 21.492 32 48-14.328 48-32 48z"></path>
    </SVG>
  )
}


LogoSnapchat.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoSnapchat.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default LogoSnapchat