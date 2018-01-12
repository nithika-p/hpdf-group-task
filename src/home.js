import React, { Component } from 'react';
import {render} from 'react-dom';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import logo from './logo.svg'

class Home extends Component {

    componentDidMount() {
     addResponseMessage("Welcome to this awesome chat!");
   }
   handleNewUserMessage = (newMessage) => {
     console.log(`New message incomig! ${newMessage}`);
     // Now send the message throught the backend API
   }

   render() {
      return (
         <div>
           <h1>home</h1>
           <Widget
              handleNewUserMessage={this.handleNewUserMessage}
              profileAvatar={logo}
              title="My new awesome title"
              subtitle="And my cool subtitle"
            />

         </div>
      );
   }
}
export default Home;
