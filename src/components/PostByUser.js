import React, { Component } from 'react'
import PostService from '../services/PostService';

export class PostByUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
            id:props.match.params.id,
            posts:[]
        };
      }
    
      componentDidMount() {
        PostService.getPostsByUserId(this.state.id).then((res) => {
          
          const check = res.data;
          this.setState({ posts: res.data})
          console.log("Data is coming here");
          console.log(check);


        });
      }



  render() {
    return (
      <div>
        
        <div className='title'>
      
     
        </div>
        
        
         <table className="tablepostbyuser">
      <tbody className="table-group-divider">
        {this.state.posts.map((post) => (
          <tr key={post.postId}>
            <div>
              {" "}
              <tr>
                <td className="label3">Post Title</td>
                <td>{post.title}</td>
              </tr>
            </div>
            <div>
              <tr>
                <td className="label3">Post Content</td>
                <td>{post.content}</td>
              </tr>
            </div>
            <div>
              <tr>
                <td className="label3">Image Name</td>
                <td>{post.imageName}</td>
              </tr>
            </div>
            <div>
              <tr>
                <td className="label3">Added Date</td>
                <td>{post.addedDate}</td>
              </tr>
            </div>
            <br></br>
            <br></br>
           
          </tr>
        ))}
      </tbody>
    </table></div>
    )
  }
}

export default PostByUser