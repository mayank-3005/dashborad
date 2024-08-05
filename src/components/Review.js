import React from 'react';
import user from '../assets/images/images.jpeg'

const ReviewComponent = ({ reviews }) => {
  return (
    <div className="review-container bg-slate-800">
    <div className="customer-heading-content">
        <div className="revenue-title">
          <h3 className="font-bold text-xl text-white">Customer's Feedback</h3>
        </div>
      </div>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="author">
            <img src={user} alt={review.name} className="author-image" />
            <span className="author-name text-white">{review.name}</span>
          </div>
          <div className="rating text-yellow-400">{review.rating}</div>
          <div className="description text-white">{review.description}</div>
        </div>
      ))}
    </div>
  );
};

const ReviewCustomer = () => {
  const reviews = [
    {
      image: 'https://via.placeholder.com/50',
      name: 'John Doe',
      rating: '★★★★☆',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit',
    },
    {
      image: 'https://via.placeholder.com/50',
      name: 'Jane Smith',
      rating: '★★★☆☆',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit',
    },
    {
      image: 'https://via.placeholder.com/50',
      name: 'Bob Johnson',
      rating: '★★★★★',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit',
    },
  ];

  return (
    <div>
      <ReviewComponent reviews={reviews} />
    </div>
  );
};

export default ReviewCustomer;
