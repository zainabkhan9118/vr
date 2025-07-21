import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import ContactGalaxy from '../ui/ContactGalaxy'
import { usePageAnimation } from '../../hooks/usePageAnimation'

const Contact = () => {
  const { component } = usePageAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This is where you would send the email to hello@mindplayer.com
      console.log('Sending email to: hello@mindplayer.com');
      console.log('Form data:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={component} className="min-h-screen flex justify-center items-center p-4 md:p-8 text-white relative" style={{ 
      backgroundImage: "radial-gradient(circle at 50% 50%, #1a0b50 0%, #0a0339 100%)",
      backgroundColor: "#0a0339"
    }}>
      <ContactGalaxy />
      <div className="max-w-4xl mx-auto py-16 relative z-10 w-full">
        <h1
          className="page-title text-5xl md:text-7xl font-bold mb-6 leading-tight text-center"
          style={{
            color: '#2A1A6F',
            WebkitTextStroke: '2px #fff',
            textShadow: '0 2px 24px #B666D2cc, 0 1px 0 #fff',
            letterSpacing: '0.01em',
          }}
        >
          Let's Connect
        </h1>
        
        <p className="page-subtitle text-xl md:text-2xl mb-12 text-center max-w-2xl mx-auto">
          Questions? Feedback? Business opportunity? We'd love to hear from you.
        </p>
        
        <div className="page-card max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-md border border-white/10 contact-card-bg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="contact-input"
              />
            </div>
            
            <div className="mb-6">
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="contact-input"
              />
            </div>
            
            <div className="mb-6">
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={5}
                className="contact-input resize-none"
              />
            </div>
            
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="contact-btn"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
      <style>{`
        .contact-card-bg {
          background: linear-gradient(135deg, #C5ACCF 0%, #B666D2 100%) !important;
          border: 1.5px solid #DB91EF55 !important;
          box-shadow: 0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355 !important;
        }
        .contact-icon-glow {
          filter: drop-shadow(0 0 8px #DB91EF88) drop-shadow(0 2px 8px #B666D288);
        }
        .contact-input {
          background: linear-gradient(135deg, #F8E6FB 0%, #DB91EF 100%) !important;
          border: 1.5px solid #B666D2 !important;
          color: #2A1A6F !important;
          height: 3.5rem !important;
          font-size: 1.125rem !important;
          box-shadow: 0 2px 12px #DB91EF22;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .contact-input:focus {
          border: 1.5px solid #DB91EF !important;
          box-shadow: 0 0 0 2px #DB91EF55;
          outline: none;
        }
        .contact-btn {
          background: #6C3BA7 !important;
          color: #fff !important;
          font-size: 1.25rem !important;
          padding: 0.75rem 2.5rem !important;
          border-radius: 0.75rem !important;
          box-shadow: 0 2px 16px #6C3BA755, 0 1px 4px #B666D255;
          transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
        }
        .contact-btn:hover:not(:disabled), .contact-btn:focus:not(:disabled) {
          background: #53297D !important;
          box-shadow: 0 6px 32px #6C3BA799, 0 2px 8px #B666D2cc;
          transform: translateY(-2px) scale(1.04);
        }
        .contact-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
            </div>
          </form>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
          <div className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon-glow mr-3">
              <defs>
                <linearGradient id="contactIconGradient1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#DB91EF" />
                  <stop offset="100%" stopColor="#4DD8FF" />
                </linearGradient>
              </defs>
              <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="url(#contactIconGradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl">hello@mindplayer.com</span>
          </div>
          
          <div className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon-glow mr-3">
              <defs>
                <linearGradient id="contactIconGradient2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#DB91EF" />
                  <stop offset="100%" stopColor="#4DD8FF" />
                </linearGradient>
              </defs>
              <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="url(#contactIconGradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 9H2V21H6V9Z" stroke="url(#contactIconGradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="url(#contactIconGradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
      <style>{`
        .contact-card-bg {
          background: linear-gradient(135deg, #C5ACCF 0%, #B666D2 100%) !important;
          border: 1.5px solid #DB91EF55 !important;
          box-shadow: 0 4px 32px 0 #DB91EF33, 0 2px 8px #BDA8F355 !important;
        }
        .contact-icon-glow {
          filter: drop-shadow(0 0 8px #DB91EF88) drop-shadow(0 2px 8px #B666D288);
        }
      `}</style>
            <span className="text-xl">@mindplayerapp</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
