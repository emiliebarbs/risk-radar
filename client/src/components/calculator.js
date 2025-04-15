import './calculator.css';

const Calculator = ({ selectedCity, setCategoryClicked }) => {

    
    
    const scoreInformation = {
        
        "Los Angeles": {
            "crime": 0,
            "costOfLiving": 2,
            "infastructure": 10,
            "naturalDisaster": 7,
            "total": 7
        },
        "Denver": {
            "crime": 7,
            "costOfLiving": 3,
            "infastructure": 7,
            "naturalDisaster": 9,
            "total": 9
        },
        "Tampa": {
            "crime": 5,
            "costOfLiving": 8,
            "infastructure": 4,
            "naturalDisaster": 8,
            "total": 4
        },
    }
    
    
    
    
    const clickCategory = (categoryName) => {
        // update the card information
        setCategoryClicked(categoryName)
        
    }

    const data = scoreInformation[selectedCity]
    

    return (
        <>
        <div className="calculator">
            <div className="category-block-group">
                <div className="category-block"
                    onClick={() => clickCategory("Crime")}>
                    <p>Crime</p>
                    <p>{data.crime}</p>
                    </div>
                <div className="category-block"
                    onClick={() => clickCategory("Cost of Living")}>
                    <p>Cost of Living</p>
                    <p>{data.costOfLiving}</p>
                    </div>
                <div className="category-block"
                    onClick={() => clickCategory("Infastructure")}>
                    <p>Infastructure</p>
                    <p>{data.infastructure}</p>
                    </div>
                <div className="category-block"
                    onClick={() => clickCategory("Natural Disaster")}>
                    <p>Natural Disaster</p>
                    <p>{data.naturalDisaster}</p>
                    </div>
            </div>
            <div className="calc-total-score">
                <p>Total</p>
                <p>{data.total}</p>
                </div>
        </div>

        </>
    )
}

export default Calculator;