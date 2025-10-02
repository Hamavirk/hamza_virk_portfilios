import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, User, MessageSquare, Briefcase } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    // EmailJS credentials (you need to create an account)
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setSending(false);
        setSuccess('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        setSending(false);
        setSuccess(`Failed to send email: ${err.text}`);
      });
  };

  // ... rest of your JSX stays the same, just update the button:

  return (
    <div className="pt-16 min-h-screen">
      {/* ... your hero & contact info sections ... */}

      {/* Contact Form */}
      <div className="bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Send a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ... form fields ... */}
          <button
            type="submit"
            disabled={sending}
            className="group w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span>{sending ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
        {success && <p className="mt-4 text-center text-green-600 dark:text-green-400">{success}</p>}
      </div>
    </div>
  );
};

export default Contact;
