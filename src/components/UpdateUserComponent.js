import React, { Component } from 'react'
import UserService from "../services/UserService";
import blue from '../assests/blue.jpg';
import blue2 from '../assests/blue2.jpg';
import blue3 from '../assests/blue3.jpg';
import pool from '../assests/pool.jpg';
import blue11 from '../assests/blue11.jpg';
import carpet from '../assests/carpet.jpg';
import blue7 from '../assests/blue7.jpg';
import blue10 from '../assests/blue10.jpg';
import hat from '../assests/hat.jpg';
import picture from '../assests/picture.jpg';
export default class UpdateUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.match.params.id,
      name: '',
      email: '',
      about: '',
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeAboutHandler = this.changeAboutHandler.bind(this);
    this.updateUser=this.updateUser.bind(this);
  }

 componentDidMount()
 {

  UserService.getUserById(this.state.id).then((res)=>
  {
    let user = res.data;
    this.setState({
      name: user.name,
      email: user.email,
      about: user.about,

    }) ;

  }
  )

}





  
  updateUser=(e)=>{
    e.preventDefault();
    const user =
    {
      name:this.state.name,
      email:this.state.email,
      about:this.state.about
    }
    console.log('user'+ JSON.stringify(user));
    UserService. updateUserById(user,this.state.id).then(res=>
      {
        this.props.history.push('/users');
      });
  
    }

  changeNameHandler(event) {
    this.setState({ name: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }
  changeAboutHandler(event) {
    this.setState({ about: event.target.value });
  }


  
  cancel()
  {
    this.props.history.push('/users');
  }

  render() {
    return (
      <div>
          <div className="updateimage">
          <img src={blue3}></img>
          <img src={blue2}></img>
          </div>
          <div className="updateimage2">
          <img src={blue7}></img>
          <img src={pool}></img>
          </div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update User</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Email </label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> About </label>
                    <input
                      placeholder="About"
                      name="about"
                      className="form-control"
                      value={this.state.about}
                      onChange={this.changeAboutHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="updateimage">
          <img src={picture}></img>
          <img src={blue11}></img>
          </div>
          <div className="updateimage2">
          <img src={blue10}></img>
          <img src={blue}></img>
          </div>
      </div>
    );
  }
}
