import './calculator.css';

const Calculator = ({ selectedCity, setCategoryClicked }) => {

    
    
    const scoreInformation = {
        
        "Los Angeles": {
            "crime": 139,
            "costOfLiving": 172,
            "infastructure": 23,
            "naturalDisaster": 100,
            "total": 145.1  
        },
        "Denver": {
            "crime": 280,
            "costOfLiving": 123.3,
            "infastructure": 27,
            "naturalDisaster": 93.6,
            "total": 158.6
        },
        "Tampa": {
            "crime": 151,
            "costOfLiving": 108,
            "infastructure": 50,
            "naturalDisaster": 99.56,
            "total": 137.1
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