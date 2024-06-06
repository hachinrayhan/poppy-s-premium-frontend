const ContactUs = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-center mb-6">
          If you have any questions, feel free to reach out to us. We are here
          to help!
        </p>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Our Office</h3>
          <p>
            <strong>Address:</strong> 1234, Example Street, Dhaka, Bangladesh
          </p>
          <p>
            <strong>Phone:</strong> +880 1234-567890
          </p>
          <p>
            <strong>Email:</strong> info@example.com
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Office Hours</h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 3:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="input input-bordered w-full p-2 mt-1"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="input input-bordered w-full p-2 mt-1"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="textarea textarea-bordered w-full p-2 mt-1"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-6 py-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
