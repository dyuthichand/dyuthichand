import React from "react"
function Proficiency(Props){
    let Enames1=Props.eList.employees;
    let ProficiencyList=[];

    Enames1.map((skillset, index) =>

        ProficiencyList =   skillset.skillset.map((skill, index) => <div key={index}>{skill.proficiency}</div>)

    )


    return(
        <div className="Elist">
            <h1>Proficiency</h1>
            {ProficiencyList}
        </div>

    )


}


export default Proficiency;

