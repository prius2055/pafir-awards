import React from 'react';
import './Category.css';

const Category = () => {
  return (
    <div className="category">
      <h2>Award Categories</h2>
      <hr />
      <div className="category-grp">
        <div className="category-card">
          <h2>Category A (State Government)</h2>
          <p>
            Learn the use programming languages such as HTML, CSS, and
            JavaScript to create and style web pages, add interactivity and
            functionality, and ensure a seamless user experience. Build website
            and applications that are visually appealing, user-friendly, and
            accessible.
          </p>
        </div>
        <div className="category-card">
          <h2>Category C (Legislature)</h2>
          <p>
            Learn Python, Ruby, Java, and PHP to develop server-side code, APIs,
            and databases. Create and maintain the infrastructure and systems
            that handle data processing, storage, and retrieval, as well as
            handling requests from the frontend and delivering responses.
          </p>
        </div>
        <div className="category-card">
          <h2>Category D (Agencies)</h2>
          <p>
            Learn the process of conceptualizing, creating, and refining
            physical or digital product to meet the needs and expectations of
            its intended users. Learn figma
          </p>
        </div>
        <div className="category-card">
          <h2>Category E (Professionals)</h2>
          <p>
            Learn and master tools and techniques to analyze data, including
            data mining, machine learning, and predictive analytics. Learn to
            build data sytems with python
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
