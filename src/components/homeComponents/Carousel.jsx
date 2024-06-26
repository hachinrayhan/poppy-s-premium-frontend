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
          src="https://img.freepik.com/free-photo/close-up-spices-powder-mix-table_23-2148285456.jpg?t=st=1719398468~exp=1719402068~hmac=7003f032967238455b8676526e578b9189edf024291a1b51a794be3a23e1fdca&w=740"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/front-view-cooked-mushrooms-with-seasonings-dark-grey-table-ripe-food-mushroom_140725-78986.jpg?t=st=1719398511~exp=1719402111~hmac=5856cd37981d41edeb4d8d61068fc8c81449412a37c5b2ba524a86a540617a48&w=740"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/herbs-spices-selection-flat-lay_155003-479.jpg?t=st=1719398541~exp=1719402141~hmac=f0ba6a2c87838400192a2eb4175ccaee07743597b507492fe6679210ef31babb&w=740"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/top-view-different-seasonings-grey-space_140725-76009.jpg?t=st=1719398605~exp=1719402205~hmac=76c92c89ae555fa51e8b29bf45c2e669c9d517dcf5b37a9bdff5cb08ed329896&w=740"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/close-up-asian-food-ingredients-arrangement_23-2148377387.jpg?t=st=1719398627~exp=1719402227~hmac=34474f1e9004c70f0be4f14899143b08f47b0c46815c49a8a2f4100a6904db6d&w=740"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/different-spices-colorful-inside-silver-spoons-brown-wooden-desk-grey-desk_179666-426.jpg?t=st=1719398956~exp=1719402556~hmac=c579f4814e6a408e2a52786160164e6962742476cfcf2f82a803d1588260bd3e&w=740"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/pasta-cherry-tomatoes-with-variety-spices-herbs_114579-66650.jpg?t=st=1719398986~exp=1719402586~hmac=d08283923a921ec19f1f11ae62a5fe525c3a758419e7f1f415cb9d299714a94e&w=740"
          alt="Burger"
          className="w-full rounded-box h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Carousel;
