import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import logo from './logo.svg'

class Test extends Component {

      state = {
      open1: false,
      open2: false,
      open3: false,
      valueSubjectAdd:1,
      valueTypeAdd:1,
      valueSubjectChange1:1,
      valueTypeChange1:1,
      valueSubjectChange2:1,
      valueTypeChange2:1,
      valueSubjectRemove:1,
      valueTypeRemove:1
    };
    componentDidMount() {
       addResponseMessage("Welcome to this awesome chat!");
     }
    handleNewUserMessage = (newMessage) => {
       console.log(`New message incomig! ${newMessage}`);
       // Now send the message throught the backend API
     }

    handleOpen1 = () => {this.setState({open1: true});};
    handleClose1 = () => { this.setState({open1: false});};
    handleOpen2 = () => {this.setState({open2: true});};
    handleClose2 = () => { this.setState({open2: false});};
    handleOpen3 = () => {this.setState({open3: true});};
    handleClose3 = () => { this.setState({open3: false});};
    handleSubjectChangeAdd = (event, index, valueSubjectAdd) => this.setState({valueSubjectAdd});
    handleTypeChangeAdd = (event, index, valueTypeAdd) => this.setState({valueTypeAdd});
    handleSubjectChange1 = (event, index, valueSubjectChange1) => this.setState({valueSubjectChange1});
    handleTypeChange1 = (event, index, valueTypeChange1) => this.setState({valueTypeChange1});
    handleSubjectChange2 = (event, index, valueSubjectChange2) => this.setState({valueSubjectChange2});
    handleTypeChange2 = (event, index, valueTypeChange2) => this.setState({valueTypeChange2});
    handleSubjectChangeRemove = (event, index, valueSubjectRemove) => this.setState({valueSubjectRemove});
    handleTypeChangeRemove = (event, index, valueTypeRemove) => this.setState({valueTypeRemove});


   render() {

      return (
         <div>
           <h1 style={{textAlign:'center', color:'#17376b', fontFamily:'Segoe UI'}}>Tests</h1>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,width:150,paddingRight:0,minWidth:80, lineHeight:'0px'}}
           label="Add Test" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}}  onClick={this.handleOpen1} />
           <Dialog
              title="New Test"
              actions={[
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onClick={this.handleClose1}
                />,
                <FlatButton
                  label="Save"
                  primary={true}
                  keyboardFocused={true}
                  onClick={this.handleClose1}
                />
               ]}
              modal={false}
              open={this.state.open1}
              onRequestClose={this.handleClose1}
            >
            <div style={{float:'left',marginLeft:20}}><span style={{marginLeft:20}}>Select Subject</span><br/>
            <DropDownMenu value={this.state.valueSubjectAdd} onChange={this.handleSubjectChangeAdd}>
              <MenuItem value={1} primaryText="Mathematics" />
              <MenuItem value={2} primaryText="Java" />
              <MenuItem value={3} primaryText="Datastructures" />
              <MenuItem value={4} primaryText="French" />
            </DropDownMenu></div>
            <div><span style={{marginLeft:20}}>Select Type</span><br/>
            <DropDownMenu value={this.state.valueTypeAdd} onChange={this.handleTypeChangeAdd}>
              <MenuItem value={1} primaryText="Surprise test" />
              <MenuItem value={2} primaryText="Cycle test" />
              <MenuItem value={3} primaryText="Models" />
              <MenuItem value={4} primaryText="Uniersity Exam" />
            </DropDownMenu></div>
            <DatePicker style={{marginLeft:40}} hintText="Select test date" />
           </Dialog>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,paddingRight:0,minWidth:120, lineHeight:'0px'}}
           label="Change Test date" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}} onClick={this.handleOpen2}/>
           <Dialog
              title="Change Test"
              actions={[
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onClick={this.handleClose2}
                />,
                <FlatButton
                  label="Save"
                  primary={true}
                  keyboardFocused={true}
                  onClick={this.handleClose2}
                />
               ]}
              modal={false}
              open={this.state.open2}
              onRequestClose={this.handleClose2}
            >
            <div style={{float:'left',marginLeft:20}}><span style={{marginLeft:20}}>Select Subject</span><br/>
            <DropDownMenu value={this.state.valueSubjectChange1} onChange={this.handleSubjectChange1}>
            <MenuItem value={1} primaryText="Mathematics" />
            <MenuItem value={2} primaryText="Java" />
            <MenuItem value={3} primaryText="Datastructures" />
            <MenuItem value={4} primaryText="French" />
            </DropDownMenu></div>
            <div><span style={{marginLeft:20}}>Select Type</span><br/>
            <DropDownMenu value={this.state.valueTypeChange1} onChange={this.handleTypeChange1}>
              <MenuItem value={1} primaryText="Surprise test" />
              <MenuItem value={2} primaryText="Cycle test" />
              <MenuItem value={3} primaryText="Models" />
              <MenuItem value={4} primaryText="Uniersity Exam" />
            </DropDownMenu></div>
            <DatePicker style={{marginLeft:40}} hintText="Select test date" />
            <br/>
            <div style={{float:'left',marginLeft:20}}><span style={{marginLeft:20}}>Select Subject</span><br/>
            <DropDownMenu value={this.state.valueSubjectChange2} onChange={this.handleSubjectChange2}>
            <MenuItem value={1} primaryText="Mathematics" />
            <MenuItem value={2} primaryText="Java" />
            <MenuItem value={3} primaryText="Datastructures" />
            <MenuItem value={4} primaryText="French" />
            </DropDownMenu></div>
            <div><span style={{marginLeft:20}}>Select Type</span><br/>
            <DropDownMenu value={this.state.valueTypeChange2} onChange={this.handleTypeChange2}>
              <MenuItem value={1} primaryText="Surprise test" />
              <MenuItem value={2} primaryText="Cycle test" />
              <MenuItem value={3} primaryText="Models" />
              <MenuItem value={4} primaryText="Uniersity Exam" />
            </DropDownMenu></div>
            <DatePicker style={{marginLeft:40}} hintText="Select test date" />
           </Dialog>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,width:150,paddingRight:0,minWidth:80, lineHeight:'0px'}}
           label='Delete Test' labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}} onClick={this.handleOpen3}/>
           <Dialog
              title="Remove Test"
              actions={ [
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onClick={this.handleClose3}
                />,
                <FlatButton
                  label="Delete"
                  primary={true}
                  keyboardFocused={true}
                  onClick={this.handleClose3}
                />
               ]}
              modal={false}
              open={this.state.open3}
              onRequestClose={this.handleClose}
            >
            <div style={{float:'left',marginLeft:20}}><span style={{marginLeft:20}}>Select Subject</span><br/>
            <DropDownMenu value={this.state.valueSubjectRemove} onChange={this.handleSubjectChangeRemove}>
              <MenuItem value={1} primaryText="Mathematics" />
              <MenuItem value={2} primaryText="Java" />
              <MenuItem value={3} primaryText="Datastructures" />
              <MenuItem value={4} primaryText="French" />
            </DropDownMenu></div>
            <div><span style={{marginLeft:20}}>Select Type</span><br/>
            <DropDownMenu value={this.state.valueTypeRemove} onChange={this.handleTypeChangeRemove}>
              <MenuItem value={1} primaryText="Surprise test" />
              <MenuItem value={2} primaryText="Cycle test" />
              <MenuItem value={3} primaryText="Models" />
              <MenuItem value={4} primaryText="Uniersity Exam" />
            </DropDownMenu></div>
            <DatePicker style={{marginLeft:40}} hintText="Select test date" />
          </Dialog>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,paddingRight:0,minWidth:120, lineHeight:'0px'}}
           label="Talk to bot" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}}/>
           <Widget
              handleNewUserMessage={this.handleNewUserMessage}
              profileAvatar={logo}
              title="Chat with bot"
              subtitle="Bot"
            />

         </div>
      );
   }
}
export default Test;
