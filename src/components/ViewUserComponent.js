import React, { Component } from 'react'
import UserService from '../services/UserService';

export default class ViewUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id:props.match.params.id,
          name: '',
          email: '',
          about: '',
        };
        
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
  


  render() {
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3" id="updateuser">
              <h3 className="text-center">User Information </h3>
              <div className="card-body">
                <form>
                <div className="form-outline mb-4">
                <label className='label2'>Name  </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control form-control-lg"
                      value={this.state.name}
                      
                    />
                  </div>

                  <div className="form-outline mb-4">
                  <label className='label2'>Email  </label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control form-control-lg"
                      value={this.state.email}
                     
                    />
                  </div>
                  <div className="form-outline mb-4">
                  <label className='label2'>About  </label>
                    <input
                      placeholder="About"
                      name="about"
                      className="form-control form-control-lg"
                      value={this.state.about}
                      
                    />
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
