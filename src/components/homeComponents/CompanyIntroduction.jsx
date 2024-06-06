const CompanyIntroduction = () => {
  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Company Introduction
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2a10 10 0 0110 10v1a3 3 0 01-1 2.83v1.84a2 2 0 01-2 2H5a2 2 0 01-2-2v-1.84A3 3 0 012 13v-1A10 10 0 0112 2z"
            />
          </svg>
          <h3 className="text-xl font-bold mb-2">Established Year</h3>
          <p className="text-gray-700">
            Poppy&apos;s Premium was established in 1990, delivering quality
            products for over 30 years.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A7.974 7.974 0 0112 16c1.885 0 3.627.653 5.021 1.738M12 16v6m0-6c-1.72 0-3.288-.422-4.629-1.151M12 2a10 10 0 00-9.608 12.73c.88-.68 2.056-1.109 3.608-1.109C7.813 13.621 10.686 14 13 14s5.187-.379 7-1.38c1.552 0 2.728.429 3.608 1.109A10 10 0 0012 2z"
            />
          </svg>
          <h3 className="text-xl font-bold mb-2">Our Reputation</h3>
          <p className="text-gray-700">
            Known for our premium quality products and exceptional customer
            service.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a1 1 0 00-1-1H5a1 1 0 00-1 1v7M16 18v2a1 1 0 001 1h2a1 1 0 001-1v-2m-1-6h.01M4 12h16M4 12H3M4 12h-.01M16 18h1m-1-4h2M5 12H4M20 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1h14a1 1 0 011 1v7z"
            />
          </svg>
          <h3 className="text-xl font-bold mb-2">Customer Reviews</h3>
          <p className="text-gray-700">
            Thousands of satisfied customers worldwide. Check out our reviews on
            popular platforms.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.293 12.293a1 1 0 011.414 0L21 14.586V6a2 2 0 00-2-2h-2.586l1.293 1.293a1 1 0 010 1.414zM15 8V5H6a2 2 0 00-2 2v5h1a1 1 0 011 1v1h1v-1a1 1 0 011-1h1a1 1 0 011 1v1h1v-1a1 1 0 011-1h1a1 1 0 011 1v1h1v-1a1 1 0 011-1h1a1 1 0 011 1h1V6h-2.586L15 8zM7 8H5V7a1 1 0 011-1h1v2zm4 0H9V5h2v3zm4 0h-2V5h2v3zm4 0h-2V5h2v3zM7 14v1H6v-1h1zm4 0v1h-2v-1h2zm4 0v1h-2v-1h2zm4 0v1h-2v-1h2z"
            />
          </svg>
          <h3 className="text-xl font-bold mb-2">Global Reach</h3>
          <p className="text-gray-700">
            Serving customers worldwide with our extensive distribution network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntroduction;
