import React, { useState } from 'react';

const WebDesign = () => {
  const [activePackage, setActivePackage] = useState('silver');

  const pricingPackages = [
    {
      id: 'bronze',
      title: 'Bronze Package',
      subtitle: 'One Page Website',
      price: 'Ksh 10,000/=',
      duration: 'Ready within 2 days',
      popular: false,
      features: [
        'One Page Website',
        'Simple design',
        'Social Media Integration',
        'One Free Revision'
      ],
      color: 'linear-gradient(135deg, #CD7F32, #B66D1F)',
      badge: 'Perfect for Startups'
    },
    {
      id: 'silver',
      title: 'Silver Package',
      subtitle: 'Up to 5 Pages Website',
      price: 'Ksh 15,000/=',
      duration: 'Ready within 4 days',
      popular: true,
      features: [
        'Upto 5 Web pages',
        'Simple Design',
        'Social Media Integration',
        'Whatsapp Integration',
        'Free 5 Page Company Profile',
        '2 Free Revisions'
      ],
      color: 'linear-gradient(135deg, #C0C0C0, #A8A8A8)',
      badge: 'MOST POPULAR'
    },
    {
      id: 'gold',
      title: 'Gold Package',
      subtitle: 'Up to 15 Pages Website',
      price: 'Ksh 30,000/=',
      duration: 'Ready within 7 days',
      popular: false,
      features: [
        'Up to 15 Web pages',
        'Elegant & Stylish Design',
        'Social Whatsapp & Live Chat',
        'Blog Set Up',
        'Google Maps Integration',
        'Basic SEO',
        'Google Analytics',
        'Ecommerce Functionality',
        'Free 10 Page Company Profile',
        '3 Free Revisions'
      ],
      color: 'linear-gradient(135deg, #FFD700, #E6C300)',
      badge: 'Best Value'
    },
    {
      id: 'platinum',
      title: 'Platinum Package',
      subtitle: 'Upto 30 Pages Website',
      price: 'Ksh 50,000/=',
      duration: 'Ready within 14 days',
      popular: false,
      features: [
        'Upto 25 Web Pages',
        'Premium Design',
        'Social Media, Whatsapp & Live Chat',
        'Web Forms',
        'Blog & Events Module Setup',
        'Accept Donations & Fundraising (Optional)',
        'Google Analytics',
        'Standard SEO',
        'Ecommerce Functionality',
        'Google My Business Profile Set Up (Optional)',
        'Multi Language Support',
        'Content Gathering & Writing',
        'Mpesa Payment Integration (Optional)',
        'E Newsletters Setup',
        '15 Page Company Profile Design',
        'Website Loader QR Code'
      ],
      color: 'linear-gradient(135deg, #E5E4E2, #D4D3D0)',
      badge: 'Enterprise Solution'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Kenya College of Interior Design',
      url: 'www.kencid.ac.ke',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Design Week Africa',
      url: 'www.designweek.africa',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Nyika Coffee',
      url: 'www.nyikacoffee.co.ke',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Nutrifix Beauty & Wellness',
      url: 'www.nutrifix.co.ke',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Space Crew Consulting',
      url: 'www.spacecrewconsulting.com',
      category: 'Consulting',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Bayview Security Ltd',
      url: 'www.bayviewsecurity.africa',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      title: 'Periscope Ltd',
      url: 'www.periscopeltd.com',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      title: 'Bimacom Insurance Agency',
      url: 'www.bimacominsurance.co.ke',
      category: 'Insurance',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      title: 'Brandiam Agency',
      url: 'www.brandiamagency.com',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    }
  ];

  const services = [
    { icon: '🎨', title: 'Website Design', desc: 'Creative & responsive designs' },
    { icon: '🔄', title: 'Website Redesign', desc: 'Modernize your existing site' },
    { icon: '⚡', title: 'Website Optimization', desc: 'Speed & performance boost' },
    { icon: '🔧', title: 'Website Maintenance', desc: 'Regular updates & support' },
    { icon: '🛡️', title: 'Web Security', desc: 'SSL & security implementation' },
    { icon: '📱', title: 'Web UI & UX Design', desc: 'User-centered interfaces' },
    { icon: '📈', title: 'Website Updating', desc: 'Content & feature updates' },
    { icon: '🌐', title: 'Website Migrations', desc: 'Seamless platform transfers' },
    { icon: '👥', title: 'Support & Training', desc: 'Client training & support' }
  ];

  // Google Form URL - Replace this with your actual Google Form URL
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfYOUR_FORM_ID_HERE/viewform';
  
  // WhatsApp number and email
  const WHATSAPP_NUMBER = '0758284534';
  const WHATSAPP_FORMATTED = '+254758284534';
  const EMAIL_ADDRESS = 'bobwandati4@gmail.com';

  const handleWhatsappOrder = (packageName) => {
    const message = `Hello Tana Digital Agency! I'm interested in the ${packageName} package for website development.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_FORMATTED}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGoogleFormOrder = (packageName) => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  const handleWhatsappInquiry = () => {
    const message = "Hello Tana Digital Agency! I'm interested in your web design services.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_FORMATTED}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallUs = () => {
    window.location.href = `tel:${WHATSAPP_NUMBER}`;
  };

  const handleEmailInquiry = () => {
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=Web%20Design%20Inquiry`;
  };

  const handleOrderSimilar = (projectTitle) => {
    const message = `Hello Tana Digital Agency! I'm interested in a website similar to ${projectTitle}.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_FORMATTED}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Inline Styles
  const styles = {
    webDesignPage: {
      width: '100%',
      overflowX: 'hidden',
    },
    heroSection: {
      padding: '140px 0 80px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto 60px',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      lineHeight: '1.2',
      marginBottom: '24px',
      color: '#1a1a2e',
      fontFamily: "'Montserrat', sans-serif",
    },
    gradientText: {
      background: 'linear-gradient(135deg, #4a00e0, #8e2de2)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    heroDescription: {
      fontSize: '1.25rem',
      color: '#666',
      marginBottom: '40px',
      lineHeight: '1.7',
      maxWidth: '700px',
      margin: '0 auto 40px',
    },
    heroButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '40px',
    },
    btnPrimary: {
      padding: '16px 32px',
      background: 'linear-gradient(135deg, #4a00e0, #8e2de2)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(74, 0, 224, 0.2)',
    },
    btnSecondary: {
      padding: '16px 32px',
      background: 'white',
      color: '#4a00e0',
      border: '2px solid #4a00e0',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    btnOutline: {
      padding: '16px 32px',
      background: 'transparent',
      color: '#333',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    heroStats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '60px',
      flexWrap: 'wrap',
      marginTop: '60px',
    },
    statItem: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #4a00e0, #8e2de2)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '8px',
    },
    statText: {
      fontSize: '1.1rem',
      color: '#666',
      fontWeight: '500',
    },
    servicesSection: {
      padding: '100px 0',
      background: '#ffffff',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '20px',
      background: 'linear-gradient(135deg, #4a00e0, #8e2de2)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontFamily: "'Montserrat', sans-serif",
    },
    sectionSubtitle: {
      fontSize: '1.2rem',
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '30px',
    },
    serviceCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      border: '1px solid #f0f0f0',
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    serviceTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#1a1a2e',
      fontFamily: "'Montserrat', sans-serif",
    },
    serviceDesc: {
      color: '#666',
      fontSize: '0.95rem',
      lineHeight: '1.6',
    },
    pricingSection: {
      padding: '100px 0',
      background: '#f8f9fa',
    },
    pricingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '30px',
    },
    pricingCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '40px 30px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      position: 'relative',
      border: '2px solid transparent',
    },
    pricingCardPopular: {
      borderColor: '#4a00e0',
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(74, 0, 224, 0.15)',
    },
    popularBadge: {
      position: 'absolute',
      top: '-12px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(135deg, #4a00e0, #8e2de2)',
      color: 'white',
      padding: '8px 20px',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600',
      boxShadow: '0 4px 15px rgba(74, 0, 224, 0.2)',
    },
    packageBadge: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: 'white',
    },
    packageHeader: {
      marginBottom: '30px',
      textAlign: 'center',
    },
    packageTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#1a1a2e',
      fontFamily: "'Montserrat', sans-serif",
    },
    packageSubtitle: {
      color: '#666',
      marginBottom: '20px',
      fontSize: '0.95rem',
    },
    packagePrice: {
      marginTop: '20px',
    },
    price: {
      display: 'block',
      fontSize: '2.5rem',
      fontWeight: '800',
      color: '#1a1a2e',
      lineHeight: '1',
    },
    duration: {
      display: 'block',
      color: '#666',
      fontSize: '0.9rem',
      marginTop: '8px',
    },
    packageFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: '30px 0',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '16px',
      color: '#666',
    },
    featureIcon: {
      color: '#10b981',
      flexShrink: 0,
      marginTop: '2px',
    },
    orderButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginTop: '20px',
    },
    whatsappButton: {
      width: '100%',
      padding: '14px',
      border: 'none',
      borderRadius: '12px',
      color: 'white',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: 'linear-gradient(135deg, #25D366, #128C7E)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    googleFormButton: {
      width: '100%',
      padding: '14px',
      border: 'none',
      borderRadius: '12px',
      color: 'white',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: 'linear-gradient(135deg, #4285F4, #0F9D58)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    portfolioSection: {
      padding: '100px 0',
      background: '#ffffff',
    },
    portfolioGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '50px',
    },
    portfolioCard: {
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
    },
    portfolioImage: {
      position: 'relative',
      height: '220px',
      overflow: 'hidden',
    },
    portfolioImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    portfolioOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    previewBtn: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      background: 'white',
      color: '#333',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    orderBtn: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      background: '#4a00e0',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    portfolioContent: {
      padding: '24px',
    },
    portfolioCategory: {
      display: 'inline-block',
      padding: '4px 12px',
      background: '#f8f9fa',
      color: '#4a00e0',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
      marginBottom: '12px',
    },
    portfolioItemTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#1a1a2e',
      fontFamily: "'Montserrat', sans-serif",
    },
    portfolioUrl: {
      color: '#666',
      fontSize: '0.9rem',
    },
    viewMore: {
      textAlign: 'center',
    },
    aboutSection: {
      padding: '100px 0',
      background: '#f8f9fa',
    },
    aboutContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '60px',
      alignItems: 'start',
    },
    aboutText: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#666',
    },
    aboutTitle: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '24px',
      color: '#1a1a2e',
      fontFamily: "'Montserrat', sans-serif",
    },
    aboutParagraph: {
      marginBottom: '20px',
    },
    aboutFeatures: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    aboutFeatureItem: {
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
      background: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
    },
    aboutFeatureIcon: {
      color: '#4a00e0',
      flexShrink: 0,
      marginTop: '2px',
    },
    aboutFeatureContent: {
      flex: 1,
    },
    aboutFeatureTitle: {
      fontSize: '1.1rem',
      fontWeight: '700',
      marginBottom: '4px',
      color: '#1a1a2e',
    },
    aboutFeatureDesc: {
      color: '#666',
      fontSize: '0.9rem',
    },
    ctaSection: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #4a00e0, #8e2de2)',
      color: 'white',
      textAlign: 'center',
    },
    ctaContent: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '24px',
      fontFamily: "'Montserrat', sans-serif",
    },
    ctaDescription: {
      fontSize: '1.2rem',
      marginBottom: '40px',
      opacity: '0.9',
      lineHeight: '1.7',
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    ctaBtnPrimary: {
      padding: '16px 32px',
      background: 'white',
      color: '#4a00e0',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
    },
    ctaBtnSecondary: {
      padding: '16px 32px',
      background: 'transparent',
      color: 'white',
      border: '2px solid white',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    ctaBtnOutline: {
      padding: '16px 32px',
      background: 'transparent',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
  };

  // Hover effects
  const hoverEffects = {
    btnPrimaryHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 30px rgba(74, 0, 224, 0.3)',
    },
    btnSecondaryHover: {
      background: '#4a00e0',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 20px rgba(74, 0, 224, 0.2)',
    },
    btnOutlineHover: {
      borderColor: '#4a00e0',
      color: '#4a00e0',
      transform: 'translateY(-2px)',
    },
    serviceCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
      borderColor: '#4a00e0',
    },
    pricingCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
    },
    portfolioCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
    },
    aboutFeatureItemHover: {
      transform: 'translateX(5px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    },
    whatsappButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      filter: 'brightness(1.1)',
    },
    googleFormButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 20px rgba(66, 133, 244, 0.4)',
      filter: 'brightness(1.1)',
    },
    previewBtnHover: {
      background: '#f8f9fa',
      transform: 'scale(1.05)',
    },
    orderBtnHover: {
      background: '#3a00b0',
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.webDesignPage}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Get a Website today &<br />
              <span style={styles.gradientText}>Take your Business Online</span>
            </h1>
            <p style={styles.heroDescription}>
              Whether you're a startup looking to establish your online presence or an established enterprise 
              seeking to enhance your digital footprint, we have the expertise to deliver exceptional website 
              design & development solutions tailored to your unique needs.
            </p>
            <div style={styles.heroButtons}>
              <button 
                style={styles.btnPrimary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = hoverEffects.btnPrimaryHover.transform;
                  e.currentTarget.style.boxShadow = hoverEffects.btnPrimaryHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = styles.btnPrimary.boxShadow;
                }}
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Pricing →
              </button>
              <button 
                style={styles.btnSecondary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = hoverEffects.btnSecondaryHover.background;
                  e.currentTarget.style.color = hoverEffects.btnSecondaryHover.color;
                  e.currentTarget.style.transform = hoverEffects.btnSecondaryHover.transform;
                  e.currentTarget.style.boxShadow = hoverEffects.btnSecondaryHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = styles.btnSecondary.background;
                  e.currentTarget.style.color = styles.btnSecondary.color;
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
          <div style={styles.heroStats}>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>200+</h3>
              <p style={styles.statText}>Websites Delivered</p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>98%</h3>
              <p style={styles.statText}>Client Satisfaction</p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>24/7</h3>
              <p style={styles.statText}>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our Website Services Include</h2>
            <p style={styles.sectionSubtitle}>Comprehensive web solutions to elevate your digital presence</p>
          </div>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index}
                style={styles.serviceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = hoverEffects.serviceCardHover.transform;
                  e.currentTarget.style.boxShadow = hoverEffects.serviceCardHover.boxShadow;
                  e.currentTarget.style.borderColor = hoverEffects.serviceCardHover.borderColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = styles.serviceCard.boxShadow;
                  e.currentTarget.style.borderColor = styles.serviceCard.border;
                }}
              >
                <div style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* Pricing Section */}
      <section style={styles.pricingSection} id="pricing">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our Pricing</h2>
            <p style={styles.sectionSubtitle}>Flexible packages for SMEs & Corporates</p>
          </div>
          <div style={styles.pricingGrid}>
            {pricingPackages.map((pkg) => (
              <div 
                key={pkg.id}
                style={{
                  ...styles.pricingCard,
                  ...(pkg.popular ? styles.pricingCardPopular : {}),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = hoverEffects.pricingCardHover.transform;
                  e.currentTarget.style.boxShadow = hoverEffects.pricingCardHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = pkg.popular ? styles.pricingCardPopular.transform : 'none';
                  e.currentTarget.style.boxShadow = pkg.popular ? styles.pricingCardPopular.boxShadow : styles.pricingCard.boxShadow;
                }}
              >
                {pkg.popular && <div style={styles.popularBadge}>{pkg.badge}</div>}
                <div style={{ ...styles.packageBadge, background: pkg.color }}>
                  {pkg.badge}
                </div>
                <div style={styles.packageHeader}>
                  <h3 style={styles.packageTitle}>{pkg.title}</h3>
                  <p style={styles.packageSubtitle}>{pkg.subtitle}</p>
                  <div style={styles.packagePrice}>
                    <span style={styles.price}>{pkg.price}</span>
                    <span style={styles.duration}>{pkg.duration}</span>
                  </div>
                </div>
                <ul style={styles.packageFeatures}>
                  {pkg.features.map((feature, index) => (
                    <li key={index} style={styles.featureItem}>
                      <span style={styles.featureIcon}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div style={styles.orderButtons}>
                  <button 
                    style={styles.whatsappButton}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = hoverEffects.whatsappButtonHover.transform;
                      e.currentTarget.style.boxShadow = hoverEffects.whatsappButtonHover.boxShadow;
                      e.currentTarget.style.filter = hoverEffects.whatsappButtonHover.filter;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.filter = 'none';
                    }}
                    onClick={() => {
                      const message = `Hello Tana Digital Agency! I'm interested in the ${pkg.title} package for website development.`;
                      const whatsappUrl = `https://wa.link/praqbh?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>💬</span>
                    Order Via WhatsApp
                  </button>
                  <button 
                    style={styles.googleFormButton}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = hoverEffects.googleFormButtonHover.transform;
                      e.currentTarget.style.boxShadow = hoverEffects.googleFormButtonHover.boxShadow;
                      e.currentTarget.style.filter = hoverEffects.googleFormButtonHover.filter;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.filter = 'none';
                    }}
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe2rFBjSeGaBcH_TlwH24GoYKpVHzsfuOLXI6bfNDocvdYASg/viewform?usp=header', '_blank')}
                  >
                    <span style={{ fontSize: '1.2rem' }}>📝</span>
                    Order Via Google Form
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section style={styles.portfolioSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Explore Amazing Demos</h2>
            <p style={styles.sectionSubtitle}>Check out our portfolio of successful projects</p>
          </div>
          <div style={styles.portfolioGrid}>
            {portfolioItems.map((item) => (
              <div 
                key={item.id}
                style={styles.portfolioCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = hoverEffects.portfolioCardHover.transform;
                  e.currentTarget.style.boxShadow = hoverEffects.portfolioCardHover.boxShadow;
                  const img = e.currentTarget.querySelector('img');
                  const overlay = e.currentTarget.querySelector('.portfolio-overlay');
                  if (img) img.style.transform = 'scale(1.05)';
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = styles.portfolioCard.boxShadow;
                  const img = e.currentTarget.querySelector('img');
                  const overlay = e.currentTarget.querySelector('.portfolio-overlay');
                  if (img) img.style.transform = 'scale(1)';
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <div style={styles.portfolioImage}>
                  <img src={item.image} alt={item.title} style={styles.portfolioImg} />
                  <div className="portfolio-overlay" style={styles.portfolioOverlay}>
                    <button 
                      style={styles.previewBtn}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = hoverEffects.previewBtnHover.background;
                        e.currentTarget.style.transform = hoverEffects.previewBtnHover.transform;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = styles.previewBtn.background;
                        e.currentTarget.style.transform = 'none';
                      }}
                      onClick={() => window.open(`https://${item.url}`, '_blank')}
                    >
                      Preview
                    </button>
                    <button 
                      style={styles.orderBtn}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = hoverEffects.orderBtnHover.background;
                        e.currentTarget.style.transform = hoverEffects.orderBtnHover.transform;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = styles.orderBtn.background;
                        e.currentTarget.style.transform = 'none';
                      }}
                      onClick={() => handleOrderSimilar(item.title)}
                    >
                      Order Similar
                    </button>
                  </div>
                </div>
                <div style={styles.portfolioContent}>
                  <span style={styles.portfolioCategory}>{item.category}</span>
                  <h3 style={styles.portfolioItemTitle}>{item.title}</h3>
                  <p style={styles.portfolioUrl}>{item.url}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.viewMore}>
            <button 
              style={styles.btnOutline}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = hoverEffects.btnOutlineHover.borderColor;
                e.currentTarget.style.color = hoverEffects.btnOutlineHover.color;
                e.currentTarget.style.transform = hoverEffects.btnOutlineHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = styles.btnOutline.border;
                e.currentTarget.style.color = styles.btnOutline.color;
                e.currentTarget.style.transform = 'none';
              }}
              onClick={handleWhatsappInquiry}
            >
              View More Projects →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <div style={styles.container}>
          <div style={styles.aboutContent}>
            <div style={styles.aboutText}>
              <h2 style={styles.aboutTitle}>Professional Website Design in Kenya</h2>
              <p style={styles.aboutParagraph}>
                Looking for top-notch web designers in Kenya to bring your business or company website 
                design vision to life?
              </p>
              <p style={styles.aboutParagraph}>
                Look no further than Tana Digital Agency, your premier destination for website design 
                and development services. As one of the best web design companies in Kenya, we specialize 
                in crafting bespoke digital experiences tailored to your unique needs.
              </p>
              <p style={styles.aboutParagraph}>
                Our team of professional website developers in Nairobi is committed to delivering 
                cutting-edge solutions that not only captivate your audience but also drive tangible 
                results for your business. From conceptualization to execution, we work closely with 
                you every step of the way to ensure your web development vision is brought to life seamlessly.
              </p>
              <p style={styles.aboutParagraph}>
                We understand the importance of a strong online presence in today's digital landscape. 
                That's why we offer affordable Website Design & Development in Kenya, providing you 
                with a complete suite of services to establish and elevate your brand online.
              </p>
            </div>
            <div style={styles.aboutFeatures}>
              <div 
                style={styles.aboutFeatureItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = hoverEffects.aboutFeatureItemHover.transform;
                  e.currentTarget.style.boxShadow = hoverEffects.aboutFeatureItemHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = styles.aboutFeatureItem.boxShadow;
                }}
              >
                <span style={styles.aboutFeatureIcon}>🏆</span>
                <div style={styles.aboutFeatureContent}>
                  <h4 style={styles.aboutFeatureTitle}>Award-Winning Designs</h4>
                  <p style={styles.aboutFeatureDesc}>Recognized for creativity and innovation</p>
                </div>
              </div>
              <div 
                style={styles.aboutFeatureItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = hoverEffects.aboutFeatureItemHover.transform;
                  e.currentTarget.style.boxShadow = hoverEffects.aboutFeatureItemHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = styles.aboutFeatureItem.boxShadow;
                }}
              >
                <span style={styles.aboutFeatureIcon}>⭐</span>
                <div style={styles.aboutFeatureContent}>
                  <h4 style={styles.aboutFeatureTitle}>5-Star Rated Service</h4>
                  <p style={styles.aboutFeatureDesc}>Exceptional client satisfaction</p>
                </div>
              </div>
              <div 
                style={styles.aboutFeatureItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = hoverEffects.aboutFeatureItemHover.transform;
                  e.currentTarget.style.boxShadow = hoverEffects.aboutFeatureItemHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = styles.aboutFeatureItem.boxShadow;
                }}
              >
                <span style={styles.aboutFeatureIcon}>⚡</span>
                <div style={styles.aboutFeatureContent}>
                  <h4 style={styles.aboutFeatureTitle}>Fast Delivery</h4>
                  <p style={styles.aboutFeatureDesc}>Quick turnaround without compromising quality</p>
                </div>
              </div>
              <div 
                style={styles.aboutFeatureItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = hoverEffects.aboutFeatureItemHover.transform;
                  e.currentTarget.style.boxShadow = hoverEffects.aboutFeatureItemHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = styles.aboutFeatureItem.boxShadow;
                }}
              >
                <span style={styles.aboutFeatureIcon}>🛡️</span>
                <div style={styles.aboutFeatureContent}>
                  <h4 style={styles.aboutFeatureTitle}>Secure & Reliable</h4>
                  <p style={styles.aboutFeatureDesc}>Enterprise-grade security measures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection} id="contact">
        <div style={styles.container}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Let's Build Something Great Together!</h2>
            <p style={styles.ctaDescription}>
              Have a project in mind or ready to elevate your online presence? 
              Talk to us today—we're just a message away. Your next-level website 
              starts with a simple "Hello." Reach out now!
            </p>
            <div style={styles.ctaButtons}>
              <button 
                style={styles.ctaBtnPrimary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onClick={handleWhatsappInquiry}
              >
                <span style={{ fontSize: '1.2rem' }}>💬</span>
                Chat on WhatsApp
              </button>
              <button 
                style={styles.ctaBtnSecondary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#4a00e0';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'none';
                }}
                onClick={handleCallUs}
              >
                Call Us Now
              </button>
              <button 
                style={styles.ctaBtnOutline}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.transform = 'none';
                }}
                onClick={handleEmailInquiry}
              >
                Send Email
              </button>
            </div>
            <div style={{ marginTop: '30px', fontSize: '0.9rem', opacity: 0.8 }}>
              <p>WhatsApp: {WHATSAPP_NUMBER} | Email: {EMAIL_ADDRESS}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;