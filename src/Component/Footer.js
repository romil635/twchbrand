import React from 'react'

function Footer() {
  return (
    <div>

{/* <!-- Footer Section --> */}
<footer className="bg-black py-10 text-gray-400">
  <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
    {/* Column 1 */}
    <div>
      <h3 className="text-xl font-bold text-teal-400 mb-4">About Us</h3>
      <p className="text-sm">
        We are committed to delivering cutting-edge technology solutions to empower businesses and individuals worldwide.
      </p>
    </div>
    
    {/* Column 2 */}
    <div>
      <h3 className="text-xl font-bold text-teal-400 mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#features" className="hover:text-teal-300 transition">Features</a></li>
        <li><a href="#pricing" className="hover:text-teal-300 transition">Pricing</a></li>
        <li><a href="#contact" className="hover:text-teal-300 transition">Contact Us</a></li>
        <li><a href="#about" className="hover:text-teal-300 transition">About Us</a></li>
      </ul>
    </div>
    
    {/* Column 3 */}
    <div>
      <h3 className="text-xl font-bold text-teal-400 mb-4">Follow Us</h3>
      <div className="flex justify-center md:justify-start space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition">
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition">
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="mt-8 border-t border-gray-600 pt-6 text-center">
    <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
  </div>
</footer>


    </div>
  )
}

export default Footer
