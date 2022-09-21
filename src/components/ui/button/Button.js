import './button.css';

function Button(props){

    function press(){
        if(!!props.callback)
            props.callback();
    }

    return(
        <div className='button-container'>
            <button
                onClick={press}
            >
                {props.label}
            </button>
        </div>
    )

}

export default Button