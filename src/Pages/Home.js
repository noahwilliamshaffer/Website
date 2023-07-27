import React from "react";

const Home = () => {
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "266px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">Noah Shaffer</b>
                          <b className="is-hidden">Designer</b>
                          <b className="is-visible">Developer</b>
                        </span>
                      </h1>
                      <div className="about-social-icon text-center">
                        <ul className="about-social">
                          <li className="wow fadeIn" data-wow-delay=".4s">
                            <a
                              href="https://www.linkedin.com/in/noah-shaffer-5182841b4/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".2s">
                            <a
                              href="https://github.com/noahwilliamshaffer?tab=repositories"
                              target="newtab"
                            >
                              <i
                                className="fa fa-github"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".6s">
                            <a
                              href="https://www.instagram.com/noahwilliamshaffer/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".8s">
                            <a
                              href="https://twitter.com/noahwilliamshaffer"
                              target="newtab"
                            >
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay="1s">
                            <a
                              href="https://dev.to/noahwilliamshaffer"
                              target="newtab"
                            >
                              <i className="fa fa-book" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>What I do</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        At present time I'm working on a multi-role, as a Web
                        Developer I design and create various websites. And as
                        UI/UX Designer I create many designs for Web
                        Applications and Mobile applications. I create the
                        beauty of the site. I'm responsible for the site's
                        technical aspects, such as its performance and capacity,
                        which are measures of a website's speed and how much
                        traffic the site can handle. In addition, I also create
                        content for the site.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <i
                        className="fa fa-pencil-square-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Working Hard</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Always believe in hard-work in my profession</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <i
                        className="fa fa-file-image-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>UI/UX Design</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Love to do UI/UX design for new product</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <i
                        className="fa fa-globe love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Web Design</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Passionate about Web Design from start</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".4s">
                      <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                      <h3>Web Development</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Created all types of modern web development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



       
{/* <!-- ================================ Picture of me  =============================== --> */}
            <div className="about-back"></div>
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                    <div className="about-image">
                      <img
                        src="assets/img/about-image.jpg"
                        alt="Sanajit-jana"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>Hello! This is Noah Shaffer</h3>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        I am a web developer from Boca Grande, Florida. I enjoy
                        building everything from small business sites to rich
                        interactive web apps. if you are a business seeking a
                        web presence or an employer looking to hire, you can get
                        in touch with me{" "}
                        <a className="underline2" href="#contact">
                          {" "}
                          here.
                        </a>{" "}
                        I design and build digital products with simple and
                        beautiful code. I specialize in custom web theme
                        development and love what I do.
                        <br />
                        <br />
                        Throughout my academic journey and team-based projects, I've discovered that I possess a natural affinity for leadership and team collaboration. 
                        My ability to coordinate efforts, set objectives, and facilitate open, effective communication within the team has consistently steered us towards success. 
                        Beyond the project tasks, I've made it a priority to foster a supportive and engaging team culture, which I believe is integral to high performance. 
                        The result has been more than just successful projects; it has led to the cultivation of lasting friendships. After each project, I've found myself not just 
                        with a set of accomplished objectives, but a group of close friends. This testament to my interpersonal skills, I believe, is just as important as my technical acumen. 
                        I'm proud to bring this unique blend of leadership, communication, and team-building skills to every project and professional undertaking.
                      </p>
                      <a
                        className="about-link-1"
                        href="assets/cv/noah-shaffer-profile.pdf"
                        target="_blank"
                      >
                        See Resume
                      </a>
                      <a className="about-link-2" href="#contact">
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-counter text-center">
              <div className="counter">
                <div className="container">
                  <div className="row wow fadeIn">
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-pencil-square-o stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">0021</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Web Design Completed</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-crop stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">0040</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>UI/UX Design Done</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-bolt stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">0015</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Website Created</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-coffee stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">0085</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Scoops of Pre Workout Taken</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ Skill =============================== --> */}

        <div id="skill">
          <div className="skill-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>My Skill</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      I value teamwork, leadership, and communication.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn">
                <div className="col-md-6">
                  <div className="skill-details text-left">
                    <p>
                      As a Computer Science graduate from Florida State University, 
                   I possess a broad spectrum of technical skills and a keen ability 
                   to lead and collaborate effectively. My technical expertise spans 
                   numerous programming languages, tools, and frameworks, preparing me 
                   well for diverse roles in software engineering, while my practical experience 
                   in creating and managing a secure server for a web application underlines my 
                   competency in cybersecurity. Beyond these technical abilities, I've consistently 
                   demonstrated leadership and exceptional interpersonal skills, organizing and guiding 
                   teams to success while fostering lasting relationships. This unique blend of technical acumen, 
                   leadership, and team-building skills position me as a valuable asset to any team in the tech industry, 
                   ready to contribute significantly and drive impactful advancements in technology.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-details">
                    <div className="content">
                      <div className="col">
                        <ul id="skill-main">
                          <li>
                            <h3>HTML / CSS - 97%</h3>
                          </li>
                          <li>
                            <h3>UI / UX - 92%</h3>
                          </li>
                          <li>
                            <h3>React JS - 30%</h3>
                          </li>
                          <li>
                            <h3>PHP (Laravel) - 93%</h3>
                          </li>
                          <li>
                            <h3>MySQL - 95%</h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ RESUME =============================== --> */}

        <div id="resume">
          <div className="resume-content">
            <div className="resume-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Educational Story</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I like to code things from scratch, and enjoy bringing
                        ideas to life in the browser.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".2s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-home resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>School</h3>
                        <h2>2015-2019</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Completed my school life from Admiral Farragut Academy
                          (H.S.), St. Pete, Florida, United States.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".3s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Graduation</h3>
                        <h2>2019-2023</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Achieved my B.A. in Computer Science and Economics (3.8 GPA) from{" "}
                          <a
                            href="https://www.fsu.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            FSU (Florida State University)
                          </a>
                          , Tallahasse, Florida, United States.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".4s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Training &amp; Skill</h3>
                        <h2>2024-2024</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Seeking to pursue Full-Stack Development at{" "}
                          <a
                            href="https://www.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Apple
                          </a>
                          , Cupertino, California.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row main-row wow fadeIn">
                  <div className="col-md-12">
                    <div className="main-title text-center">
                      <h3>Working Experience</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I don’t like to define myself by the work I’ve done. I
                        define myself by the work I want to do.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row">
                  <div className="col-md-6 col-sm-12">
                    <div className="exp-details" data-wow-delay=".2s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>
                          <a
                            href="https://stpeteair.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#4d4d4d" }}
                          >
                            Private Pilot
                          </a>
                        </h3>
                        <h4>St. Pete Air</h4>
                        <h2>2017-2019</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I Aquired my private pilots liscence through Admiral Farragut Acedemy and flew at St. Pete Air.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="exp-details" data-wow-delay=".3s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>
                          <a
                            href="https://farragut.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#4d4d4d" }}
                          >
                            Admiral Farragut Acedemy
                          </a>
                        </h3>
                        <h4>Naval ROTC</h4>
                        <h2>2017-2019</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I attended a boarding naval military Acedemy where I carried out many tasks akin to what would be expected by the Navy.
                          &amp; Navy Ship Certification
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4 col-sm-4">
                    <div className="exp-details" data-wow-delay=".4s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-cogs exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Supreme Company</h3>
                        <h4>Designer &amp; Developer</h4>
                        <h2>2013-2016</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ WORK =============================== --> */}

        {/* <div id="work">
          <div className="work-content">
            <div className="work-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Work Portfolio</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Here are a few design projects I've worked on recently.
                        Want to see more?{" "}
                        <a className="underline2" href="#contact">
                          contact me.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="gallery" style={{ paddingTop: "80px" }}>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <div className="gallery-item">
                    <img
                      className="gallery-image"
                      src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                      alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                    />
                  </div>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop"
                        alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop"
                        alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop"
                        alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                        alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                        alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Service List</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I always want to make things that make a difference.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/design-development.jpg"
                          alt="design-development"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-edit service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Design + Development</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Clean, modern designs - optimized for performance,
                          search engines, and converting users to customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/e-commarce.jpg"
                          alt="e-commarce"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-cart-plus exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>eCommerce</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Integration of eCommerce platforms, payment gateways,
                          custom product templates, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/analytics.jpg"
                          alt="analytics"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-tachometer service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Analytics</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Get insights into who is browsing your site so that
                          you can make smarter business decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/mobile-friendly.jpg"
                          alt="mobile-friendly"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-desktop exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Mobile-friendly</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          A responsive design makes your website accessible to
                          all users, regardless of their device.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/website-audit.jpg"
                          alt="website-audit"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-search exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Website Rank</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Looking to improve your page performance, SEO, or user
                          experience? Request a free site audit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/content-management.jpg"
                          alt="content-management"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-file exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Content Management</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Custom theme and plugin development. Easily update
                          site content with knowledge of powerful code.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


 {/* <!-- ================================ BLOG ========================== --> */}

 <div id="blog">
          <div className="blog-content">
            <div className="blog-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>My Portofio</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Projects that showcase my backend developement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details wow fadeIn text-left">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a
                          /*href="https://github.com/noahwilliamshaffer?tab=repositories"*/
                          /*href="https://dev.to/sanajitjana/what-is-hooks-in-react-js-41l2"*/
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="assets/img/blog/blog1.png"
                            alt="React hooks were introduced in version 16.8"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          
                          <a
                           /*href="https://github.com/noahwilliamshaffer/Server"*/
                            /*href="https://dev.to/sanajitjana/what-is-hooks-in-react-js-41l2"*/
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
      
                            <h3>
                              <strong>
                                Python server 
                              </strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                          A python server implemented with nginix, flask, gunicorn, mysql, authO, html, and javascript.
                          </p>
                          <a
                            /*href="https://github.com/noahwilliamshaffer/Fitness-App-in-swift/tree/main/Project-Group-2-main"*/
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            View Project
                          </a>
                        </div>
                        
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        
                        <a
                          /* href="https://github.com/noahwilliamshaffer/Entire-Operating-System-/tree/main/Project3-main"*/
                          /*href="https://dev.to/sanajitjana/the-importance-of-ui-ux-software-engineering-1n0n"*/
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="assets/img/blog/blog2.png"
                            alt="Python Flask Nginix java script and mysql Web Server"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                          href="https://github.com/noahwilliamshaffer/Fitness-App-in-swift/tree/main/Project-Group-2-main"
                            /*href="https://dev.to/sanajitjana/the-importance-of-ui-ux-software-engineering-1n0n"*/
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <h3>
                              <strong>
                                Entire linux operating system 
                              </strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            Entire Linux opertating system implemented in C programming language.
                          </p>
                          <a
                            href="https://github.com/noahwilliamshaffer/Entire-Operating-System-/tree/main/Project3-main"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a

                          /*href="https://github.com/noahwilliamshaffer/Fitness-App-in-swift/tree/main/Project-Group-2-main"*/
                          /*href="https://dev.to/sanajitjana/form-example-in-laravel-8-45oc"*/
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="assets/img/blog/blog3.png"
                            alt="blog-img"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                              href="https://github.com/noahwilliamshaffer/Fitness-App-in-swift/tree/main/Project-Group-2-main"
                            /*href="https://dev.to/sanajitjana/form-example-in-laravel-8-45oc"*/
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <h3>
                              <strong>Fitness App </strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            Fitness app implemented in swift.
                          </p>
                          <a
                            href="https://github.com/noahwilliamshaffer/Fitness-App-in-swift/tree/main/Project-Group-2-main"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            View Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ textAlign: "center" }}>
                      <a
                        href="https://github.com/noahwilliamshaffer?tab=repositories"
                        target="newtab"
                        className="btn btn-warning"
                        style={{
                          width: "50%",
                          fontSize: "16px",
                          backgroundColor: "#efd236",
                          borderColor: "#efd236",
                          color: "black",
                        }}
                      >
                        Github Main
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

 {/* <!-- ================================ Testimonials ========================== --> */}
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Testimonials</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            People I've worked with have said some nice things
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <section id="carousel">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <div className="quote">
                              <i className="fa fa-quote-left fa-4x"></i>
                            </div>
                            <div
                              className="carousel slide"
                              id="fade-quote-carousel"
                              data-ride="carousel"
                              data-interval="3000"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="active item">
                                  <blockquote>
                                    <p>
                                      “He's sick in the head but also a has a monster python skillset.”
                                      <br />
                                      <span>Matt</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “He's well seasoned for a white boy.”
                                      <br />
                                      <span>Jay</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “He's spilled more drinks at my house in two years than any one person should in a lifetime.”
                                      <br />
                                      <span>Cole</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “He is the biggest bird.”
                                      <br />
                                      <span>Anthony</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “We love you Noah!”
                                      <br />
                                      <span>Payton</span>
                                    </p>
                                  </blockquote>
                                </div>

                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “You don't always have to rip it!”
                                      <br />
                                      <span>Alejandro</span>
                                    </p>
                                  </blockquote>
                                </div>

                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “We call you wildstrokes.”
                                      <br />
                                      <span>Mike</span>
                                    </p>
                                  </blockquote>
                                </div>

                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Pay Attention!”
                                      <br />
                                      <span>Erik</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “The mustache makes you look like escobar.”
                                      <br />
                                      <span>Christian</span>
                                    </p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
                      
        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contact Me</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I’m always open to discussing product design work or
                          partnership opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  {/* <div className="row contact-row">
                    <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 contact-col">
                      <h3>Write Your Message Here</h3>
                      <div className="contact-form">
                        <form
                          action="https://herokuapp.us6.list-manage.com/subscribe/post?u=870e1b447d1f93893227a9c52&amp;id=85d6c939a5"
                          method="post"
                          id="mc-embedded-subscribe-form contactForm"
                          name="mc-embedded-subscribe-form"
                          className="contact-form shake validate"
                          target="_blank" 
                          data-toggle="validator"
                          novalidate
                        >
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="text"
                                name="FLNAME"
                                id="mce-FLNAME"
                                className="required form-control"
                                placeholder="Your Name"
                                required
                                data-error="Please enter your name"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="email"
                                className="email required form-control"
                                name="EMAIL"
                                id="mce-EMAIL"
                                placeholder="Your Email"
                                required
                                data-error="Please enter your email"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="phone"
                                name="PHONE"
                                className="phone form-control"
                                id="phone mce-PHONE"
                                placeholder="Your Phone"
                                required
                                data-error="Please enter your phone"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <textarea
                                id="message mce-MESSAGE"
                                rows="7"
                                placeholder="Your Massage"
                                name="MESSAGE"
                                className="required form-control"
                                required
                                data-error="Please enter your message"
                              ></textarea>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div id="mce-responses" class="clear">
                            <div
                              class="response"
                              id="mce-error-response"
                              style={{ display: "none" }}
                            ></div>
                            <div
                              class="response"
                              id="mce-success-response"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                          <div
                            style={{ position: "absolute", left: "-5000px" }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_870e1b447d1f93893227a9c52_85d6c939a5"
                              tabindex="-1"
                              value=""
                            />
                          </div>
                          <button
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="submit mc-embedded-subscribe"
                            className="btn btn-success"
                          >
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="clearfix"></div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Address</h3>
                        <p>Boca Grande, Florida, United States</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:contact.noahwilliamshaffer@gmail.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          contact.noahwilliamshaffer@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Phone</h3>
                        <a
                          href="tel:9414519208"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          +1 9414519208
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-television contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Portfolio</h3>
                        <a
                        href="https://github.com/noahwilliamshaffer"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                        https://noahwilliamshaffer.github.io/</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid map-col">
                  <div class="col-md-12 col-sm-12 map-col">
                    <div class="google-maps">
                      <div class="map-wrap">
                        <iframe
                          title="google-maps"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.4536469532607!2d-82.2577031886383!3d26.747334328118725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c4b2f51cba139d%3A0x76553ae686e52223!2s240%20Harbor%20Dr%2C%20Boca%20Grande%2C%20FL%2033921!5e0!3m2!1sen!2sus!4v1690181683483!5m2!1sen!2sus"
                          width="100%"
                          height="450"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
