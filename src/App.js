import React, {Component} from 'react';
import EmployeeList from './components/EmployeeList.js';
import SkillSeteList from './components/SkillSeteList.js';
import Proficiency from './components/Proficiency.js';
import Data from './components/emp_data.json';
import './index.css';
import ShortList from "./components/ShortList";

class App extends Component {
    constructor() {
        super();
        this.state = {
            sList: [],
            submitForm: false,
            Data: Data
        };

        this.handleOnchange = this.handleOnchange.bind(this)
        this.selectChange = this.selectChange.bind(this)
        this.clickSkill = this.clickSkill.bind(this)
    }

    clickSkill(e) {
        var skillis = e.target.innerText;
        var jsonData = this.state.Data.employees;
        var theIndex = [];
       // for (var i in jsonData) {
        for (var i = 0;  i<= jsonData.length; i++) {

            if (jsonData[i].skillset[i].skill === skillis) {
           theIndex.push(jsonData[i])

            }
        }
   // console.log(theIndex)

    }

    handleOnchange(e) {
        var selectedE = this.state.sList
        selectedE.push(e.target.id);
        e.target.style.color = "#ff0000"
        e.target.className = "select";

        this.setState({
            sList: selectedE
        })
    }

    selectChange(event) {

        this.setState({
            submitForm: !(this.state.submitForm)
        })
        event.preventDefault()
    }

    render() {
        var Datas = Data
        return (
            <div className="OfficeSkills">
                <div className="container">
                    <form>
                        <EmployeeList eList={Datas} fun={this.handleOnchange}/>
                        <SkillSeteList click={this.clickSkill} eList={Datas}/>
                        <Proficiency eList={Datas}/>
                        <br/>
                        <button onClick={this.selectChange}>Select</button>
                        {this.state.submitForm ? <ShortList eList={Datas} currentState={this.state.sList}/> : null}
                    </form>
                </div>
            </div>
        )
    }
}

export default App;




