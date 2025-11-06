import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const InteriorDesignLandingPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Hero slideshow images
  const heroImages = [
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2132&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop'
  ];

  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will be in touch soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  // Enhanced Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-offwhite font-inter text-charcoal">
      
      {/* ============================================
          HEADER SECTION
      ============================================ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        {/* Utility/Social Media Bar */}
        <div className="bg-gray-100 py-2">
          <div className="max-w-7xl mx-auto px-6 flex justify-end">
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Main Navigation Band */}
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center -mt-6">
              <img 
                src="/lane.png" 
                alt="Sofia Lane Interiors" 
                className="h-20 w-auto"
              />
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Portfolio</a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Services</a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">About Us</a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Reviews</a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Press & Awards</a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Blog</a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium">Contact Us</a>
            </nav>
            
            {/* Search Icon */}
            <div className="flex items-center">
              <button className="text-black hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================
          HERO SECTION - Rotating Slideshow with Fixed Text
      ============================================ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Slideshow with Smooth Transitions */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${heroImages[currentImageIndex]}')`,
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                duration: 1.5,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            />
          </AnimatePresence>
          {/* Dark overlay for text readability */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" 
            style={{ opacity }}
          />
        </div>

        {/* Fixed Inspirational Text Overlay - Clean without outline */}
        <motion.div 
          className="absolute bottom-32 left-12 z-10 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          style={{ opacity }}
        >
          <motion.p 
            className="text-3xl md:text-4xl font-light tracking-wide leading-relaxed text-white font-[Linden_Hill] drop-shadow-2xl"
            variants={fadeInUp}
          >
            Where vision meets design, and spaces come alive
          </motion.p>
        </motion.div>

      </section>

      {/* ============================================
          ABOUT SECTION - Enhanced Split Layout
      ============================================ */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <motion.div 
          className="absolute top-20 right-0 w-96 h-96 bg-taupe/10 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="max-w-content mx-auto relative">
          <motion.div 
            className="grid md:grid-cols-2 gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={staggerContainer}
          >
            {/* Headshot with Layered Design */}
            <motion.div variants={fadeInLeft} className="relative">
              <motion.div 
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop"
                  alt="Sophia Lane"
                  className="w-full h-auto object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-8 -right-8 w-72 h-72 bg-gradient-to-br from-taupe/30 to-sand/20 rounded-3xl -z-10"
                initial={{ opacity: 0, x: -20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <motion.div 
                className="absolute -top-8 -left-8 w-40 h-40 border-4 border-taupe/30 rounded-3xl -z-10"
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            {/* About Text with Staggered Animation */}
            <motion.div variants={fadeInRight} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h2 className="font-playfair text-6xl font-bold mb-4 text-mutedblack leading-tight">
                  About Sophia Lane
                </h2>
                <motion.div 
                  className="w-24 h-1.5 bg-gradient-to-r from-taupe to-sand mb-8"
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
              <motion.p 
                className="text-xl leading-relaxed mb-6 text-charcoal font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Sophia Lane Interiors creates spaces that feel both intentional and alive — 
                where light, texture, and story come together.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-charcoal/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                With over a decade of experience transforming residential and commercial 
                environments, Sophia believes that great design isn't about following trends — 
                it's about crafting timeless environments that resonate with those who inhabit them. 
                Every project is an opportunity to celebrate beauty, functionality, and the art of living well.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PARALLAX DIVIDER - Design Philosophy
      ============================================ */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2100&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>
        
        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p 
            className="font-playfair text-3xl md:text-6xl font-light italic leading-relaxed mb-8"
            variants={fadeInUp}
          >
            "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated."
          </motion.p>
          <motion.p 
            className="font-playfair text-xl md:text-2xl font-light italic leading-relaxed mt-4"
            variants={fadeInUp}
          >
            — Paul Rand
          </motion.p>
          <motion.div 
            className="w-32 h-0.5 bg-white/50 mx-auto"
            variants={scaleIn}
          />
        </motion.div>
      </section>

      {/* ============================================
          PORTFOLIO SECTION - Enhanced Grid
      ============================================ */}
      <section className="py-32 px-6 bg-cream relative overflow-hidden">
        {/* Decorative Elements */}
        <motion.div 
          className="absolute bottom-20 left-0 w-96 h-96 bg-sand/30 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              className="font-playfair text-6xl md:text-7xl font-bold mb-6 text-mutedblack"
              variants={fadeInDown}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-taupe to-mutedblack mx-auto mb-6"
              variants={scaleIn}
            />
            <motion.p 
              className="text-xl text-charcoal/70 font-light"
              variants={fadeInUp}
            >
              A curated selection of our recent transformations
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={staggerContainer}
          >
            {/* Project Card 1 - Enhanced */}
            <motion.div 
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              variants={scaleIn}
              whileHover={{ y: -12 }}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <motion.img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
                  alt="Modern Living Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-playfair text-3xl font-bold mb-3">
                      Modern Sanctuary
                    </h3>
                    <p className="text-sm mb-4 opacity-90">Residential · New York</p>
                    <div className="flex items-center text-sm font-medium">
                      <span className="mr-2">View Project</span>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Project Card 2 - Enhanced */}
            <motion.div 
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              variants={scaleIn}
              whileHover={{ y: -12 }}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <motion.img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                  alt="Elegant Dining Space"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-playfair text-3xl font-bold mb-3">
                      Elegant Harmony
                    </h3>
                    <p className="text-sm mb-4 opacity-90">Residential · California</p>
                    <div className="flex items-center text-sm font-medium">
                      <span className="mr-2">View Project</span>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Project Card 3 - Enhanced */}
            <motion.div 
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              variants={scaleIn}
              whileHover={{ y: -12 }}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <motion.img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
                  alt="Contemporary Office"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-playfair text-3xl font-bold mb-3">
                      Coastal Retreat
                    </h3>
                    <p className="text-sm mb-4 opacity-90">Residential · Miami</p>
                    <div className="flex items-center text-sm font-medium">
                      <span className="mr-2">View Project</span>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PARALLAX DIVIDER 2 - Craftsmanship
      ============================================ */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3 
            className="font-playfair text-7xl md:text-8xl font-bold mb-8 leading-tight"
            variants={fadeInUp}
          >
            Every Detail Matters
          </motion.h3>
          <motion.p 
            className="text-xl md:text-2xl font-light leading-relaxed tracking-wide"
            variants={fadeInUp}
          >
            From concept to completion, we obsess over the details that transform a house into a home.
          </motion.p>
        </motion.div>
      </section>

      {/* ============================================
          SERVICES SECTION - Enhanced Cards
      ============================================ */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-offwhite to-cream">
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-40 right-20 w-80 h-80 bg-taupe/10 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              className="font-playfair text-6xl md:text-7xl font-bold mb-6 text-mutedblack"
              variants={fadeInDown}
            >
              Our Services
            </motion.h2>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-taupe to-mutedblack mx-auto mb-6"
              variants={scaleIn}
            />
            <motion.p 
              className="text-xl text-charcoal/70 font-light"
              variants={fadeInUp}
            >
              Comprehensive design solutions tailored to your vision
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={staggerContainer}
          >
            {/* Service 1 - Enhanced */}
            <motion.div 
              className="text-center group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-sand to-taupe rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </motion.div>
              <h3 className="font-playfair text-3xl font-bold mb-5 text-mutedblack">
                Residential Design
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                Transform your home into a personalized sanctuary that reflects your lifestyle and aesthetic.
              </p>
            </motion.div>

            {/* Service 2 - Enhanced */}
            <motion.div 
              className="text-center group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-sand to-taupe rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </motion.div>
              <h3 className="font-playfair text-3xl font-bold mb-5 text-mutedblack">
                Commercial Spaces
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                Create inspiring work environments that enhance productivity and embody your brand identity.
              </p>
            </motion.div>

            {/* Service 3 - Enhanced */}
            <motion.div 
              className="text-center group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-sand to-taupe rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <h3 className="font-playfair text-3xl font-bold mb-5 text-mutedblack">
                Virtual Consultations
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                Expert design guidance from anywhere in the world, bringing sophisticated style to your fingertips.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS SECTION - Enhanced Cards
      ============================================ */}
      <section className="py-32 px-6 bg-sand relative overflow-hidden">
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-taupe/20 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              className="font-playfair text-6xl md:text-7xl font-bold mb-6 text-mutedblack"
              variants={fadeInDown}
            >
              Client Stories
            </motion.h2>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-taupe to-mutedblack mx-auto mb-6"
              variants={scaleIn}
            />
            <motion.p 
              className="text-xl text-charcoal/70 font-light"
              variants={fadeInUp}
            >
              What our clients say about working with us
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            variants={staggerContainer}
          >
            {/* Testimonial 1 - Enhanced */}
            <motion.div 
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              variants={scaleIn}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-taupe/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="flex items-center mb-6 relative">
                <motion.img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop"
                  alt="Client"
                  className="w-20 h-20 rounded-full object-cover mr-5 ring-4 ring-sand"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h4 className="font-playfair text-xl font-bold text-mutedblack">Emily Richardson</h4>
                  <p className="text-sm text-charcoal/60">Greenwich, CT</p>
                </div>
              </div>
              <div className="mb-4">
                <svg className="w-10 h-10 text-taupe/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="italic text-charcoal/80 leading-relaxed text-lg">
                "Sophia transformed our home into something beyond what we imagined. 
                Every detail feels intentional, yet the space is warm and livable. 
                Her ability to listen and translate our vision was remarkable."
              </p>
            </motion.div>

            {/* Testimonial 2 - Enhanced */}
            <motion.div 
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              variants={scaleIn}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-taupe/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="flex items-center mb-6 relative">
                <motion.img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
                  alt="Client"
                  className="w-20 h-20 rounded-full object-cover mr-5 ring-4 ring-sand"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h4 className="font-playfair text-xl font-bold text-mutedblack">Michael Chen</h4>
                  <p className="text-sm text-charcoal/60">San Francisco, CA</p>
                </div>
              </div>
              <div className="mb-4">
                <svg className="w-10 h-10 text-taupe/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="italic text-charcoal/80 leading-relaxed text-lg">
                "Working with Sophia Lane Interiors was a dream. Professional, creative, 
                and incredibly attentive to our needs. Our office space now inspires both 
                our team and clients who visit."
              </p>
            </motion.div>

            {/* Testimonial 3 - Enhanced */}
            <motion.div 
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              variants={scaleIn}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-taupe/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="flex items-center mb-6 relative">
                <motion.img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
                  alt="Client"
                  className="w-20 h-20 rounded-full object-cover mr-5 ring-4 ring-sand"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h4 className="font-playfair text-xl font-bold text-mutedblack">Sarah Martinez</h4>
                  <p className="text-sm text-charcoal/60">Austin, TX</p>
                </div>
              </div>
              <div className="mb-4">
                <svg className="w-10 h-10 text-taupe/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="italic text-charcoal/80 leading-relaxed text-lg">
                "The virtual consultation exceeded all expectations. Sophia's expertise 
                and clear communication made the process seamless. Our home finally feels 
                like us—elevated and authentic."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PARALLAX DIVIDER 3 - Begin Your Journey
      ============================================ */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2132&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
        
        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3 
            className="font-playfair text-6xl md:text-7xl font-bold mb-8 leading-tight"
            variants={fadeInUp}
          >
            Ready to Transform Your Space?
          </motion.h3>
          <motion.p 
            className="text-xl md:text-2xl font-light leading-relaxed tracking-wide mb-10"
            variants={fadeInUp}
          >
            Let's create something extraordinary together.
          </motion.p>
          <motion.button
            onClick={scrollToContact}
            className="bg-white text-charcoal px-12 py-5 rounded-full text-lg font-medium hover:bg-cream transition-all duration-500 shadow-2xl"
            variants={scaleIn}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </section>

      {/* ============================================
          CONTACT SECTION
      ============================================ */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-5xl font-bold mb-4 text-mutedblack">
              Let's Design Something Beautiful
            </h2>
            <p className="text-lg text-charcoal/70">
              Ready to transform your space? Get in touch to start the conversation.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Contact Form */}
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={fadeInUp}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-charcoal">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-taupe rounded-lg focus:outline-none focus:ring-2 focus:ring-taupe bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-charcoal">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-taupe rounded-lg focus:outline-none focus:ring-2 focus:ring-taupe bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-charcoal">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-taupe rounded-lg focus:outline-none focus:ring-2 focus:ring-taupe bg-white resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-mutedblack text-white px-8 py-4 rounded-full font-medium hover:bg-charcoal transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              variants={fadeInUp}
            >
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-4 text-mutedblack">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-taupe mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-mutedblack">Studio Location</p>
                      <p className="text-charcoal/70">123 Design Avenue<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-taupe mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-mutedblack">Email</p>
                      <p className="text-charcoal/70">hello@sophialaneinteriors.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-taupe mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-mutedblack">Phone</p>
                      <p className="text-charcoal/70">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-2xl font-bold mb-4 text-mutedblack">
                  Follow Along
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sand rounded-full flex items-center justify-center hover:bg-taupe transition-colors duration-300"
                  >
                    <svg className="w-6 h-6 text-mutedblack" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://pinterest.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sand rounded-full flex items-center justify-center hover:bg-taupe transition-colors duration-300"
                  >
                    <svg className="w-6 h-6 text-mutedblack" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FOOTER
      ============================================ */}
      <footer className="bg-mutedblack text-white py-12 px-6">
        <div className="max-w-content mx-auto text-center">
          <p className="font-playfair text-2xl mb-4">Sophia Lane Interiors</p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-sand transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-sand transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          
          <p className="text-sm text-white/60">
            © 2025 Sophia Lane Interiors. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InteriorDesignLandingPage;

