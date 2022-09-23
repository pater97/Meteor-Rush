import PropTypes from "prop-types"

import './button.css'

function Button(props) {

  function press(e) {
    if (!!props.callBack) {
      props.callBack(e)
    }
  }

  return (
    <button 
      className={`btn ${(props.classCss)}`} 
      style={props.objCss} 
      onClick={press}
    >
      {props.label}
    </button>
  )
}

Button.propTypes = {
  classCss: PropTypes.string,
  label: PropTypes.string.isRequired,
  callBack: PropTypes.func,
  objCss: PropTypes.object
}

Button.defaultProps = {
  label: "play",
  classCss:''
}

export default Button