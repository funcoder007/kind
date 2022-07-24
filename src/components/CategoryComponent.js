import React, { Component } from "react";
import CategoryService from "../services/CategoryService";
import PostService from "../services/PostService";
import Havana1 from "../assests/Havana1.webp";

import sale from "../assests/sale.gif";
import adds from "../assests/adds.gif";
export default class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.deleteCategory = this.deleteCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }

  updateCategory(categoryId) {
    this.props.history.push(`/categoryupdate/${categoryId}`);
  }
  componentDidMount() {
    CategoryService.getCategories().then((res) => {
      this.setState({ categories: res.data });
    });
  }

  deleteCategory(categoryId) {
    CategoryService.deleteCategory(categoryId).then((res) =>
      this.setState({
        categories: this.state.categories.filter(
          (category) => category.categoryId != categoryId
        ),
      })
    );
  }

  addCategory() {
    this.props.history.push("/addcategory");
  }

  categoryposts(categoryId)
  {
   
    this.props.history.push(`/postsbycategory/${categoryId}`);
  }
    
  

  render() {
    return (
      <div>
        <br></br>
       
        <div className="havana2">  <img src={adds} /></div>
       
      
     
        <div className="row">
          <div className="button">
            <button className="btn btn-primary" onClick={this.addCategory}>
              Add New Category
            </button>
          </div>
        </div>
        <br></br>
        <h2 className=" text-center" id="allcategories">All Categories</h2>
        <br></br>
        <table className="tablecategorylist">
          <tbody className="table-group-divider">
            {this.state.categories.map((user) => (
              <tr key={user.categoryId}>
                <div>
                  {" "}
                  <tr>
                    <td className="label3">Category Id</td>
                    <td>{user.categoryId}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td className="label3">Category Title</td>
                    <td>{user.categoryTitle}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td className="label3">Description</td>
                    <td>{user.categoryDescription}</td>
                  </tr>
                </div>
                <br></br>
                <br></br>
                <div>
                  <tr>
                    <td className="label3">Action</td>
                    <td>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.updateCategory(user.categoryId)}
                        className="btn btn-info"
                      >
                        Update
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deleteCategory(user.categoryId)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
            
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.categoryposts(user.categoryId)}
                        className="btn btn-warning"
                      >
                        All Posts Of This Category
                      </button>
                    </td>
                  </tr>
                </div>
                <br></br>
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
