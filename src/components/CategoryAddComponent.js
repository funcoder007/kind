import React, { Component } from 'react'
import CategoryService from '../services/CategoryService';
import cart from '../assests/cart.webp'
import Frame from "../assests/Frame.jpg";
import Frame2 from "../assests/Frame2.jpg";
import Frame3 from "../assests/Frame3.jpg";

import Lens from "../assests/Lens.jpg";
import Lens2 from "../assests/Lens2.jpg";
import Sunglasses from "../assests/Sunglasses.jpg";
export default class CategoryAddComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
          categoryTitle: '',
          categoryDescription: ''
        
        };
        this.changecategoryTitle = this.changecategoryTitle.bind(this);
        this.changecategoryDescription = this.changecategoryDescription.bind(this);
        
        this.saveCategory=this.saveCategory.bind(this);
      }



      saveCategory=(e)=>{
        e.preventDefault();
        const category =
        {
            categoryTitle:this.state.categoryTitle,
            categoryDescription:this.state.categoryDescription,
         
        }
      
        console.log('category'+ JSON.stringify(category));
        CategoryService.createCategory(category).then(res=>
          {
            this.props.history.push('/first');
          });
      
        }

        changecategoryTitle(event) {
            this.setState({ categoryTitle: event.target.value });
          }
        
          changecategoryDescription(event) {
            this.setState({ categoryDescription: event.target.value });
          }
          
        

          
  cancel()
  {
    this.props.history.push('/first');
  }

    
  render() {
    return (
        <div>
             <div className="addcategory"><img src={cart} alt="AddCategory"></img></div>
             <div className='categories'>
          Categories
        </div>
             <section id="span4">
          <div className="test4">
            <img src={Frame} />
            <img src={Sunglasses} />
            <img src={Lens} />
           
          </div>
        </section>
        <section id="span5">
          <div className="test5">
            <img src={Lens2} />
            <img src={Frame2} />
            <img src={Frame3} />
           
          </div>
        </section>
        <div className='categories'>
          Category IDs
        </div>

        <div>
        <table className='addcategorytable'>
		<thead>
			<tr>
      <th >Brand</th>
				<th >Glasses</th>
				<th>Lens</th>
				<th>Sunglasses</th>
				<th>Frame</th>
				<th>Others</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>RayBan</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
        <td>&nbsp;</td>
			</tr>
			<tr>
				<td>RayBan</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
        <td>&nbsp;</td>
			</tr>
			<tr>
				<td>RayBan</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
        <td>&nbsp;</td>
			</tr>
			<tr>
				<td>RayBan</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
        <td>&nbsp;</td>
			</tr>
			<tr>
				<td>RayBan</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
        <td>&nbsp;</td>
			</tr>
			<tr>
				<td>RayBan</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
        <td>&nbsp;</td>
			</tr>
			<tr>
				<td>RayBan</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
        <td>&nbsp;</td>
			</tr>
			<tr>
				<td>RayBan</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
        <td>&nbsp;</td>
			</tr>
			<tr>
				<td>RayBan</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
        <td>&nbsp;</td>
			</tr>
		</tbody>
	</table>



        </div>
        <div className='categories'>
          Add New Category
        </div>
          
          <div className="container">
         
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3" id="formcategory">
                <h3 className="text-center">Add Category</h3>
                <div className="card-body">
                  <form >
                    <div className="form-outline mb-4">
                      <label className='label2'> Category Title  </label>
                      <input
                        placeholder="Category Title"
                        name="categoryTitle"
                        className="form-control form-control-lg"
                        value={this.state.categoryTitle}
                        onChange={this.changecategoryTitle}
                      />
                    </div>
  
                    <div className="form-outline mb-4">
                      <label className='label2'> Category Description </label>
                      <input
                        placeholder="Category Description"
                        name="categoryDescription"
                        className="form-control form-control-lg"
                        value={this.state.categoryDescription}
                        onChange={this.changecategoryDescription}
                      />
                    </div>
                   
                   <div className="btns2"> <button  className="btn btn-success" onClick={this.saveCategory} id="buttonsave2">Save</button>
     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}   id="buttondelete2">Cancel</button></div>
  
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
