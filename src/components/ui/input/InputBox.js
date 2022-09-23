import PropTypes from "prop-types"


function InputBox(props) {
  function change(e) {
    if (!!props.callBack) {
      props.callBack(e)
    }
  }

  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.classCss}
        style={props.objCss}
        onChange={change}
      />
    </>
  )
}

InputBox.propTypes = {
    type: PropTypes.string,
    cssClass: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    callBack: PropTypes.func,
    objCss: PropTypes.object,
}

InputBox.defaultProps = {
    type: "text"
  }  

export default InputBox