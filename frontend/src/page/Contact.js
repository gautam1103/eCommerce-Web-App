// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
    
//   )
// }

// export default Contact


import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // You can send the form data to your backend or a third-party service here
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {submitted ? (
        <div className="submitted-message">
          Thanks for contacting us! We'll get back to you as soon as possible.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('/api/contact', formData); // send form data to backend endpoint
//       setSubmitted(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="submitted-message">
//         Thank you for contacting us!
//       </div>
//     );
//   }

//   return (
//     <div className="contact-container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             name="message"
//             id="message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//           />
//         </div>

//         {/* <button type="submit">Submit</button> */}
//         <button type="submit">Submit</button> 
//       </form>
//     </div>
//   );
// };

// export default Contact;



// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {
//       name,
//       email,
//       message,
//     };
//     const response = await fetch('/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
//     if (response.ok) {
//       setSubmitted(true);
//     }
//   };
  

//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       {submitted ? (
//         <div className="submitted-message">
//           Thanks for contacting us! We'll get back to you as soon as possible.
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={e => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={e => setMessage(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Contact;


