import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Assignment extends Component {

    state = {
    open1: false,
    open2: false,
    open3: false,
    valueSubjectAdd:1,
    valueSubjectChange1:1,
    valueSubjectChange2:1,
    valueSubjectRemove:1,
    };

    handleOpen1 = () => {this.setState({open1: true});};
    handleClose1 = () => { this.setState({open1: false});};
    handleOpen2 = () => {this.setState({open2: true});};
    handleClose2 = () => { this.setState({open2: false});};
    handleOpen3 = () => {this.setState({open3: true});};
    handleClose3 = () => { this.setState({open3: false});};
    handleSubjectChangeAdd = (event, index, valueSubjectAdd) => this.setState({valueSubjectAdd});
    handleSubjectChange1 = (event, index, valueSubjectChange1) => this.setState({valueSubjectChange1});
    handleSubjectChange2 = (event, index, valueSubjectChange2) => this.setState({valueSubjectChange2});
    handleSubjectChangeRemove = (event, index, valueSubjectRemove) => this.setState({valueSubjectRemove});

   render() {

      return (
         <div>
           <h1 style={{textAlign:'center', color:'#17376b', fontFamily:'Segoe UI'}}>Assignments</h1>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,width:150,paddingRight:0,minWidth:80, lineHeight:'0px'}}
           label="Add Assignment" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}}  onClick={this.handleOpen1} />
           <Dialog
              title="New Assignment"
              titleStyle={{textAlign:'center',color:'#175a8c',backgroundColor:'#44aefc'}}
              bodyStyle={{backgroundColor:'#44aefc'}}
              actions={[
                <FlatButton
                  labelStyle={{color:'#175a8c'}}
                  hoverColor={'#c8e5f7'}
                  disableTouchRipple={true}
                  label="Cancel"
                  primary={true}
                  onClick={this.handleClose1}
                />,
                <FlatButton
                  labelStyle={{color:'#175a8c'}}
                  hoverColor={'#c8e5f7'}
                  disableTouchRipple={true}
                  label="Save"
                  primary={true}
                  onClick={this.handleClose1}
                />
               ]}
               actionsContainerStyle={{backgroundColor:'#44aefc'}}
              modal={false}
              open={this.state.open1}
              onRequestClose={this.handleClose1}
            >
            <span style={{marginLeft:20 ,color:'#7a8d9b'}}>Select Subject</span><br/>
            <DropDownMenu value={this.state.valueSubjectAdd} onChange={this.handleSubjectChangeAdd}>
              <MenuItem value={1} primaryText="Mathematics" />
              <MenuItem value={2} primaryText="Java" />
              <MenuItem value={3} primaryText="Datastructures" />
              <MenuItem value={4} primaryText="French" />
            </DropDownMenu>
            <br/>
            <input style={{margin:10,height:30,width:700}} type="text"  placeholder="Title"/><br/>
            <input style={{margin:10,height:70,width:700}} rows="5" type="text"  placeholder="Details"/><br/>
            <DatePicker style={{marginLeft:20}} hintText="Select test date" />
          </Dialog>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,paddingRight:0,minWidth:120, lineHeight:'0px'}}
           label="Change Submission date" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}}  onClick={this.handleOpen2} />
           <Dialog
              title="Change Assignment"
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
            <span style={{marginLeft:20}}>Select Subject</span><br/>
            <DropDownMenu value={this.state.valueSubjectChange1} onChange={this.handleSubjectChange1}>
            <MenuItem value={1} primaryText="Mathematics" />
            <MenuItem value={2} primaryText="Java" />
            <MenuItem value={3} primaryText="Datastructures" />
            <MenuItem value={4} primaryText="French" />
            </DropDownMenu>
            <DatePicker style={{marginLeft:20}} hintText="Select submission date" />
            <br/>
            <span style={{marginLeft:20}}>Select New Subject</span><br/>
            <DropDownMenu value={this.state.valueSubjectChange2} onChange={this.handleSubjectChange2}>
            <MenuItem value={1} primaryText="Mathematics" />
            <MenuItem value={2} primaryText="Java" />
            <MenuItem value={3} primaryText="Datastructures" />
            <MenuItem value={4} primaryText="French" />
            </DropDownMenu>
            <br/>
            <input style={{margin:10,height:30,width:700}} type="text"  placeholder="Title"/><br/>
            <input style={{margin:10,height:70,width:700}} rows="5" type="text"  placeholder="Details"/><br/>
            <DatePicker style={{marginLeft:20}} hintText="Select new date" />
           </Dialog>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,width:150,paddingRight:0,minWidth:80, lineHeight:'0px'}}
           label="Delete Assignment" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}}  onClick={this.handleOpen3} />
           <Dialog
              title="Remove Assignment"
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
            <span style={{marginLeft:20}}>Select Subject</span><br/>
            <DropDownMenu value={this.state.valueSubjectRemove} onChange={this.handleSubjectChangeRemove}>
            <MenuItem value={1} primaryText="Mathematics" />
            <MenuItem value={2} primaryText="Java" />
            <MenuItem value={3} primaryText="Datastructures" />
            <MenuItem value={4} primaryText="French" />
            </DropDownMenu>
            <DatePicker hintText="Select submission date" style={{marginLeft:20}}/>
          </Dialog>
           <FlatButton disableTouchRipple={true} backgroundColor='#eeeeee' hoverColor='#c8e5f7' primary={false}
           style={{marginLeft:40,marginTop:10,borderRadius:30,height:30,paddingRight:0,minWidth:120, lineHeight:'0px'}}
           label="Talk to bot" labelStyle={{color:'#1DA1F2',textTransform:'capitalize'}}/>
         </div>
      );
   }
}
export default Assignment;
