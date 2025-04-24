import React from 'react';
import './method-page.css';

const Methodology = () => {

    const style = {
        fontSize: "40px",
        textAlign: "center",

    }

    return (
        <>
        <div className="methodology-placeholder" style={style}>
            <h2>Methodology</h2>
            <div className="methodology-details">
            <p className='text-center'>For a full breakdown & links to resources, visit{' '}
                <a
                  href='https://docs.google.com/document/d/1PTOAsXxlpZpAUN-jRi8WIsGO9QEivkesxwcLohaH0gY/edit?tab=t.0'
                  target='blank'
                  rel='noopener noreferrer'
                  >
                    this page
                </a>
                .
            </p>
            <p className='intro-paragraph'><strong>"The goal we had in designing this dashboard was to provide a nuanced, category-specific evaluation of diverse risk factors across cities & neighborhoods, rather than applying a one-size-fits-all approach. We developed unique scoring systems for each major risk category: Crime, Cost of Living, Natural Disasters, and Infrastructure. This aided us in creating a dashboard that provides an informative outlook."</strong> - Risk Radar Team
            </p>
            <p><strong>Each scoring system was designing using a combination of:</strong><br/>
                Established frameworks and best practices used in existing tools and calculators (FEMA, FBI)<br/>
                User-centered research, including surveys and stakeholder interviews<br/>
            </p>
            <p className='intro-final'>By integrating our technical data with community-driven priorities, our apprach ensures that each category reflects both emperical evidence and real-world relevance. These individual category scores are then standardized and combined using equal weighting to produce an overall Risk Report for each location in our dashboard. 
            </p>
            <p className='list2-header'><strong>Resources By Category:</strong><br/>
        
               Natural Disaster Scoring: FEMA, Wildfire Risk & Coverage Data<br/>
               Cost of Living Scoring: MIT, CPI-U, USDA Food Plans, NerdWallet, Zillow, US Census Data<br/>
               Infrastructure Scoring: EPA Air Quality Index, Gas & Elec. Costs (Forbes)<br/>
               Crime & Safety Scoring: Neighborhood Scouts, US News & World Report, Pew Crime Study, Next Door<br/>
            </p>
            <h1 className='disasters-header'>Natural Disasters
            </h1>
            <p>We chose to use FEMA's National Risk Index (NRI) score as the foundation for our Disaster Risk calculations. Its definition of risk factors in economic damage, social vulnerability, and community resilience, which closely aligns with how our users described environmental and disaster-related concerns during interviews and surveys. Within their NRI Dataset, they provide current risk data and Historic Loss Ratio Data (ie, how much of a listed asset is expected to be destoyed due to the occurence of a specific disaster).
            </p>
            <p>Disaster event risk score is determined by likelihood of an event occuring, and expected damages of said event, our overall disaster risk for an area will be determined by the combined risk scores of the most likely disaster scenarios. We apply FEMA's core risk frameword as follows:
            </p>
            <p><strong>Expected Annual Loss x Social Vulnerability x (1 - Community Resilience)</strong>
            </p>
            <p><strong>Why This Matters:</strong>
            </p>
            <p>A clear visualization and calculation of disaster and risk data helps users decide on insurance needs, begin emergency planning, and compare the long-term livability of an area.
            </p>
            <h1 className='col-header'>Cost of Living
            </h1>
            <p>For out cost of living section, we began by asking our users about what sort of living costs they would research before moving to a new area to get an understanding of what different items they were price sensitive to. We recieved a diverse set of answers, varying depending on the background of the user. We found that younger, college aged users cared more about rent and grocery prices, while older users were more concerned about house prices and utility costs. To address this disparity, we included a variety of metrics in our COL score to tey and consider a wider range of users. 
            </p>
            <p>We also reviewed other projects that examined the cost of living, such as the MIT Living Wage Calculator, to identify additional metrics commonly used to evaluate and contextualize the cost of living. They defined cost of living as being made up of <strong>eight core needs: </strong>
               Food, Childcare, Healthcare, Housing, Transportation, Civic Engagement, Broadband & Internet Access, Other Necessities
            </p>
            <p>Our scoring model emphasizes Food, Housing, and Utility costs in particular, as there were most frequently cited by our users in our surveys and interviews as key considers when evaluating affordability.
            </p>
            <p>To determine food costs, we relied on data outlined in the USDA Food Plans & ZIP code-level to determine food affordability in comparison to the US National Average. Here are visual respresentations of our scoring: 
            </p>
            <p>For other categories in Cost of Living, the process was a bit simpler. We used census data to gather average rent costs and home prices by ZIP code, then gave users a visual way to see how housing prices vary across the city. Users can toggle between rent and housing views, and the affordability score is based on how ZIP code's rent or home price compares to others within the same city or surrounding area. For utilities, ZIP code-level data has largely been discontinued or made private, so instead, we collected city-level utility cost data and compared it to the national average. Our ulitity score is based on that comparison. (add visual representation from doc)
            </p>
            <p><strong>Why This Matters:</strong>
            </p>
            <p>Cost of living is often the first thing people assess when moving or investing. By quantifying local affordability based on trusted and up-to-date data, our tool helps users predict average weekly and monthly expenses, compare their potential mudget across multiple locations, and make informed decisions with their financial goals. Our aproach ensures that users can navigate affordability with clarity, whether they're budgeting for groceries, estimating rent, or planning for transportation costs.
            </p>
            <h1 className='infrastructure-header'>Infrastructure
            </h1>
            <p>Building out the infrastructure category was a bit more invokved because there are a lot of different facilities that could be considered infrastructure. We wanted to narrow it down to a few choices so that we didn't overwhelm the user, while also making sure that the infrastructure we display is relevant to them. Initially, we asked our uses what they considered to be infrastructure, and we recieved a variety of responses that we distilled down to: Schools, Hospitals, Parks & Recreation areas, Air Quality, and Public Transportation.
            </p>
            <p>For air quality, we used the Air Quality Index (AQI) scoring system developed by the EPA for "communicating about outdoor air quality and health" (EPA). Their scoring system is on a 500 point space, so we standardized it to better fit our scale by mapping AQI categories to fixed risk points. On the following scale, good would have a risk of 0, moderate would have a risk of 4, and so on until 10, which would be hazardous. 
            </p>
            <p>To evaluate infrasturct access across the cities, we created a composite score based on proximity to essential publuc services, including parks, hospitals, and libraries. Using GIS, we calculated euclidean distances from each location to the nearest facility of each type and normalized these distances to a 0-1 scale, 1 indicating highest access. 
            </p>
            <p><strong>Why This Matters:</strong>
            </p>
            <p>Each infrastructure type was weighed based on findings from community interviews and planning priorities. The resulting raster represnts a spatially continuous "Infrastructure Access Score" that helps identify areas with less robust infrastructure and inform future planning decisions of our users. 
            </p>
            <h1 className='crime-header'>Crime & Safety
            </h1>
            <p>The crime risk score is intended to represent how "safe" a city/area is. Since safety isn't exactly a quantifiable metric, we took a few things into account when calculating our scores. Occurences of different crimes are weighted according to their severity and community score rating. Crimes were classified into multiple categories: Violent Crime (Per Capita) including homicide/murder & assault/sexual assult, Property Crime (Per Capita) including theft & motor theft and other minor crimes related to property. For each city, we collected data from available sources, such as LASD and US News. 
            </p>
            <p><strong>Why This Matters:</strong>
            </p>
            <p>While crime & safety are subjective, noting the incidents of crime is important to understanding a cities overall safety. We hope our dashboard gives some insight into whether an area can be deemed "safe" or "unsafe" by our users.
            </p>
            <h1 className='limitations-header'>Limitations & Reflections
            </h1>
            <p>One of the main limitations we faced when developing our methodology was the lack of available or easily accessible data. Due to changes in reporting practices and local policies, many datasets that would have been useful, such as CPI for food costs in Los Angeles, or crime data for the city of Tampa were either paywalled or completely unavailable. Another challenge was the inconsistency in how cities invest in data collection and storage infrastructure. For example, we had little trouble collecting data across most categories in Colorado. However, cities like Tampa and Los Angeles had entire data categories that weren't public available. These inconsistencies made it difficult to build a fully standardized scoring system, and given our project time constraints, we weren't able to develop a complete workaround.
            </p>
            <p className='text-center'>Our full list of citations for each risk category is provided on{' '}
                 <a
                   href='https://docs.google.com/document/d/1PTOAsXxlpZpAUN-jRi8WIsGO9QEivkesxwcLohaH0gY/edit?tab=t.0'
                   target='blank'
                   rel="noopender noreferrer"
                >
                   this page
                </a>
                .
            </p>

            </div>
        </div>
        </>
    )
}

export default Methodology;