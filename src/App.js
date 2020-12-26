import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardList =(props)=>( 
<div>
  {props.profiles.map(profile=><Card key={profile.id} {...profile} />)}
</div>
);

class Card extends React.Component{
  render(){
    // const profile = testData[0];
    const profile = this.props;
    
    return (
      <div className="github-profile">
       <img src="profile.avatar_url" />
      <div className="info">
      <div className="name">{profile.name}</div>
      <div className="company">{profile.company}</div>
      </div>
      </div>
    );
  }
}

class Form extends React.Component{
  state ={ userName:''}
  handleSubmit = async (event)=>{
     event.preventDefault();
     const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
     this.props.onSubmit(resp.data);
     this.setState({userName : ''});
   }
  
  render(){
    return(
     <form onSubmit={this.handleSubmit}>
      <input type="text" 
      placeholder="GitHub Card" 
       value={this.state.userName}
       onChange = {event => this.setState({userName : event.target.value})}
       required
      />
      <button>Add card</button>
     </form>

    );
  }
}

class App extends React.Component{
    state = {
      profilesAssigned : [],
    };
    addNewProfile =(profileData) => {
       this.setState(preState=>({
        profilesAssigned:[...preState.profilesAssigned,profileData],
        }));
    }
    render(){
      return(<div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit ={this.addNewProfile} />
         <CardList profiles={this.state.profilesAssigned} />
      </div>);
    }
}

 export default App;


 // change profile as profileAssigned and make it work
