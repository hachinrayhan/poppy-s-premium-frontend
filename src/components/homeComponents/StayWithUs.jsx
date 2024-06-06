const StayWithUs = () => {
  return (
    <div className="container mx-auto p-4 my-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Stay With Us</h2>
      <p className="text-center mb-6">
        Subscribe to our newsletter for the latest updates, special offers, and
        exclusive content.
      </p>
      <div className="max-w-xl mx-auto">
        <form className="flex flex-col sm:flex-row items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered flex-grow p-2 mb-4 sm:mb-0 sm:mr-4"
          />
          <button className="btn btn-primary px-6 py-2">Subscribe</button>
        </form>
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-600 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35C.596 0 0 .592 0 1.325v21.351C0 23.406.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.314h3.588l-.467 3.622h-3.12V24h6.118c.729 0 1.324-.595 1.324-1.324V1.325C24 .592 23.405 0 22.675 0z" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-600 hover:text-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557a9.832 9.832 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.865 9.865 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149 4.922 4.922 0 003.15 9.722a4.902 4.902 0 01-2.228-.616c-.054 2.28 1.582 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.926 4.926 0 004.6 3.419A9.869 9.869 0 010 21.543 13.94 13.94 0 007.548 24c9.142 0 14.307-7.721 13.995-14.646a9.935 9.935 0 002.457-2.533z" />
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-600 hover:text-pink-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.18.054 1.792.248 2.215.415a4.409 4.409 0 011.594 1.024 4.409 4.409 0 011.024 1.594c.167.423.36 1.035.415 2.215.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.18-.248 1.792-.415 2.215a4.409 4.409 0 01-1.024 1.594 4.409 4.409 0 01-1.594 1.024c-.423.167-1.035.36-2.215.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.18-.054-1.792-.248-2.215-.415a4.409 4.409 0 01-1.594-1.024 4.409 4.409 0 01-1.024-1.594c-.167-.423-.36-1.035-.415-2.215-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.18.248-1.792.415-2.215a4.409 4.409 0 011.024-1.594 4.409 4.409 0 011.594-1.024c.423-.167 1.035-.36 2.215-.415 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.015-4.947.072-1.28.058-2.153.25-2.903.54a6.433 6.433 0 00-2.348 1.52 6.433 6.433 0 00-1.52 2.348c-.29.75-.482 1.623-.54 2.903-.057 1.28-.072 1.688-.072 4.947s.015 3.667.072 4.947c.058 1.28.25 2.153.54 2.903a6.433 6.433 0 001.52 2.348 6.433 6.433 0 002.348 1.52c.75.29 1.623.482 2.903.54 1.28.057 1.688.072 4.947.072s3.667-.015 4.947-.072c1.28-.058 2.153-.25 2.903-.54a6.433 6.433 0 002.348-1.52 6.433 6.433 0 001.52-2.348c.29-.75.482-1.623.54-2.903.057-1.28.072-1.688.072-4.947s-.015-3.667-.072-4.947c-.058-1.28-.25-2.153-.54-2.903a6.433 6.433 0 00-1.52-2.348 6.433 6.433 0 00-2.348-1.52c-.75-.29-1.623-.482-2.903-.54-1.28-.057-1.688-.072-4.947-.072zM12 5.838a6.163 6.163 0 100 12.325 6.163 6.163 0 000-12.325zm0 10.163a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default StayWithUs;
