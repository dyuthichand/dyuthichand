import React from "react"

function ShortList(Props) {
    let Elist = Props.currentState.map((each) =>

        <div className="Elists row">
            <div className="Ename col-3">
                {Props.eList.employees[each].name}
            </div>
            <div className="Exx col-9">
                {Props.eList.employees[each].skillset.map((skill, index) =>
                    <div className="skcover">
                        <div className="Eskill">
                            {skill.skill}
                        </div>
                        <div className="Eproficiency">
                            {skill.proficiency}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
    return (

        <div className="Resuls p-3 text-light">

            {Elist}


        </div>
    )

}

export default ShortList;

