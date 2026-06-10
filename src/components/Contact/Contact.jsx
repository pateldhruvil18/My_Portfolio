import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // NOTE: Replace these with your actual EmailJS credentials
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: data.name,
      //     to_name: 'Dhruvil Patel',
      //     from_email: data.email,
      //     subject: data.subject,
      //     message: data.message,
      //   },
      //   'YOUR_PUBLIC_KEY'
      // );
      
      // Simulating network request for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Message sent successfully! I will get back to you soon.', {
        position: 'bottom-right',
        theme: 'dark'
      });
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again later.', {
        position: 'bottom-right',
        theme: 'dark'
      });
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <HiOutlineMail size={24} />,
      title: 'Email',
      value: 'pateldhruvil1810@gmail.com',
      link: 'mailto:pateldhruvil1810@gmail.com'
    },
    {
      icon: <FaPhoneAlt size={22} />,
      title: 'Phone',
      value: '+91 9876543210', // Placeholder, update if needed
      link: 'tel:+919876543210'
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: 'Location',
      value: 'Mathura, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-transform duration-300 block"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium mb-1">{info.title}</h4>
                    <p className="text-white font-semibold text-lg">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Map Placeholder or Decorative element */}
            <div className="w-full h-48 rounded-2xl overflow-hidden glass-card relative border border-white/10 group mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <FaMapMarkerAlt size={32} className="text-primary animate-bounce" />
                <span className="text-white font-medium">Available Worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors duration-300`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                  </div>
                  
                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors duration-300`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors duration-300`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <span className="text-red-500 text-xs mt-1 block">{errors.subject.message}</span>}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    rows="5"
                    {...register('message', { required: 'Message is required' })}
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-primary'} rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors duration-300 resize-none`}
                    placeholder="Hello Dhruvil, I would like to discuss..."
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg shadow-primary/30"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;