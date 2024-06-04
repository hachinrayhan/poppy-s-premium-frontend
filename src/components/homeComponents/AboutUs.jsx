const AboutUs = () => {
  return (
    <section className="container mx-auto p-6 my-12 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          About Poppy&apos;s Premium
        </h2>
        <p className="text-gray-600 mt-2">
          Your trusted partner in bringing the finest spices and culinary
          delights to your kitchen.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Who We Are
          </h3>
          <p className="text-gray-600 mb-4">
            We specialize in producing high-quality spices and masalas, catering
            to diverse tastes worldwide. Our products include:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Spices:</strong> Chilli Powder, Turmeric Powder, Coriander
              Powder, Cumin Powder
            </li>
            <li>
              <strong>Masalas:</strong> Chicken Roast Masala, Mejbani Beef
              Masala, Kalabhuna Masala, Biriani Masala, Kacchi Biriyani Masala,
              Tehari Masala, Borhani Masala
            </li>
            <li>
              <strong>Teas:</strong> Regular Tea, Green Tea
            </li>
            <li>
              <strong>Others:</strong> Lascha, Pure Mustard Oil
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Commitment
          </h3>
          <p className="text-gray-600 mb-4">
            Quality and authenticity are at the heart of Poppy&apos;s Premium.
            We source the finest ingredients to ensure every product meets our
            high standards. Our spices are carefully blended to preserve their
            natural flavors and aromas.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Premium Quality:</strong> Superior taste and freshness
              from the best ingredients.
            </li>
            <li>
              <strong>Authentic Flavors:</strong> Traditional flavors crafted to
              enhance your culinary creations.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> Dedicated to providing
              exceptional customer service.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
        <p className="text-gray-600">
          We believe great food brings people together. Whether you are a home
          cook or a professional chef, Poppy&apos;s Premium is here to inspire
          your culinary adventures and make every dish a masterpiece. Taste the
          difference with Poppy&apos;s Premium and discover why we are the
          preferred choice for spice lovers everywhere.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
