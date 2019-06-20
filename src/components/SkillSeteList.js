import React from "react"

function EmployeeList(Props) {
    let Enames1 = Props.eList.employees;
    let skillSetList = [];

    Enames1.map((skillset, index) =>

        skillSetList = skillset.skillset.map((skill, index) => <div id={index} onClick={Props.click}
                                                                    key={index}>{skill.skill}</div>)
    )


    return (
        <div className="Elist">
            <h1>Skills</h1>
            {skillSetList}
        </div>

    )


}

export default EmployeeList;

