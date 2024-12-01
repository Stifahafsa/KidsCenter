import { Share2, Phone, Mail } from 'lucide-react'
import './TeacherCard.css';
import Teacher1 from '../assets/TeacherIMG/best-teacher-01.jpg';
import Teacher2 from '../assets/TeacherIMG/best-teacher-02.jpg';
import Teacher3 from '../assets/TeacherIMG/best-teacher-03.jpg';
import Teacher4 from '../assets/TeacherIMG/best-teacher-04.jpg';
const teachers = [
  {
    id: 1,
    name: "Janifer Steel",
    position: "Sr. Teacher",
    description: "Lorem ipsum doloAr sit amet, conset adipiscing elitsed do eius sit amet",
    phone: "+124 456 7858",
    email: "janifer.kidscenter.com",
    image: Teacher1,
    info: ["5 Years Experience", "Art Teacher", "Scholarship Facility"]
  },
  {
    id: 2,
    name: "Janifer Steel",
    position: "Sr. Teacher",
    description: "Lorem ipsum doloAr sit amet, conset adipiscing elitsed do eius sit amet",
    phone: "+124 456 7858",
    email: "janifer.kidscenter.com",
    image: Teacher2,
    info: ["7 Years Experience", "Music Teacher", "Scholarship Facility"]
  },
  {
    id: 3,
    name: "Sara Loreen",
    position: "Sr. Teacher",
    description: "Lorem ipsum doloAr sit amet, conset adipiscing elitsed do eius sit amet",
    phone: "+124 456 7858",
    email: "janifer.kidscenter.com",
    image: Teacher3,
    info: ["6 Years Experience", "Math Teacher", "Scholarship Facility"]
  },
  {
    id: 4,
    name: "Steel Janifer",
    position: "Sr. Teacher",
    description: "Lorem ipsum doloAr sit amet, conset adipiscing elitsed do eius sit amet",
    phone: "+124 456 7858",
    email: "janifer.kidscenter.com",
    image: Teacher4,
    info: ["8 Years Experience", "Science Teacher", "Scholarship Facility"]
  }
]

export default function TeachersSection() {
  return (
    <section className="teachers-section">
      <div className="section-header">
        <h2>MEET OUR BEST TEACHER</h2>
        <p>
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec
          tetuer adipis elit, aliquam eget nibh etlibura.
        </p>
        {/* <div className="wave-decoration">
          <svg width="120" height="20" viewBox="0 0 120 20">
            <path
              d="M0 10 Q30 5, 60 10 T120 10"
              fill="none"
              stroke="#86c540"
              strokeWidth="2"
            />
            <path
              d="M0 10 Q30 15, 60 10 T120 10"
              fill="none"
              stroke="#86c540"
              strokeWidth="2"
            />
          </svg>
        </div> */}
        <div className="w-24 h-0.5 mx-auto my-4 bg-[#90C088]">
        </div>
      </div>
      <div className="teachers-grid">
        {teachers.map(teacher => (
          <div key={teacher.id} className="teacher-card">
            <div className="image-container">
              <img src={teacher.image} alt={teacher.name} />
              <button className="share-button" aria-label="Share">
                <Share2 size={20} />
              </button>
            </div>
            <div className="teacher-info">
              <span className="position">{teacher.position}</span>
              <h3 className="name">{teacher.name}</h3>
              <p className="description">{teacher.description}</p>
              {/* <ul className="teacher-details">
                {teacher.info.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul> */}
              <div className="contact-info">
                <div className="phone">
                  <Phone size={16} />
                  {teacher.phone}
                </div>
                <div className="email">
                  <Mail size={16} />
                  {teacher.email}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

