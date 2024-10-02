import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer ">
      <div className="container ">
        <div className="row">
          <div className="col ">
            <h5>Contact</h5>
            <ul>
              <li>Email: ecommerce-info@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div className="col">
            <h5>Follow Us</h5>
            <ul className="justify-content-center  links">
              <li><Link to="https://www.facebook.com" className='link'target="_blank">Facebook</Link></li>
              <li><Link to="https://www.instagram.com"className='link'target="_blank">Instagram</Link></li>
            </ul>
            <p>Copyright © 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}