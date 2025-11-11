'use client';

import React, { useState } from 'react';
import {
    FaEnvelope,
    FaUser,
    FaPhone,
    FaEdit,
    FaPaperPlane,
    FaCheck,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaClock,
    FaInstagram,
    FaFacebook,
    FaExclamationCircle,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const socialLinks = [
    {
        href: 'https://github.com/MrVirul',
        icon: <FaGithub className="w-5 h-5" />,
        label: 'GitHub',
        color: 'from-slate-600 to-slate-800',
    },
    {
        href: 'https://www.linkedin.com/in/virul-meemana-4597292a0/',
        icon: <FaLinkedin className="w-5 h-5" />,
        label: 'LinkedIn',
        color: 'from-blue-600 to-blue-800',
    },
    {
        href: 'https://x.com/SoulOfVirul',
        icon: <FaXTwitter className="w-5 h-5" />,
        label: 'Twitter',
        color: 'from-gray-700 to-black',
    },
    {
        href: 'https://www.instagram.com/virul_on_insta/',
        icon: <FaInstagram className="w-5 h-5" />,
        label: 'Instagram',
        color: 'from-pink-500 to-orange-500',
    },
    {
        href: 'https://www.facebook.com/virul.methdinu.meemana',
        icon: <FaFacebook className="w-5 h-5" />,
        label: 'Facebook',
        color: 'from-blue-600 to-blue-800',
    },
];

const contactInfo = [
    {
        icon: <FaMapMarkerAlt className="w-5 h-5" />,
        title: 'Location',
        detail: 'Available Worldwide',
        subtitle: 'Remote & On-site',
    },
    {
        icon: <FaClock className="w-5 h-5" />,
        title: 'Response Time',
        detail: 'Within 24 hours',
        subtitle: 'Usually much faster',
    },
];

const Contact = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        company: '', // honeypot field
    });
    const [result, setResult] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!validate()) {
            setResult('');
            return;
        }

        setIsSubmitting(true);
        setResult('Sending message...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data?.message || 'Unable to send message.');
            }

            setFormData({ name: '', email: '', phone: '', subject: '', message: '', company: '' });
            setErrors({});
            setResult('');
            router.push('/thank-you');
        } catch (error) {
            setResult('Failed to send message. Please try again or contact me directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 text-slate-100 overflow-hidden min-h-screen"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h4 className="text-sm md:text-base font-medium text-cyan-400 tracking-wider mb-4 uppercase">
                        Get In Touch
                    </h4>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                        Let's Work Together
                    </h2>
                    <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300 leading-relaxed">
                        Ready to bring your vision to life? I'm available for freelance projects and full-time
                        opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Contact Information */}
                        <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="font-medium text-white text-sm">{info.title}</h4>
                                            <p className="text-slate-300 text-sm">{info.detail}</p>
                                            <p className="text-xs text-purple-300">{info.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
                            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                                {socialLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group p-3 rounded-xl bg-gradient-to-br ${link.color} text-white hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center justify-center aspect-square`}
                                        title={link.label}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-8">
                        <div className="p-6 md:p-8 lg:p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <h3 className="text-2xl font-semibold text-white mb-8">Send Me a Message</h3>

                            <form onSubmit={onSubmit}>
                                {/* Honeypot field */}
                                <div className="hidden" aria-hidden="true">
                                    <label htmlFor="company" className="sr-only">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-300">Full Name *</label>
                                        <div className="relative">
                                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 text-sm" />
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full pl-12 pr-4 py-3 bg-slate-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-100 placeholder-slate-400 transition-all duration-300 ${
                                                    errors.name
                                                        ? 'border-red-400 focus:ring-red-400'
                                                        : 'border-white/10 hover:border-cyan-400/50'
                                                }`}
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="text-red-400 text-sm flex items-center gap-1">
                                                <FaExclamationCircle className="w-3 h-3" />
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-300">Email Address *</label>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 text-sm" />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full pl-12 pr-4 py-3 bg-slate-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-100 placeholder-slate-400 transition-all duration-300 ${
                                                    errors.email
                                                        ? 'border-red-400 focus:ring-red-400'
                                                        : 'border-white/10 hover:border-cyan-400/50'
                                                }`}
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-400 text-sm flex items-center gap-1">
                                                <FaExclamationCircle className="w-3 h-3" />
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Phone Field */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-300">Phone Number</label>
                                        <div className="relative">
                                            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 text-sm" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-100 placeholder-slate-400 transition-all duration-300 hover:border-cyan-400/50"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-300">Subject</label>
                                        <div className="relative">
                                            <FaEdit className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 text-sm" />
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="What's this about?"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-100 placeholder-slate-400 transition-all duration-300 hover:border-cyan-400/50"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2 mb-8">
                                    <label className="block text-sm font-medium text-slate-300">Message *</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your project or how I can help you..."
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        maxLength="500"
                                        className={`w-full p-4 bg-slate-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-100 placeholder-slate-400 transition-all duration-300 resize-none ${
                                            errors.message
                                                ? 'border-red-400 focus:ring-red-400'
                                                : 'border-white/10 hover:border-cyan-400/50'
                                        }`}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-400 text-sm flex items-center gap-1">
                                            <FaExclamationCircle className="w-3 h-3" />
                                            {errors.message}
                                        </p>
                                    )}
                                    <p className="text-xs text-slate-400">{formData.message.length}/500 characters</p>
                                </div>

                                {/* Submit Button */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 ${
                                            isSubmitting
                                                ? 'opacity-70 cursor-not-allowed'
                                                : 'hover:scale-105 active:scale-95'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <FaPaperPlane className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>

                                    {result && (
                                        <div
                                            className={`text-sm flex items-center gap-2 px-4 py-2 rounded-lg ${
                                                result.includes('success')
                                                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                                                    : result.includes('Sending')
                                                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                                                        : 'text-red-400 bg-red-500/10 border border-red-500/20'
                                            }`}
                                        >
                                            {result.includes('success') && <FaCheck className="w-4 h-4" />}
                                            {result.includes('Failed') && <FaExclamationCircle className="w-4 h-4" />}
                                            {result}
                                        </div>
                                    )}
                                </div>

                                <p className="text-xs text-slate-400 mt-6 text-center">
                                    * Required fields. Your information will be kept confidential.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
