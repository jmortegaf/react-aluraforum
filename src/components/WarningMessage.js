import '../assets/WarningMessage.css'
function WarningMessage({className, state, message,duration}){
    return(
        <>
        {state&&<div className={className}>
            <p>{message}</p>
        </div>}
        </>
    );
}

export default WarningMessage;