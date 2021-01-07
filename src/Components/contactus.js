import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
class ContactUs extends React.Component {
   state={
     in:"ijaz"
   }
    render() { 
        return (
          <div className="mb-5">
          <Navbar> </Navbar>
          <h1>Contact Us</h1>
          <Footer></Footer>
          </div>
         );
    }
}
 
export default ContactUs;