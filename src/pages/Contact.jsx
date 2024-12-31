import React from 'react';

    function Contact() {
      return (
        <div>
          <div className="hero">
            <h1>Get in Touch</h1>
          </div>
          <div className="content">
            <form>
              <div>
                <label>Name</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label>Message</label>
                <textarea name="message" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
            <p>For official inquiries, visit Uber’s investor relations page.</p>
          </div>
        </div>
      );
    }

    export default Contact;
