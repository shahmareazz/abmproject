import React from "react";
import "./Section5.css";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus eligendi asperiores consequuntur labore aperiam ipsa dignissimos, sint numquam ullam officiis provident recusandae deserunt delectus aspernatur odio laudantium. Commodi, ipsum?A fantastic bit of feedback",
    name: "William",
    description: "Description",
    image: "https://static.vecteezy.com/system/resources/thumbnails/032/036/902/small_2x/a-smiling-middle-aged-indian-employee-in-the-office-ai-generated-photo.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus eligendi asperiores consequuntur labore aperiam ipsa dignissimos, sint numquam ullam officiis provident recusandae deserunt delectus aspernatur odio laudantium. Commodi, ipsum?A fantastic bit of feedback",
    name: "Olivia",
    description: "Description",
    image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus eligendi asperiores consequuntur labore aperiam ipsa dignissimos, sint numquam ullam officiis provident recusandae deserunt delectus aspernatur odio laudantium. Commodi, ipsum?A fantastic bit of feedback",
    name: "George",
    description: "Description",
    image: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus eligendi asperiores consequuntur labore aperiam ipsa dignissimos, sint numquam ullam officiis provident recusandae deserunt delectus aspernatur odio laudantium. Commodi, ipsum?A fantastic bit of feedback",
    name: "John",
    description: "Description",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },{
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus eligendi asperiores consequuntur labore aperiam ipsa dignissimos, sint numquam ullam officiis provident recusandae deserunt delectus aspernatur odio laudantium. Commodi, ipsum?A fantastic bit of feedback",
    name: "Teena",
    description: "Description",
    image: "https://images.herzindagi.info/her-zindagi-english/images/2024/11/22/article/image/30+-Best-Attitude-Quotes-For-Girls-1732277107399.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus eligendi asperiores consequuntur labore aperiam ipsa dignissimos, sint numquam ullam officiis provident recusandae deserunt delectus aspernatur odio laudantium. Commodi, ipsum?A fantastic bit of feedback",
    name: "Thomas",
    description: "Description",
    image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
  },
];

const Section5 = () => {
  return (
    <div className="testimonials-container">
      <h2 className="section-heading" style={{color: "#5d6d7e", fontWeight: "bold",fontSize:"40px"}}>TESTIMONIALS</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-footer">
              <img src={testimonial.image} alt="Profile" className="testimonial-img" />
              <div>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-description">{testimonial.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
