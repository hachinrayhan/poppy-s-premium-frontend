import { useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".carousel-item");
    let currentItem = 0;
    const itemInterval = 3000; // Change item every 3 seconds

    const nextItem = () => {
      items[currentItem].classList.remove("active");
      currentItem = (currentItem + 1) % items.length;
      items[currentItem].classList.add("active");
    };

    const interval = setInterval(nextItem, itemInterval);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="carousel flex justify-center items-center mb-10">
      <div className="carousel-item active">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Carousel;
