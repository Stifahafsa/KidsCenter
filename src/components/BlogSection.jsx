import "./BlogSection.css";
import blog1 from '../assets/BlogSectionImg/blog-02.jpg';
import blog2 from '../assets/BlogSectionImg/blog-03.jpg';
import blog3 from '../assets/BlogSectionImg/blog-04.jpg';
export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>LATEST NEWS AND BLOG</h2>
        <p>
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec
          tetuer adipis elit, aliquam eget nibh etlibura.
        </p>
        <div className="w-24 h-0.5 mx-auto bg-[#90C088]">
          </div>
      </div>

      <div className="blog-grid">
        <article className="blog-card">
          <div className="blog-image">
            <img
              src={blog1}
              alt="Child in superhero cape"
              className="card-img"
            />
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span className="date">15 Sep 2016</span>
              <div className="engagement">
                <span>❤ 17</span>
                <span>💬 04</span>
              </div>
            </div>
            <h3>How kids think about earth</h3>
            <p>
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor, nisi elit consequat ipsum.
            </p>
          </div>
        </article>

        <article className="blog-card">
          <div className="blog-image">
            <img
              src={blog2}
              alt="Children in classroom"
              className="card-img"
            />
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span className="date">15 Sep 2016</span>
              <div className="engagement">
                <span>❤ 17</span>
                <span>💬 04</span>
              </div>
            </div>
            <h3>How kids think about earth</h3>
            <p>
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor, nisi elit consequat ipsum.
            </p>
          </div>
        </article>

        <article className="blog-card">
          <div className="blog-image">
            <img
              src={blog3}
              alt="Children playing outside"
              className="card-img"
            />
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span className="date">15 Sep 2016</span>
              <div className="engagement">
                <span>❤ 17</span>
                <span>💬 04</span>
              </div>
            </div>
            <h3>Standard Post With Preview Image</h3>
            <p>
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor, nisi elit consequat ipsum.
            </p>
          </div>
        </article>
      </div>

      <div className="blog-navigation">
        <button className="nav-dot active"></button>
        <button className="nav-dot"></button>
        <button className="nav-dot"></button>
        <button className="nav-dot"></button>
      </div>
    </section>
  );
}

