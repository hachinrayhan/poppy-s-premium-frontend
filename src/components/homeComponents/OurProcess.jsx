const OurProcess = () => {
  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-4 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h18M3 8h18M3 13h18M5 17h14M5 21h14M3 17v4M3 3v8M21 3v8M21 13v8"
            />
          </svg>
          <h3 className="text-xl font-bold mb-2">Place Order</h3>
          <p className="text-gray-700">
            Select your desired products and place your order easily through our
            website.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-4 text-blue-500"
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
          <h3 className="text-xl font-bold mb-2">Processing</h3>
          <p className="text-gray-700">
            Once your order is placed, we start processing it immediately to
            ensure quick delivery.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-4 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13H3m18 0v8a1 1 0 01-1 1h-5a1 1 0 01-1-1v-6H8v6a1 1 0 01-1 1H2a1 1 0 01-1-1v-8m18 0V6a1 1 0 00-1-1h-4a1 1 0 00-1 1v7m5 0h-1m-2 0h-2m-2 0h-2m-2 0h-2m-2 0H6m-2 0H3m-1 0H2"
            />
          </svg>
          <h3 className="text-xl font-bold mb-2">Delivery</h3>
          <p className="text-gray-700">
            Your order is shipped and delivered to your doorstep with care and
            on time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
