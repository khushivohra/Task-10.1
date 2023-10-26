import React, { useState } from 'react';
import "./navbar2.css";

function Navbar2() {
const [email,setEmai] = useState("")
  const subscribe = async () => {
    try {
      const response = await fetch('http://localhost:3000/subscribe', { 
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
        body: `email=${encodeURIComponent(email)}`,
      });

      if (response.status === 200) {
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

    return (
      <nav>
        <div className="navbar2">
          <ul>
            <li><a href="#">SIGN UP FOR DAILY INSIDER</a></li>
          
          </ul>
          <div className="search-box2">
            <input type="text" name="search" id="Search" placeholder="Enter your email" value={email} onChange={(e) => setEmai(e.target.value)}/>
            <button type="submit" onClick={subscribe}>Subscribe</button>

          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar2;