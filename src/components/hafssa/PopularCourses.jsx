import "./PopularCourses.css";
import last1 from '../../assets/PopularCoursesIMG/latest-course-01.jpg'
import last2 from '../../assets/PopularCoursesIMG/latest-course-02.jpg'
import last3 from '../../assets/PopularCoursesIMG/latest-course-03.jpg'
import last4 from '../../assets/PopularCoursesIMG/latest-course-author (1).png'
import last5 from '../../assets/PopularCoursesIMG/latest-course-author (1).png'
const courses = [
  {
    id: 1,
    title: "Ask For What You Want",
    category: "Technology",
    price: 20,
    image: last1,
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
    instructor: {
      name: "Jhon Smith",
      title: "Phd in Software dev.",
      avatar: last4,
    },
  },
  {
    id: 2,
    title: "Little Singer Courses",
    category: "Technology",
    price: 20,
    image: last2,
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
    instructor: {
      name: "Stephem Johns",
      title: "Phd in Software dev.",
      avatar: last4,
    },
  },
  {
    id: 3,
    title: "DESIGNING WITH TYPE",
    category: "Artificial",
    price: 20,
    image: last3,
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
    instructor: {
      name: "James Stewart",
      title: "Phd in Software dev.",
      avatar: last5,
    },
  },
];

const categories = ["ALL", "NEW COURSES", "SPECIAL COURSES", "FAMOUS COURSES"];

export default function PopularCourses() {
  return (
    <div className="popular-courses">
      <div className="header">
        <h1>POPULAR COURSES</h1>
        <p>
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
          amet, consectetuer adipis elit, aliquam eget nibh etlibura.
        </p>
        <div className="divider"></div>
      </div>

      <div className="filters">
        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`category-button ${index === 0 ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for course here" />
          <button>Search</button>
        </div>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="card-image">
              <img src={course.image} alt={course.title} />
              <span
                className={`badge ${
                  course.category === "Technology" ? "technology" : "artificial"
                }`}
              >
                {course.category}
              </span>
              <div className="price">${course.price}</div>
            </div>
            <div className="card-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <a href="#">Read more</a>
              <div className="instructor">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                />
                <div>
                  <h4>{course.instructor.name}</h4>
                  <p>{course.instructor.title}</p>
                </div>
              </div>
              <button className="apply-button">Apply</button>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more">
        <button>LOAD MORE</button>
      </div>
    </div>
  );
}
