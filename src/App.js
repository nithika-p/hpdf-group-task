import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Assignment from './assignment';
import Test from './Test';
import Homework from './homework';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {

    const HomeIcon = (props) => (
         <SvgIcon viewBox={'0 0 39.414 39.414'} hoverColor='#2fbbce' color='white' style={{height:'50px',width:'50px',opacity:100}}>
         <g><g>
         	<path d="M39.11,19.94c-0.379,0.606-1.03,0.939-1.697,0.939c-0.362,0-0.729-0.098-1.059-0.304l-2.807-1.752   c0.058,0.277,0.075,0.566,0.006,0.857l-3,12.383c-0.218,0.897-1.021,1.529-1.944,1.529h-4.568v-7.096   c0-2.185-1.939-3.953-4.333-3.953c-2.393,0-4.333,1.771-4.333,3.953v7.096h-4.569c-0.923,0-1.727-0.632-1.944-1.529l-3-12.383   c-0.07-0.291-0.052-0.58,0.005-0.857L3.06,20.576c-0.937,0.587-2.171,0.3-2.756-0.639c-0.585-0.938-0.3-2.17,0.637-2.756   L18.648,6.124c0.648-0.404,1.471-0.404,2.12,0l17.707,11.058C39.411,17.77,39.695,19.003,39.11,19.94z" class="active-path"/>
         </g></g>
         </SvgIcon>
       );
    const CalenderIcon = (props) => (
        <SvgIcon viewBox={'0 0 32 32'} hoverColor='#2fbbce' color='white' style={{height:'50px',width:'50px',opacity:100}}>
        <g>
        	<g id="calendar_1_">
        		<path d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1
        			c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667
        			C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667
        			C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1
        			s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z"/>
        		<rect x="7" y="12"  width="4" height="3"/>
        		<rect x="7" y="17"  width="4" height="3"/>
        		<rect x="7" y="22"  width="4" height="3"/>
        		<rect x="14" y="22" width="4" height="3"/>
        		<rect x="14" y="17" width="4" height="3"/>
        		<rect x="14" y="12" width="4" height="3"/>
        		<rect x="21" y="22" width="4" height="3"/>
        		<rect x="21" y="17" width="4" height="3"/>
        		<rect x="21" y="12" width="4" height="3"/>
        	</g>
        </g>
        </SvgIcon>
      );
    const AssignmentIcon = (props) => (
        <SvgIcon viewBox={'0 0 490 490'} hoverColor='#2fbbce' color='white' style={{height:'50px',width:'50px',opacity:100}}>
        <g>
        	<path d="M88.047,490h367.5V52.908h-367.5V490z M118.672,83.533h306.25v375.842h-306.25V83.533z"/>
        	<polygon points="34.453,459.868 65.078,459.868 65.078,30.625 424.922,30.625 424.922,0 34.453,0 	"/>
        </g>
        </SvgIcon>
      );
    const HomeworkIcon = (props) => (
         <SvgIcon viewBox={'0 0 512.001 512.001'} hoverColor='#2fbbce' color='white' style={{height:'50px',width:'50px',opacity:100}}>
         <g>
         	<g>
         		<path d="M481.999,273.586v-47.58c0-8.284-6.716-15-15-15c-30.988,0-59.878,2.615-87.173,7.955
         			c-15.911-15.365-35.308-26.513-56.313-32.606c22.904-19.277,37.486-48.14,37.486-80.349c0-58.449-47.103-106-105-106
         			c-57.897,0-105,47.551-105,106c0,32.209,14.582,61.072,37.487,80.348c-21.005,6.094-40.402,17.242-56.313,32.606
         			c-27.295-5.339-56.185-7.955-87.173-7.955c-8.284,0-15,6.716-15,15v47.58c-17.459,6.192-30,22.865-30,42.42v30
         			c0,19.555,12.541,36.228,30,42.42v47.58c0,8.284,6.716,15,15,15c78.429,0,142.832,18.583,202.68,58.481
         			c5.015,3.342,11.621,3.35,16.641,0c59.848-39.898,124.25-58.481,202.68-58.481c8.284,0,15-6.716,15-15v-47.58
         			c17.459-6.192,30-22.865,30-42.42v-30C511.999,296.451,499.458,279.778,481.999,273.586z M180.999,106.006
         			c0-41.907,33.645-76,75-76s75,34.093,75,76c0,41.355-33.645,75-75,75C214.644,181.006,180.999,147.361,180.999,106.006z
         			 M44.999,361.006c-8.271,0-15-6.729-15-15v-30c0-8.271,6.729-15,15-15s15,6.729,15,15v30
         			C59.999,354.277,53.27,361.006,44.999,361.006z M240.999,470.091c-54.453-31.141-112.886-46.88-181-48.869v-32.796
         			c17.459-6.192,30-22.865,30-42.42v-30c0-19.555-12.541-36.228-30-42.42v-32.368c70.481,2.023,127.134,18.62,181,52.916V470.091z
         			 M255.999,268.145c-27.686-17.469-56.504-30.77-87.268-40.117c16.904-10.986,36.803-17.022,57.268-17.022h60
         			c20.465,0,40.364,6.036,57.268,17.022C312.503,237.375,283.684,250.676,255.999,268.145z M451.999,421.222
         			c-68.113,1.989-126.548,17.732-181,48.871V294.146c53.867-34.299,110.516-50.906,181-52.928v32.368
         			c-17.459,6.192-30,22.865-30,42.42v30c0,19.555,12.541,36.228,30,42.42V421.222z M481.999,346.006c0,8.271-6.729,15-15,15
         			s-15-6.729-15-15v-30c0-8.271,6.729-15,15-15s15,6.729,15,15V346.006z"/>
         	</g>
         </g>
         </SvgIcon>
       );
    const TestIcon = (props) => (
         <SvgIcon viewBox={'0 0 512 512'} hoverColor='#2fbbce' color='white' style={{height:'50px',width:'50px',opacity:100}}>
         <g>
         	<g>
         		<path d="M316,30h-17.563C292.24,12.539,275.556,0,256,0c-19.556,0-36.24,12.539-42.437,30H196c-24.814,0-45,20.186-45,45
         			c0,8.291,6.709,15,15,15h180c8.291,0,15-6.709,15-15C361,50.186,340.814,30,316,30z"/>
         	</g>
         </g>
         <g>
         	<g>
         		<path d="M406,60h-16.518c0.989,4.849,1.518,9.864,1.518,15c0,24.814-20.186,45-45,45H166c-24.814,0-45-20.186-45-45
         			c0-5.136,0.529-10.151,1.518-15H106c-24.814,0-45,20.186-45,45v362c0,24.814,20.186,45,45,45h300c24.814,0,45-20.186,45-45V105
         			C451,80.186,430.814,60,406,60z M211,420h-60c-8.291,0-15-6.709-15-15c0-8.291,6.709-15,15-15h60c8.291,0,15,6.709,15,15
         			C226,413.291,219.291,420,211,420z M211,315h-60c-8.291,0-15-6.709-15-15c0-8.291,6.709-15,15-15h60c8.291,0,15,6.709,15,15
         			C226,308.291,219.291,315,211,315z M211,210h-60c-8.291,0-15-6.709-15-15s6.709-15,15-15h60c8.291,0,15,6.709,15,15
         			S219.291,210,211,210z M356.605,424.395c5.859,5.859,5.859,15.352,0,21.211c-2.93,2.93-6.768,4.395-10.605,4.395
         			c-3.837,0-7.676-1.465-10.605-4.395L316,426.211l-19.395,19.395c-2.93,2.93-6.768,4.395-10.605,4.395
         			c-3.837,0-7.676-1.465-10.605-4.395c-5.859-5.859-5.859-15.352,0-21.211L294.789,405l-19.395-19.395
         			c-5.859-5.859-5.859-15.352,0-21.211s15.352-5.859,21.211,0L316,383.789l19.395-19.395c5.859-5.859,15.352-5.859,21.211,0
         			s5.859,15.352,0,21.211L337.211,405L356.605,424.395z M371.605,280.605l-45,45c-2.93,2.93-6.768,4.395-10.605,4.395
         			c-3.837,0-7.676-1.465-10.605-4.395l-30-30c-5.859-5.859-5.859-15.352,0-21.211s15.352-5.859,21.211,0L316,293.789l34.395-34.395
         			c5.859-5.859,15.352-5.859,21.211,0C377.465,265.253,377.465,274.746,371.605,280.605z M371.605,190.605l-45,45
         			c-2.93,2.93-6.768,4.395-10.605,4.395c-3.837,0-7.676-1.465-10.605-4.395l-30-30c-5.859-5.859-5.859-15.352,0-21.211
         			s15.352-5.859,21.211,0L316,203.789l34.395-34.395c5.859-5.859,15.352-5.859,21.211,0S377.465,184.746,371.605,190.605z"/>
         	</g>
         </g>
         </SvgIcon>
       );

    return (
      <Router>
        <div>
          <MuiThemeProvider>
            <div className='navigation' style={{display:'inline-block'}}>
              <span style={{verticalAlign:'middle',display:'inline-flex'}}><Link className='nav-links' to={'/'}><HomeIcon/>&nbsp; Home</Link></span>
              <Link className='nav-links' to={'/'}><CalenderIcon/>&nbsp; Calender</Link>
              <Link className='nav-links' to={'/assignment'}><AssignmentIcon/>&nbsp; Assignment</Link>
              <Link className='nav-links' to={'/test'}><TestIcon/>&nbsp; Test</Link>
              <Link className='nav-links' to={'/homework'}><HomeworkIcon/>&nbsp; Home work</Link>
              <div><DatePicker mode="landscape" hintText="Click to open calender" /></div>
            </div>
            <Paper zDepth={1} rounded={false} style={{display:'inline-block',height:500,width:500,backgroundColor:'#1ca1c9',position:'absolute',marginLeft:'20px'}}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/assignment' component={Assignment} />
              <Route exact path='/test' component={Test} />
              <Route exact path='/homework' component={Homework} />
            </Switch>
            </Paper>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
