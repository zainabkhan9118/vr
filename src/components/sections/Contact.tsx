import React, { useRef, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (starsRef.current) {
      // Clear existing stars
      starsRef.current.innerHTML = '';
      
      // Generate random stars
      const count = 100;
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 2;
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        starsRef.current.appendChild(star);
      }
    }
  }, []);
  
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
    <section ref={sectionRef} className="min-h-screen flex justify-center items-center p-4 md:p-8 text-white relative" style={{ 
      backgroundImage: "radial-gradient(circle at 50% 50%, #1a0b50 0%, #0a0339 100%)",
      backgroundColor: "#0a0339"
    }}>
      <div className="stars" ref={starsRef}></div>
      <div className="max-w-4xl mx-auto py-16 relative z-10 w-full">
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight text-[#fcf7e9] text-center">
          Let's Connect
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-center max-w-2xl mx-auto">
          Questions? Feedback? Business opportunity? We'd love to hear from you.
        </p>
        
        <div className="max-w-2xl mx-auto bg-[#0a0339]/80 p-8 rounded-2xl backdrop-blur-md border border-white/10">
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
                className="bg-white/5 border-white/10 text-white h-14 text-lg focus:ring-cyan-500 focus:border-cyan-500"
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
                className="bg-white/5 border-white/10 text-white h-14 text-lg focus:ring-cyan-500 focus:border-cyan-500"
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
                className="bg-white/5 border-white/10 text-white text-lg resize-none focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit"
                disabled={isSubmitting} 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-2 h-12 rounded-lg transition-all duration-300 text-xl"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
          <div className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400 mr-3">
              <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#4DD8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl">hello@mindplayer.com</span>
          </div>
          
          <div className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400 mr-3">
              <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#4DD8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 9H2V21H6V9Z" stroke="#4DD8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#4DD8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl">@mindplayerapp</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
