import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class Homework extends Component {
   render() {
      return (
         <div>
           <h1 style={{textAlign:'center', color:'#17376b', fontFamily:'Segoe UI'}}>Homeworks</h1>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,width:150,paddingRight:0,minWidth:80, lineHeight:'0px'}}
           label="Add Homework" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}}/>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,paddingRight:0,minWidth:120, lineHeight:'0px'}}
           label="Change Submission date" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}}/>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,width:150,paddingRight:0,minWidth:80, lineHeight:'0px'}}
           label="Delete Homework" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}}/>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,paddingRight:0,minWidth:120, lineHeight:'0px'}}
           label="Talk to bot" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}}/>
         </div>
      );
   }
}
export default Homework;
