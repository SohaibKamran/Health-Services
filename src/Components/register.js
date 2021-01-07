import React,{Component} from 'react';
import Footer from './footer';
import Navbar from './navbar';
class Register extends Component {
  constructor(props){
    super(props);
  }
render() { 
        return ( 
          <div className="mb-5">
        <Navbar>
        </Navbar>
        <h1>Contact Us</h1>
        <Footer></Footer>
        </div>

         );
    }
}
 
export default Register;