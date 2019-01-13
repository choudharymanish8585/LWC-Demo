import { LightningElement, track } from 'lwc';

export default class ResumeCreator extends LightningElement {
  @track mySkills = [];

  addSkill(){
    const skill = this.template.querySelector("lightning-input");
    this.mySkills.push(skill.value);
    skill.value="";
  }
}