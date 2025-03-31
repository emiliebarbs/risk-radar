const CalcSummary= ({selectedCity, setShowCalcSummary}) => {


    const clickCancel = () => {
        setShowCalcSummary(false)
    }

    return (
        <>
        <div className="calc-summary">
            <div className="cancel-container">
                <h1>Crime Analysis for {selectedCity}</h1>
                <button className="cancel-button" onClick={clickCancel}>X</button>
            </div>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum odio ut placerat viverra. 
                Maecenas nec ipsum enim. Sed id iaculis mi. Aliquam nec finibus orci. Etiam pulvinar nulla nisi, eu imperdiet felis finibus vitae. Donec varius tincidunt odio id porta. Donec luctus pulvinar velit, ac rutrum tortor tincidunt in. 
            </p>
            <ul className="calc-list">
                <li>something interesting</li>
                <li>something interesting</li>
                <li>something interesting</li>
            </ul>
        </div>
        </>
    )
}

export default CalcSummary;