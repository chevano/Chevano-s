import React from 'react';
import '../App.css';

function Catering() {
  return (
    <>
      <h1 className="heading text-center">Catering</h1>
      <section className="container_">
        <div className="card_">
          <div className="card-image_ dish-1"></div>
          <h2 className="card-heading_ text-center">Oxtail</h2>
          <h3 className="card-description_ text-center">Brown Stew Oxtail with rice and peas</h3>
          <h4 className="card-price_ text-center">$339 Meal for 10<br></br> $499  Meal for 25 <br></br>$639 Meal for 40</h4>
        </div>

        <div className="card_">
          <div className="card-image_ dish-2"></div>
          <h2 className="card-heading_ text-center">Goat</h2>
          <h3 className="card-description_ text-center">Curry Goat is best serve with our jasmine white rice</h3>
          <h4 className="card-price_ text-center">$339 Meal for 10<br></br> $499  Meal for 25 <br></br>$639 Meal for 40</h4>
        </div>

        <div className="card_">
          <div className="card-image_ dish-3"></div>
          <h2 className="card-heading_ text-center">Fry Chicken</h2>
          <h3 className="card-description_ text-center">Fry Chicken can be combined white rice, or rice and peas.</h3>
          <h4 className="card-price_ text-center">$239 Meal for 10<br></br> $399  Meal for 25 <br></br>$539 Meal for 40</h4>
        </div>

        <div className="card_">
          <div className="card-image_ dish-4"></div>
          <h2 className="card-heading_ text-center">Jerk Chicken</h2>
          <h3 className="card-description_ text-center">Jerk Chicken can be combined white rice, or rice and peas.</h3>
          <h4 className="card-price_ text-center">$239 Meal for 10<br></br> $399  Meal for 25 <br></br>$539 Meal for 40</h4>
        </div>

        <div className="card_">
          <div className="card-image_ dish-5"></div>
          <h2 className="card-heading_ text-center">Ackee & Saltfish</h2>
          <h3 className="card-description_ text-center">This dish is best serve with boil dumplins and green bananas.</h3>
          <h4 className="card-price_ text-center">$289 Meal for 10<br></br> $449  Meal for 25 <br></br>$589 Meal for 40</h4>
        </div>

        <div className="card_">
          <div className="card-image_ dish-6"></div>
          <h2 className="card-heading_ text-center">Fry Fish</h2>
          <h3 className="card-description_ text-center">Jamaican Escovitch Fried Red Snapper is best serve with boil dumplins and green bananas.</h3>
          <h4 className="card-price_ text-center">$289 Meal for 10<br></br> $449  Meal for 25 <br></br>$589 Meal for 40</h4>
        </div>
      </section>
    </>
  );
}

export default Catering;