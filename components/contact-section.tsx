
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Download, Linkedin } from 'lucide-react'

interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: string
  linkedin: string
}

interface ContactSectionProps {
  personalInfo: PersonalInfo
}

export default function ContactSection({ personalInfo }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleDownloadCV = () => {
    try {
      // Download the actual CV PDF file
      const cvUrl = '/assets/Elton_Gomes_Internship_Unsolicited_CV.pdf'
      const link = document.createElement('a')
      link.href = cvUrl
      link.download = 'Elton_Gomes_Internship_Unsolicited_CV.pdf'
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener noreferrer')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading CV:', error)
      // Fallback: open in new tab
      window.open('/assets/Elton_Gomes_Internship_Unsolicited_CV.pdf', '_blank')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-[#0f0f0f] to-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#E5E5E5] max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 netflix-card hover:bg-[#222222] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E50914] bg-opacity-20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <div>
                    <p className="text-[#E5E5E5] text-sm">Email</p>
                    <p className="text-white font-medium">
                      {personalInfo?.email || 'eltongomes642@gmail.com'}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 netflix-card hover:bg-[#222222] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E50914] bg-opacity-20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <div>
                    <p className="text-[#E5E5E5] text-sm">Phone</p>
                    <p className="text-white font-medium">
                      {personalInfo?.phone || '+4915129510880'}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 netflix-card hover:bg-[#222222] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E50914] bg-opacity-20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <div>
                    <p className="text-[#E5E5E5] text-sm">Location</p>
                    <p className="text-white font-medium">
                      Schweinfurt, Germany
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="w-full netflix-button-primary flex items-center justify-center space-x-2 py-4"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>

              <motion.a
                href="https://www.linkedin.com/in/eltongomes642"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="w-full netflix-button-secondary flex items-center justify-center space-x-2 py-3 text-decoration-none"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="netflix-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[#E5E5E5] text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full netflix-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#E5E5E5] text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full netflix-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#E5E5E5] text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full netflix-input"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#E5E5E5] text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full netflix-input resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full netflix-button-primary flex items-center justify-center space-x-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="netflix-spinner" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    Something went wrong. Please try again or contact me directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
