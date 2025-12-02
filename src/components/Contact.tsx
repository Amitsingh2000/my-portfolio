import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7249379579",
      href: "tel:+917249379579"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "amit.pardeshi2000@gmail.com",
      href: "mailto:amit.pardeshi2000@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "amit-pardeshi26",
      href: "https://linkedin.com/in/amit-pardeshi26"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "Amitsingh2000",
      href: "https://github.com/Amitsingh2000"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Pune, Maharashtra",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out through any of the platforms below.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-xl shadow-lg p-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Get in Touch
          </h3>

          {/* Layout Grid: 2-2 + last centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* First 4 items (normal 2x2 grid) */}
            {contactInfo.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{item.label}</p>
                  <a
                    href={item.href}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Last Item Centered */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg text-blue-600">
                {contactInfo[4].icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {contactInfo[4].label}
                </p>
                <p className="text-gray-900">{contactInfo[4].value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
