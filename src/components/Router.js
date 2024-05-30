import '../App.css';

import GridScreen from './GridScreen';
import InfoScreen from './InfoScreen';

import * as projects from '../projects.json';
import * as skills from '../skills.json';
import * as activity from '../activity.json';
import * as about from "../about.json";


export default function Router({
  getColor, stack, index, pushStack
}) {
  return (
    stack[index] === 0 ? //about
      <InfoScreen pushStack={pushStack} color={getColor(stack[index])} values={about.default}/>
    : stack[index] === 100 ?  //activity
      <GridScreen pushStack={pushStack} color={getColor(stack[index])} values={activity.default} linkIndex={100}/>
    : stack[index] < 200 ? 
      <InfoScreen pushStack={pushStack} color={getColor(stack[index])} values={activity.default[Math.floor(stack[index] % 100 / 20)].data[Math.floor(stack[index] % 100 % 20 - 1)].page}/>
    : stack[index] === 200 ? //projects
      <GridScreen pushStack={pushStack} color={getColor(stack[index])} values={projects.default} linkIndex={200}/>
    : stack[index] < 300 ? 
      <InfoScreen pushStack={pushStack} color={getColor(stack[index])} values={projects.default[Math.floor(stack[index] % 100 / 20)].data[Math.floor(stack[index] % 100 % 20 - 1)].page}/>
    : stack[index] === 300 ? //skills
      <GridScreen pushStack={pushStack} color={getColor(stack[index])} values={skills.default}/>
    : stack[index] === 400 ? //contact
      <div>This is the contact page</div>
    : <div>Error 404</div>
  )
}