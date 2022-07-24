import React, { Component } from "react";
import PostService from "../services/PostService";

export class PostByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      posts: [],
    };
  }

  componentDidMount() {
    PostService.postsbyCategory(this.state.id).then((res) => {
      const check = res.data.content;
      this.setState({ posts: res.data });
      console.log("Data is coming here");
      console.log(check);
    });
  }

  render() {
    return (
      <div>
        <div className="title"></div>

        <table className="tablecategorylist">
          <tbody className="table-group-divider">
            {this.state.posts.map((post) => (
              <tr key={this.state.id}>
                <div>
                  {" "}
                  <tr>
                    <td className="label3">Category Title</td>
                    <td>{post.category.categoryTitle}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td className="label3">Category Description</td>
                    <td>{post.category.categoryDescription}</td>
                  </tr>
                </div>

                <br></br>
                <br></br>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostByCategory;
