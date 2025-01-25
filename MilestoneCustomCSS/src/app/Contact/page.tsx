'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main>

      <section className="section">

        <div className="container">

          <h1 className="section-title">Contact Us</h1>

          <div className="form-container">

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  value={formData.name}
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  value={formData.email}
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="message" className="form-label">Message</label>

                <textarea
                  id="message"
                  className="form-textarea"
                  value={formData.message}
                  required
                ></textarea>

              </div>

              <button type="submit" className="button button-primary">

                Send Message <Send size={20} />

              </button>

            </form>

          </div>

        </div>
        
      </section>
    </main>
  );
}