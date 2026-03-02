"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import product data
const productData = [
  {
    category: "Asset Management",
    icon: "🗂️",
    description: "Comprehensive tools to track, manage, and optimize assets throughout their lifecycle",
    base: "asset-management",
    items: [
      {
        label: "Asset Life Cycle Management",
        icon: "🔄",
        description: "Manages assets from procurement and deployment to maintenance, depreciation, and disposal"
      },
      {
        label: "Asset Tracking",
        icon: "📍",
        description: "Monitors asset location, usage, and status in real time to improve visibility and control"
      },
      {
        label: "Asset Financial & Compliance Management",
        icon: "📊",
        description: "Tracks asset costs, depreciation, audits, and regulatory compliance to ensure financial accuracy"
      },
      {
        label: "Reports and Analytics",
        icon: "📈",
        description: "Provides detailed insights into asset performance, utilization, and maintenance trends"
      }
    ]
  },
  {
    category: "Manufacturing ERP",
    icon: "🏭",
    description: "End-to-end ERP for manufacturing businesses",
    base: "manufacturing-erp",
    items: [
      {
        label: "Production Planning & Scheduling",
        icon: "🏭",
        description: "Streamlines workflows, resources, and schedules for timely manufacturing execution"
      },
      {
        label: "Expense Management Software",
        icon: "💳",
        description: "Tracks, controls, and streamlines business expenses effortlessly"
      },
      {
        label: "Mobile App",
        icon: "📱",
        description: "Provides on-the-go ERP access with real-time updates"
      },
      {
        label: "AI-Powered Demand Forecasting",
        icon: "📊",
        description: "Uses AI models to predict demand and optimize inventory levels"
      },
      {
        label: "Field Service Management",
        icon: "🛠️",
        description: "Schedules, tracks, and manages field service operations efficiently"
      },
      {
        label: "Ticket Management Software",
        icon: "🎫",
        description: "Handles service tickets efficiently for faster issue resolution"
      }
    ]
  },
  {
    category: "HRMS",
    icon: "👥",
    description: "Manage employees, payroll, and performance efficiently",
    base: "hrms",
    items: [
      {
        label: "Integrated Recruitment",
        icon: "🧑‍💼",
        description: "AI-powered recruitment system for faster and smarter talent hiring"
      },
      {
        label: "Learning Management",
        icon: "🎓",
        description: "Smart LMS platform for automated employee training and skill development"
      },
      {
        label: "Mobile App",
        icon: "📱",
        description: "Mobile-first HRMS app for the on-the-go workforce"
      },
      {
        label: "HR Chatbot",
        icon: "🤖",
        description: "AI-powered HR chatbot for instant employee support and queries"
      }
    ]
  },
  {
    category: "CRM",
    icon: "📞",
    description: "Build and maintain strong customer relationships",
    base: "crm",
    items: [
      {
        label: "Contact & Lead Management",
        icon: "📇",
        description: "Centralized contact and lead tracking for better sales organization"
      },
      {
        label: "Sales Pipeline Automation",
        icon: "🔄",
        description: "Automated sales pipeline with intelligent deal progression"
      },
      {
        label: "Customer Interaction Tracking",
        icon: "💬",
        description: "Track all customer touchpoints for improved engagement"
      }
    ]
  },
  {
    category: "Projects",
    icon: "📅",
    description: "Intelligent platform enabling smooth project delivery",
    base: "project",
    items: [
      {
        label: "Project Planning & Scheduling",
        icon: "📅",
        description: "Streamlined project planning and scheduling with automated workflows"
      },
      {
        label: "Task & Resource Management",
        icon: "🧩",
        description: "Optimize tasks and resources using smart project allocation"
      },
      {
        label: "Real-Time Progress Tracking",
        icon: "📊",
        description: "Real-time project progress tracking with actionable insights"
      }
    ]
  },
  {
    category: "Recruitment",
    icon: "🧲",
    description: "Modern recruitment system offering quick, efficient hiring",
    base: "recruitment",
    items: [
      {
        label: "AI-Powered Candidate Sourcing",
        icon: "🤖",
        description: "AI-driven sourcing engine to discover high-quality candidates"
      },
      {
        label: "Automated Resume Screening",
        icon: "📄",
        description: "Smart resume screening automation for faster hiring decisions"
      }
    ]
  },
  {
    category: "Retail",
    icon: "🛍️",
    description: "Tools for managing retail sales and operations",
    base: "retail",
    items: [
      {
        label: "Unified POS & Billing",
        icon: "🧾",
        description: "Seamless unified POS and billing for faster checkout experiences"
      },
      {
        label: "Real-Time Inventory Sync",
        icon: "🔄",
        description: "Real-time inventory synchronization ensuring accurate stock visibility"
      }
    ]
  },
  {
    category: "Rewards",
    icon: "🎁",
    description: "Earn points, perks, and incentives",
    base: "rewards",
    items: [
      {
        label: "Employee Rewards & Recognition",
        icon: "🏆",
        description: "Boost engagement with automated employee rewards and recognition programs"
      },
      {
        label: "Partner Loyalty Program",
        icon: "🤝",
        description: "Strengthen partnerships through scalable loyalty program management"
      }
    ]
  },
  {
    category: "Upskill",
    icon: "📚",
    description: "Skill-focused learning and training",
    base: "upskill",
    items: [
      {
        label: "Employee Enablement",
        icon: "🚀",
        description: "Equip employees with continuous learning and development tools"
      },
      {
        label: "AI-Powered Learning Paths",
        icon: "🤖",
        description: "Personalized AI-driven learning paths for continuous skill growth"
      }
    ]
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const filteredProducts = selectedCategory === "all" 
    ? productData 
    : productData.filter(p => p.base === selectedCategory);

  return (
    <main className="min-h-screen" style={{ background: 'var(--color-off-white)' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--color-primary-xlight) 0%, var(--color-white) 100%)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--color-ink)',
              marginBottom: '1rem'
            }}>
              Enterprise Products
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--color-muted)',
              maxWidth: '800px',
              lineHeight: '1.8'
            }}>
              Powerful enterprise solutions tailored to different industries, ensuring performance, 
              scalability, and long-term business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <section style={{ 
        background: 'var(--color-white)',
        borderBottom: '1px solid var(--color-border)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div className="container" style={{ padding: '1.5rem 0' }}>
          <div style={{ 
            display: 'flex', 
            gap: '0.75rem', 
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}>
            <button
              onClick={() => setSelectedCategory("all")}
              className={selectedCategory === "all" ? "btn btn-primary" : "btn btn-ghost"}
              style={{ 
                fontSize: '0.75rem',
                padding: '0.6rem 1.5rem',
                whiteSpace: 'nowrap'
              }}
            >
              All Products
            </button>
            {productData.map((product) => (
              <button
                key={product.base}
                onClick={() => setSelectedCategory(product.base)}
                className={selectedCategory === product.base ? "btn btn-primary" : "btn btn-ghost"}
                style={{ 
                  fontSize: '0.75rem',
                  padding: '0.6rem 1.5rem',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>{product.icon}</span>
                <span>{product.category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.base}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(70, 192, 191, 0.12)';
                  e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                {/* Category Header */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-primary-xlight) 0%, var(--color-white) 100%)',
                  padding: '1.5rem',
                  borderBottom: '1px solid var(--color-border)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '2rem' }}>{product.icon}</span>
                    <h3 style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontSize: '1.5rem',
                      color: 'var(--color-ink)',
                      margin: 0
                    }}>
                      {product.category}
                    </h3>
                  </div>
                  <p style={{ 
                    color: 'var(--color-muted)', 
                    fontSize: '0.9rem',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    {product.description}
                  </p>
                </div>

                {/* Sub-products List */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <small style={{ 
                      color: 'var(--color-primary-dark)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {product.items.length} Features
                    </small>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {product.items.slice(0, expandedProduct === product.base ? product.items.length : 4).map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        style={{
                          display: 'flex',
                          gap: '0.75rem',
                          padding: '0.75rem',
                          background: 'var(--color-off-white)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid transparent',
                          transition: 'all var(--transition-fast)',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--color-primary-xlight)';
                          e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--color-off-white)';
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                      >
                        <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ 
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            color: 'var(--color-ink)',
                            marginBottom: '0.25rem'
                          }}>
                            {item.label}
                          </div>
                          <div style={{ 
                            fontSize: '0.8rem',
                            color: 'var(--color-muted)',
                            lineHeight: '1.4'
                          }}>
                            {item.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Show More/Less Button */}
                  {product.items.length > 4 && (
                    <button
                      onClick={() => setExpandedProduct(
                        expandedProduct === product.base ? null : product.base
                      )}
                      style={{
                        marginTop: '1rem',
                        width: '100%',
                        padding: '0.75rem',
                        background: 'transparent',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--color-primary-dark)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-primary-xlight)';
                        e.currentTarget.style.borderColor = 'var(--color-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = 'var(--color-border)';
                      }}
                    >
                      {expandedProduct === product.base 
                        ? '− Show Less' 
                        : `+ Show ${product.items.length - 4} More Features`
                      }
                    </button>
                  )}

                  {/* CTA Button */}
                  <button 
                    className="btn btn-primary"
                    style={{ 
                      marginTop: '1rem',
                      width: '100%'
                    }}
                  >
                    Explore {product.category}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Why Choose Section */}
      <section style={{ 
        background: 'var(--color-white)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-ink)',
              marginBottom: '1rem'
            }}>
              Why Capco Products Stand Out
            </h2>
            <p style={{ 
              color: 'var(--color-muted)',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Every product we build is designed with a strong engineering foundation, 
              seamless user experience, and enterprise-grade security.
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '🎯',
                title: 'Industry-Focused',
                desc: 'Products designed for real-world business challenges'
              },
              {
                icon: '🏢',
                title: 'Enterprise Ready',
                desc: 'Scalable, secure, reliable architectures for all industries'
              },
              {
                icon: '🔧',
                title: 'Customizable',
                desc: 'Built to evolve with your business needs and growth'
              },
              {
                icon: '⚡',
                title: 'High Performance',
                desc: 'Optimized for speed, efficiency, and seamless operations'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'var(--color-off-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  textAlign: 'center',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(70, 192, 191, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h4 style={{ 
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-ink)',
                  marginBottom: '0.5rem'
                }}>
                  {feature.title}
                </h4>
                <p style={{ 
                  color: 'var(--color-muted)',
                  fontSize: '0.9rem',
                  margin: 0
                }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        color: 'var(--color-white)'
      }}>
        <div className="container" style={{ 
          paddingTop: '4rem', 
          paddingBottom: '4rem',
          textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ 
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-white)',
              marginBottom: '1rem'
            }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Discover how Capco's enterprise products can drive your business forward.
            </p>
            <button 
              className="btn"
              style={{
                background: 'var(--color-white)',
                color: 'var(--color-primary-dark)',
                fontWeight: 700,
                padding: '1rem 2.5rem',
                fontSize: '0.85rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}