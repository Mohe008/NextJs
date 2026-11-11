import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-gray-400 py-12'>
      <div className="max-w-6xl mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className='text-gray-400 text-justify'>Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.</p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li><a className="hover:text-white transition-colors duration-300" href="/">Home</a></li>
            <li><a className="hover:text-white transition-colors duration-300" href="/about">About</a></li>
            <li><a className="hover:text-white transition-colors duration-300" href="/courses">Courses</a></li>
            <li><a className="hover:text-white transition-colors duration-300" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <ul>
            <li><a className="hover:text-white transition-colors duration-300" href="https://facebook.com">Facebook</a></li>
            <li><a className="hover:text-white transition-colors duration-300" href="https://twitter.com">Twitter</a></li>
            <li><a className="hover:text-white transition-colors duration-300" href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>123 Music Street, Melody City</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div>
        <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer