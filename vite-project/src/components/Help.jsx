

const Help = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Help & Support</h1>

      <p className="text-gray-700 mb-4">
        We're here to help you with all your questions related to orders, payments, prescriptions, delivery, and more. Below are the most common help topics.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Frequently Asked Questions</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
        <li><strong>How can I place an order?</strong> — Just search your medicine, add to cart, and checkout using your preferred payment method.</li>
        <li><strong>Do I need a prescription?</strong> — Yes, for prescription-only medicines, you'll be asked to upload a valid prescription.</li>
        <li><strong>How long does delivery take?</strong> — Usually 2–5 working days depending on your location.</li>
        <li><strong>Can I track my order?</strong> — Yes, real-time order tracking is available in your account dashboard.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Customer Support</h2>
      <p className="text-gray-700 mb-1">📞 Phone: +91 98765 43210</p>
      <p className="text-gray-700 mb-1">📧 Email: support@medicareplus.com</p>
      <p className="text-gray-700">⏰ Timings: 9 AM – 9 PM (Mon–Sat)</p>

      <p className="text-gray-700 mt-6">
        If your issue isn't listed here, feel free to contact us directly. We're happy to assist you.
      </p>
    </div>
  );
};

export default Help;

