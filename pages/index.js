
export default function Home(props) {
  return (
    <>
      <div>
        <header
          id="masthead"
          className="site-header"
          data-anchor-target=".hero"
          data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);"
          data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);"
        >
          <nav id="primary-navigation" className="site-navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-target="#portfolio-perfect-collapse"
                  aria-expanded="false"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a href="#hero" className="site-logo">
                  <img
                    src="/assets/img/logo.png"
                    style={{ height: "10%", width: "20%" }}
                    alt="logo"
                  />
                </a>
              </div>
              {/* /.navbar-header */}
              <div className="main-menu" id="portfolio-perfect-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="page-scroll">
                    <a href={props.hasil[0].header[1].navbar.home.link}>
                      {props.hasil[0].header[1].navbar.home.title}
                    </a>
                  </li>
                  <li className="page-scroll">
                    <a href="{props.hasil[0].header[1].navbar.about.link}">
                      {props.hasil[0].header[1].navbar.about.title}
                    </a>
                  </li>
                  <li className="page-scroll">
                    <a href="{props.hasil[0].header[1].navbar.service.link}">
                      {props.hasil[0].header[1].navbar.service.title}
                    </a>
                  </li>
                  <li className="page-scroll">
                    <a href="{props.hasil[0].header[1].navbar.portfolio.link}">
                      {props.hasil[0].header[1].navbar.portfolio.title}
                    </a>
                  </li>
                  <li className="page-scroll">
                    <a href="{props.hasil[0].header[1].navbar.contact.link}">
                      {props.hasil[0].header[1].navbar.contact.title}
                    </a>
                  </li>
                </ul>
                {/* /.navbar-nav */}
              </div>
              {/* /.navbar-collapse */}
            </div>
          </nav>
          {/* /.primary-navigation */}
        </header>
        {/* /#header */}
        <div id="hero" className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>{props.hasil[0].header[2].slider.left.title}</h1>
                <div className="page-scroll">
                  <p className="job-title">Full Stack Developer</p>
                  <a href="#contact" className="btn btn-fill ">
                    {props.hasil[0].header[2].slider.left.button.left.title}
                  </a>
                  <div className="clearfix visible-xxs" />
                  <a href="#portfolio" className="btn btn-border">
                    {props.hasil[0].header[2].slider.left.button.right.title}
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-right">
                <img
                  src={props.hasil[0].header[2].slider.right.img}
                  style={{ height: "100%", width: "100%" }}
                  alt="mei-ayuningsari"
                />
              </div>
            </div>
          </div>
        </div>

        {/* /.hero */}
        <main id="main" className="site-main">
          <section
            id="about"
            className="site-section section-about text-center"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <h2>{props.hasil[0].body[0].about[0].title}</h2>
                  <img
                    src="assets/img/lines.svg"
                    className="img-lines"
                    alt="lines"
                  />
                  <p>{props.hasil[0].body[0].about[0].isi}</p>
                  <a
                    href={props.hasil[0].body[0].about[1].button[0].left.link}
                    className="btn btn-fill"
                  >
                    {props.hasil[0].body[0].about[1].button[0].left.title}
                  </a>
                  <a
                    href={props.hasil[0].body[0].about[1].button[1].right.link}
                    className="btn btn-fill"
                    target="_blank"
                    download
                  >
                    {props.hasil[0].body[0].about[1].button[1].right.title}
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* /.secton-about */}
          <section className="site-section section-skills">
            <div className="container">
              <div className="text-center">
                <h3>{props.hasil[0].body[0].about[2].skill[0].title}</h3>
                <img
                  src="assets/img/lines.svg"
                  className="img-lines"
                  alt="lines"
                />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="skill">
                    <h4>
                      {
                        props.hasil[0].body[0].about[2].skill[0].subtitle[0]
                          .nama
                      }
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={85}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                  <div className="skill">
                    <h4>
                      {
                        props.hasil[0].body[0].about[2].skill[0].subtitle[3]
                          .nama
                      }
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={70}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                </div>
                <div className="col-md-4">
                  <div className="skill">
                    <h4>
                      {
                        props.hasil[0].body[0].about[2].skill[0].subtitle[1]
                          .nama
                      }
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={80}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                  <div className="skill">
                    <h4>
                      {
                        props.hasil[0].body[0].about[2].skill[0].subtitle[4]
                          .nama
                      }
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={70}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                </div>
                <div className="col-md-4">
                  <div className="skill">
                    <h4>
                      {
                        props.hasil[0].body[0].about[2].skill[0].subtitle[2]
                          .nama
                      }
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={85}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                  <div className="skill">
                    <h4>
                      {
                        props.hasil[0].body[0].about[2].skill[0].subtitle[5]
                          .nama
                      }
                    </h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={75}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                </div>
              </div>
            </div>
          </section>
          {/* /.secton-skills */}
          <section
            id="service"
            className="site-section section-services overlay text-center"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>{props.hasil[0].body[0].service[0].title}</h3>
                  <img
                    src="assets/img/lines.svg"
                    className="img-lines"
                    alt="lines"
                  />
                </div>
                <div className="col-sm-4">
                  <div className="service">
                    <img
                      src={props.hasil[0].body[0].service[1].konten[0].img}
                      style={{ height: "70%", width: "70%" }}
                      alt="Front End Developer"
                    />
                    <h4>{props.hasil[0].body[0].service[1].konten[0].judul}</h4>
                    <p>{props.hasil[0].body[0].service[1].konten[0].desc}</p>
                  </div>
                  {/* /.service */}
                </div>
                <div className="col-sm-4">
                  <div className="service">
                    <img
                      src={props.hasil[0].body[0].service[1].konten[1].img}
                      style={{ height: "70%", width: "70%" }}
                      alt="Back End Developer"
                    />
                    <h4>{props.hasil[0].body[0].service[1].konten[1].judul}</h4>
                    <p>{props.hasil[0].body[0].service[1].konten[1].desc}</p>
                  </div>
                  {/* /.service */}
                </div>
                <div className="col-sm-4">
                  <div className="service">
                    <img
                      src={props.hasil[0].body[0].service[1].konten[2].img}
                      style={{ height: "70%", width: "70%" }}
                      alt="Coding"
                    />
                    <h4>{props.hasil[0].body[0].service[1].konten[2].judul}</h4>
                    <p>{props.hasil[0].body[0].service[1].konten[2].desc}</p>
                  </div>
                  {/* /.service */}
                </div>
              </div>
            </div>
          </section>
          {/* /.secton-services */}
          <section id="portfolio" className="site-section section-portfolio">
            <div className="container">
              <div className="text-center">
                <h3>{props.hasil[0].body[0].portfolio[0].title}</h3>
                <img
                  src="assets/img/lines.svg"
                  className="img-lines"
                  alt="lines"
                />
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src={
                        props.hasil[0].body[0].portfolio[1].ptf[0].work[0].img
                      }
                      className="img-res"
                      alt
                    />
                    <div className="portfolio-item-info">
                      <h4>
                        {
                          props.hasil[0].body[0].portfolio[1].ptf[0].work[1]
                            .title
                        }
                      </h4>
                      <a
                        href={
                          props.hasil[0].body[0].portfolio[1].ptf[0].work[1]
                            .view[0].link
                        }
                        data-toggle="modal"
                        data-target="#portfolioItem1"
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[0].work[1]
                              .view[0].icon
                          }
                        />
                      </a>
                      <a
                        href={
                          props.hasil[0].body[0].portfolio[1].ptf[0].work[1]
                            .visit.link
                        }
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[0].work[1]
                              .visit.icon
                          }
                        />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src={
                        props.hasil[0].body[0].portfolio[1].ptf[1].work[0].img
                      }
                      className="img-res"
                      alt
                    />
                    <div className="portfolio-item-info">
                      <h4>
                        {
                          props.hasil[0].body[0].portfolio[1].ptf[1].work[1]
                            .title
                        }
                      </h4>
                      <a
                        href={
                          props.hasil[0].body[0].portfolio[1].ptf[1].work[1]
                            .visit.link
                        }
                        data-toggle="modal"
                        data-target="#portfolioItem2"
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[1].work[1]
                              .view[0].icon
                          }
                        />
                      </a>
                      <a
                        href={
                          props.hasil[0].body[0].portfolio[1].ptf[1].work[1]
                            .view[1].img
                        }
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[1].work[1]
                              .visit.icon
                          }
                        />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src={
                        props.hasil[0].body[0].portfolio[1].ptf[2].work[0].img
                      }
                      className="img-res"
                      alt
                    />
                    <div className="portfolio-item-info">
                      <h4>
                        {
                          props.hasil[0].body[0].portfolio[1].ptf[2].work[1]
                            .title
                        }
                      </h4>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#portfolioItem3"
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[2].work[1]
                              .view[0].icon
                          }
                        />
                      </a>
                      <a href="#">
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[2].work[1]
                              .visit.icon
                          }
                        />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src={
                        props.hasil[0].body[0].portfolio[1].ptf[3].work[0].img
                      }
                      className="img-res"
                      alt
                    />
                    <div className="portfolio-item-info">
                      <h4>
                        {
                          props.hasil[0].body[0].portfolio[1].ptf[3].work[1]
                            .title
                        }
                      </h4>
                      <a
                        href={
                          props.hasil[0].body[0].portfolio[1].ptf[3].work[1]
                            .visit.link
                        }
                        data-toggle="modal"
                        data-target="#portfolioItem6"
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[3].work[1]
                              .view[0].icon
                          }
                        />
                      </a>
                      <a
                        href={
                          props.hasil[0].body[0].portfolio[1].ptf[3].work[1]
                            .visit.link
                        }
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[3].work[1]
                              .visit.icon
                          }
                        />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src={
                        props.hasil[0].body[0].portfolio[1].ptf[4].work[0].img
                      }
                      className="img-res"
                      alt
                    />
                    <div className="portfolio-item-info">
                      <h4>
                        {
                          props.hasil[0].body[0].portfolio[1].ptf[4].work[1]
                            .title
                        }
                      </h4>
                      <a
                        href={
                          props.hasil[0].body[0].portfolio[1].ptf[4].work[1]
                            .visit.link
                        }
                        data-toggle="modal"
                        data-target="#portfolioItem4"
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[4].work[1]
                              .view[0].icon
                          }
                        />
                      </a>
                      <a
                        href={
                          props.hasil[0].body[0].portfolio[1].ptf[4].work[1]
                            .visit.link
                        }
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[4].work[1]
                              .visit.icon
                          }
                        />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src={
                        props.hasil[0].body[0].portfolio[1].ptf[5].work[0].img
                      }
                      className="img-res"
                      alt
                    />
                    <div className="portfolio-item-info">
                      <h4>
                        {
                          props.hasil[0].body[0].portfolio[1].ptf[5].work[1]
                            .title
                        }
                      </h4>
                      <a
                        href={
                          props.hasil[0].body[0].portfolio[1].ptf[5].work[1]
                            .visit.link
                        }
                        data-toggle="modal"
                        data-target="#portfolioItem5"
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[5].work[1]
                              .view[0].icon
                          }
                        />
                      </a>
                      <a
                        href={
                          props.hasil[0].body[0].portfolio[1].ptf[5].work[1]
                            .visit.link
                        }
                      >
                        <span
                          className={
                            props.hasil[0].body[0].portfolio[1].ptf[5].work[1]
                              .visit.icon
                          }
                        />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
              </div>
            </div>
          </section>
          {/* /.secton-portfolio */}
          <section className="site-section section-counters text-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-xs-12">
                  <p className="counter start" data-to={3} data-speed={2000}>
                    0
                  </p>
                  <h4>Years Experience</h4>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <p className="counter start" data-to={30} data-speed={2000}>
                    0
                  </p>
                  <h4>Projects Delivered</h4>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <p
                    id="infinity"
                    className="counter"
                    data-from={0}
                    data-to={1}
                    data-speed={1000}
                  >
                    0
                  </p>
                  <h4>
                    Seconds on this site!
                    <br />
                    What are you waiting for?
                  </h4>
                </div>
              </div>
            </div>
          </section>
          {/* /.section-counters */}
          <section
            id="contact"
            className="site-section section-form text-center"
          >
            <div className="container">
              <h3>Contact</h3>
              <img
                src="assets/img/lines.svg"
                className="img-lines"
                alt="lines"
              />
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <a
                      href="mailto:gondrongaselole4@gmail.com?subject=Ask%20Projects&body=I'm%20Interested%20In%20Your%20Projects"
                      className="btn btn-border "
                    >
                      Hire Me In Email{" "}
                      <span className="glyphicon glyphicon-send" />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=6281216799462&text=I'm%20Interested%20In%20Your%20Projects."
                      className="btn btn-border "
                    >
                      Hire Me In Whatshapp{" "}
                      <span className="glyphicon glyphicon-send" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </section>
          {/* /.section-form */}
        </main>
        {/* /#main */}
        <footer id="colophon" className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <a className="icon facebook-bg" href="#">
                  <i className="icon-facebook" />
                </a>
                <a className="icon gplus-bg" href="#">
                  <i className="icon-gplus" />
                </a>
              </div>
              <div className="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3">
                <p className="copyright">2022. All Rights Reserved</p>
              </div>
              <div className="col-sm-4 col-xs-3">
                <div className="text-right page-scroll">
                  <a className="icon icon-up-bg" href="#hero">
                    <i className="icon-up" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* /#footer */}
        {/* Modals */}
        <div id="portfolioItem1" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/images/picture1.jpg" alt />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Ziana Company</h4>
                <p>
                  This website is one of the projects that I work on, it can be
                  seen if there are several choices of website models that are
                  fully finished or not because what is here is only as an
                  example for website users to see website models that I can
                  work on.
                </p>
              </div>
              <div className="modal-footer">
                <a
                  href="https://zianacompany.netlify.app/"
                  className="btn btn-fill"
                >
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div id="portfolioItem2" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/images/picture2.png" alt />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Healthy Care</h4>
                <p>
                  This website is one of the projects that I work on, it can be
                  seen if there are several choices of website models that are
                  fully finished or not because what is here is only as an
                  example for website users to see website models that I can
                  work on.
                </p>
              </div>
              <div className="modal-footer">
                <a
                  href="https://healthycaress.netlify.app/"
                  className="btn btn-fill"
                >
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div id="portfolioItem3" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/images/picture5.png" alt />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Go Service</h4>
                <p>
                  This website is one of the projects that I work on, it can be
                  seen if there are several choices of website models that are
                  fully finished or not because what is here is only as an
                  example for website users to see website models that I can
                  work on.
                </p>
              </div>
              <div className="modal-footer">
                <a
                  href="https://uasdesainweb.netlify.app/"
                  className="btn btn-fill"
                >
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div id="portfolioItem4" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/images/picture3.png" alt />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Birthday Greeting</h4>
                <p>
                  This website is one of the projects that I work on, it can be
                  seen if there are several choices of website models that are
                  fully finished or not because what is here is only as an
                  example for website users to see website models that I can
                  work on.
                </p>
              </div>
              <div className="modal-footer">
                <a
                  href="https://birthdaygreeting.netlify.app/"
                  className="btn btn-fill"
                >
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div id="portfolioItem5" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/images/picture4.png" alt />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Louvre Tour Et Voyage</h4>
                <p>
                  This website is one of the projects that I work on, it can be
                  seen if there are several choices of website models that are
                  fully finished or not because what is here is only as an
                  example for website users to see website models that I can
                  work on.
                </p>
              </div>
              <div className="modal-footer">
                <a
                  href="https://louvretouretvoyage.netlify.app/"
                  className="btn btn-fill"
                >
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div id="portfolioItem6" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/images/picture6.png" alt />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Louvre Tour Et Voyage</h4>
                <p>
                  This website is one of the projects that I work on, it can be
                  seen if there are several choices of website models that are
                  fully finished or not because what is here is only as an
                  example for website users to see website models that I can
                  work on.
                </p>
              </div>
              <div className="modal-footer">
                <a
                  href="https://louvretouretvoyage.netlify.app/"
                  className="btn btn-fill"
                >
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const resp = await fetch("https://meme-portfolio.herokuapp.com/");
  const hasil = await resp.json();

  return {
    props: { hasil: hasil.database }, // will be passed to the page component as props
  };
}
