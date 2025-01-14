import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">John Doe</h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com" className="hover:text-blue-200 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-200 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-blue-200 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a href="#about" className="animate-bounce absolute bottom-8">
            <ChevronDown size={32} />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <User className="text-blue-600" />
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with expertise in modern web technologies.
              My journey in software development started with a deep curiosity for creating
              impactful digital solutions, and I've since developed a strong foundation in
              both front-end and back-end development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in building responsive web applications using React, Node.js,
              and other cutting-edge technologies. I'm committed to writing clean,
              maintainable code and creating intuitive user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <Code2 className="text-blue-600" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <ul className="space-y-2">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Agile/Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <Briefcase className="text-blue-600" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  A full-stack e-commerce solution built with React, Node.js, and PostgreSQL.
                  Features include user authentication, product management, and payment integration.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <Github size={18} />
                    Code
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">
                  A collaborative task management application with real-time updates,
                  built using React, Socket.io, and Express.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <Github size={18} />
                    Code
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <GraduationCap className="text-blue-600" />
            Education
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600">University Name</p>
              <p className="text-gray-500">2019 - 2023</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Relevant Coursework</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Data Structures and Algorithms</li>
                <li>Web Development</li>
                <li>Database Management Systems</li>
                <li>Software Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;