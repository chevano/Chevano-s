import React from 'react';
import '../App.css';

function About() {
  return (
    <>
      <section>
        <div className="position">
          <h1 className="heading text-center">About</h1>
          <div className="right">
            <img 
              src="https://cdn.pixabay.com/photo/2020/08/23/06/54/cooking-5510047_1280.png"
              className="chef-pic">
            </img>
          </div>
          <div className="left">
            <p>
              Welcome to our restaurant, where we take pride in serving delicious
              food that is both satisfying and memorable. 
              We believe that food is more than just fuel for the body - 
              it is a way to connect with others, to experience new flavors 
              and cultures, and to nourish the soul.
            </p>

            <p>
              Our chefs are passionate about creating dishes that are not only visually 
              stunning, but also bursting with flavor. We source only the freshest, 
              highest-quality ingredients and use traditional cooking techniques 
              to bring out the best in every dish.
            </p>

            <p>
              Our menu is carefully crafted to showcase the best of both local and 
              international cuisine. Whether you're in the mood for a classic dish 
              or something a little more adventurous, we have something to please 
              every palate. We offer vegetarian, vegan, and gluten-free options, 
              so everyone can enjoy our food.
            </p>

            <p>
              At our restaurant, we believe that dining out should be a relaxing
              and enjoyable experience. Our friendly and attentive staff will 
              ensure that you feel right at home from the moment you walk through 
              our doors. Whether you're celebrating a special occasion or just 
              looking for a casual night out, we are here to make your dining 
              experience one to remember.
            </p>

            <p>
              We also offer private dining and catering services for events of all sizes. 
              Whether you're planning a corporate lunch or a wedding reception, 
              our team will work with you to create a custom menu that meets your needs 
              and exceeds your expectations.
            </p>

            <p>
              Thank you for considering our restaurant for your next dining experience. 
              We look forward to welcoming you soon!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;