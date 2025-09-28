

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 border-t">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-2">MediCare<span className="text-green-500">+</span></h2>
          <p className="text-sm">Your trusted online pharmacy. Delivering health at your doorstep.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">📍 123, Health Street, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📧 support@medicareplus.com</p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
        © 2025 MediCare+. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
