const CalcSummary= ({selectedCity, setShowCalcSummary, categoryClicked}) => {


    const initalCityStatistics = {
        "Los Angeles": {
            "stat": "count"
        },
        "Denver": {
            "stat": "count"
        },
        "Tampa": {
            "stat": "count"
        }
    }

    const categoryStatistics = {
        "Los Angeles": {
                "Crime": {
                    "key1": "value",
                    "key2": "value",
                    "key3": "value",
                    },
                "Cost of Living": {
                    "key1": "value",
                    "key2": "value",
                    "key3": "value"
                    },
                "Infastructure": {
                    "key1": "value",
                    "key2": "value",
                    "key3": "value"
                    },
                "Natural Disaster": {
                    "key1": "value",
                    "key2": "value",
                    "key3": "value"
                    },
            },      
        "Denver": {
            "Crime": {
                "key1": "value",
                "key2": "value",
                "key3": "value",
                },
            "Cost of Living": {
                "key1": "value",
                "key2": "value",
                "key3": "value"
                },
            "Infastructure": {
                "key1": "value",
                "key2": "value",
                "key3": "value"
                },
            "Natural Disaster": {
                "key1": "value",
                "key2": "value",
                "key3": "value"
                },
            },
        "Tampa": {
            "Crime": {
                "key1": "value",
                "key2": "value",
                "key3": "value",
                },
            "Cost of Living": {
                "key1": "value",
                "key2": "value",
                "key3": "value"
                },
            "Infastructure": {
                "key1": "value",
                "key2": "value",
                "key3": "value"
                },
            "Natural Disaster": {
                "key1": "value",
                "key2": "value",
                "key3": "value"
                }
            }
        }



    const cityData = initalCityStatistics[selectedCity]
    const categoryData = categoryStatistics[selectedCity][categoryClicked]

        // console.log("categoryData",categoryData)

    const clickCancel = () => {
        setShowCalcSummary(false)
    }

    if (!categoryClicked) {

        return (
            <>
            <div className="calc-summary">
                <div className="cancel-container">
                    <h1>Risk Statistics for {selectedCity}</h1>
                    <button className="cancel-button" onClick={clickCancel}>X</button>
                </div>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum odio ut placerat viverra. 
                    Maecenas nec ipsum enim. Sed id iaculis mi. Aliquam nec finibus orci. Etiam pulvinar nulla nisi, eu imperdiet felis finibus vitae. Donec varius tincidunt odio id porta. Donec luctus pulvinar velit, ac rutrum tortor tincidunt in. 
                </p>
                <ul className="calc-list">
                    <li>{cityData.stat}</li>
                    <li>{cityData.stat}</li>
                    <li>something interesting</li>
                </ul>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className="calc-summary">
                <div className="cancel-container">
                    <h1>{categoryClicked} Statistics for {selectedCity}</h1>
                    <button className="cancel-button" onClick={clickCancel}>X</button>
                </div>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum odio ut placerat viverra. 
                    Maecenas nec ipsum enim. Sed id iaculis mi. Aliquam nec finibus orci. Etiam pulvinar nulla nisi, eu imperdiet felis finibus vitae. Donec varius tincidunt odio id porta. Donec luctus pulvinar velit, ac rutrum tortor tincidunt in. 
                </p>
                <ul className="calc-list">
                    <li>{categoryData.key1}</li>
                    <li>{categoryData.key1}</li>
                    <li>{categoryData.key1}</li>
                </ul>
            </div>
            </>
        )
    }

    
}

export default CalcSummary;