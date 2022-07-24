import React, { Component } from 'react'
import PostService from '../services/PostService';
import orange from '../assests/orange.jpg';
import dog from '../assests/dog.jpg';
import pine from '../assests/pine.jpg';
import pinee from '../assests/pinee.jpg';
import pool from '../assests/pool.jpg';
import icecream from '../assests/icecream.jpg';
export class PostUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:props.match.params.id,
          post:[]
          
        };
        this.changePostTitleHandler = this.changePostTitleHandler.bind(this);
        this.changePostContentHandler = this.changePostContentHandler.bind(this);
     
        
      }



      componentDidMount()
      {
     
       PostService.getPostById(this.state.id).then((res)=>
       {
         let detail = res.data;
         this.setState({
            post: detail
         }) ;
     
       }
       )
     
     }


     updatePost=(e)=>{
        e.preventDefault();
        const updatedPost = 
        {
            title:this.state.post.title,
            content:this.state.post.content,
          
        }
        console.log('category'+ JSON.stringify(updatedPost));
        PostService.updatePostd(updatedPost,this.state.id).then(res=>
          {
            this.props.history.push('/allposts');
          });
      
        }

  
        changePostTitleHandler(event) {
        this.setState({ title: event.target.value });
      }
    
      changePostContentHandler(event) {
        this.setState({ content: event.target.value });
      }
      cancel()
      {
        this.props.history.push('/allposts');
      }
    



  render() {
    return (
        <div>
         <div className="updateimage">
          <img src={orange}></img>
          <img src={dog}></img>
          </div>
          <div className="updateimage2">
          <img src={pinee}></img>
          <img src={pool}></img>
          </div>
          
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3"  id="formupdateposts">
              <h3 className="text-center">Update Post</h3>
              <div className="card-body">
                <form>
                <div className="form-outline mb-4">
                    <label> Post Title </label>
                    <input
                      placeholder="Post Title"
                      name="posttitle"
                      className="form-control form-control-lg"
                      value={this.state.post.title}
                      onChange={this.changePostTitleHandler}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label> Post Content </label>
                    <input
                      placeholder="Post Content"
                      name="postcontent"
                      className="form-control form-control-lg"
                      value={this.state.post.content}
                      onChange={this.changePostContentHandler}
                    />
                  </div>
                 
                  <button className="btn btn-success" onClick={this.updatePost.bind(this)}>Update</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="updateimage">
          <img src={pine}></img>
          <img src={icecream}></img>
          </div>
          <div className="updateimage2">
          <img src={pinee}></img>
          <img src={pool}></img>
          </div>
        
      </div>
    )
  }
}

export default PostUpdate