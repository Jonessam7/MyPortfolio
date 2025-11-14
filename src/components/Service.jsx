import React from "react";
import { Server, Database, Shield, ChevronRight } from "lucide-react";

const Service = () => {
  const services = [
    {
      title: "Backend Development",
      description: "Building robust and scalable backend services using Spring Boot, designing REST APIs, and implementing microservices architecture.",
      icon: <Server size={32} />,
      features: [
        "REST API Design & Development",
        "Microservices Architecture",
        "Event-Driven Patterns",
        "Third-Party API Integration",
        "Docker Containerization",
        "Full-Stack Integration Support",
      ],
    },
    {
      title: "Database Design & Management",
      description: "Creating and optimizing database schemas for high-performance querying, scalability, and efficient data management.",
      icon: <Database size={32} />,
      features: [
        "MongoDB Database Design",
        "SQL Database Optimization",
        "Schema Design for Scalability",
        "Real-Time Data Processing",
        "Multi-User Data Management",
        "Query Performance Optimization",
      ],
    },
    {
      title: "Security & Authentication",
      description: "Implementing secure authentication and authorization systems to protect user data and ensure safe access control.",
      icon: <Shield size={32} />,
      features: [
        "JWT Authentication",
        "OAuth2 Implementation",
        "Spring Security Integration",
        "Role-Based Access Control",
        "OTP-Based Phone Authentication",
        "Secure API Endpoints",
      ],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white py-20" id="services">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded-full">
            Services
          </h2>
          <p className="text-xl text-gray-500 mt-6">What I can do for you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/15 transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-indigo-500 before:to-purple-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="mb-8 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <ChevronRight size={16} className="text-indigo-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;