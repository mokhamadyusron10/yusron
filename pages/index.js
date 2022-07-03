export default function Home({web}) {
  console.log(web.dblink[0].items[2].About.title)
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="#page-top">
            {web.dblink[0].items[0].logo.nama_logo}
            </a>
            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href={web.dblink[0].items[1].portfolio.link}
                  >
                    {web.dblink[0].items[1].portfolio.title}
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href={web.dblink[0].items[2].About.link}
                  >
                    {web.dblink[0].items[2].About.title}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            {/* Masthead Avatar Image*/}
            <img
              className="masthead-avatar mb-5"
              src={web.dblink[1].center.img}
              alt="..."
            />
            {/* Masthead Heading*/}
            <h1 className="masthead-heading text-uppercase mb-0">
              {web.dblink[1].center.title}
            </h1>
            {/* Icon Divider*/}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon">
                <i className="fas fa-star" />
              </div>
              <div className="divider-custom-line" />
            </div>
            {/* Masthead Subheading*/}
            <p className="masthead-subheading font-weight-light mb-0">
            {web.dblink[1].center.subtitle}
            </p>
          </div>
        </header>

        {/* /#header */}
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            {web.dblink[0].items[1].portfolio.title}
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line" />
              <div className="divider-custom-icon">
                <i className="fas fa-star" />
              </div>
              <div className="divider-custom-line" />
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal1"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={web.dblink[2].items[0].img}
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal2"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={web.dblink[2].items[1].img}
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal3"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={web.dblink[2].items[2].img}
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal4"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={web.dblink[2].items[3].img}
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal5"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={web.dblink[2].items[4].img}
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal6"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={web.dblink[2].items[5].img}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.hero */}
        <section className="page-section bg-primary text-white mb-0" id="about">
          <div className="container">
            {/* About Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-white">
            {web.dblink[0].items[2].About.title}
            </h2>
            {/* About Section Button*/}
            <div className="text-center mt-4">
              <p className="lead mb-0">
              {web.dblink[3].text}
              </p>
            </div>
          </div>
        </section>
        {/* /#main */}
        <footer className="footer text-center">
          <div className="container">
            <div className="row">
              {/* Footer Location*/}
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                {web.dblink[4].location}
                </p>
              </div>
              {/* Footer Social Icons*/}
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://facebook.com/nafdan.elfirdaus.5/"
                >
                  <i className="fab fa-fw fa-facebook-f" />
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://github.com/mokhamadyusron10"
                >
                  <i className="fab fa-fw fa-github" />
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.youtube.com/channel/UCOgWJuOfuhNRs73qZqrrdyQ"
                >
                  <i className="fab fa-fw fa-youtube" />
                </a>
              </div>
              {/* Footer About Text*/}
              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4"> {web.dblink[0].items[2].About.title}</h4>
                <p className="lead mb-0">
                {web.dblink[3].text}
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* /#footer */}
        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Created by mokhamad yusron</small>
          </div>
        </div>
        <div>
          {/* Portfolio Modals*/}
          {/* Portfolio Modal 1*/}
          <div
            className="portfolio-modal modal fade"
            id="portfolioModal1"
            tabIndex={-1}
            aria-labelledby="portfolioModal1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center pb-5">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        {/* Portfolio Modal - Title*/}
                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                          Awan
                        </h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                          <div className="divider-custom-line" />
                          <div className="divider-custom-icon">
                            <i className="fas fa-star" />
                          </div>
                          <div className="divider-custom-line" />
                        </div>
                        {/* Portfolio Modal - Image*/}
                        <img
                          className="img-fluid rounded mb-5"
                          src="assets/img/portfolio/awan.png"
                          alt="..."
                        />
                        {/* Portfolio Modal - Text*/}
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          <i className="fas fa-xmark fa-fw" />
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Modal 2*/}
          <div
            className="portfolio-modal modal fade"
            id="portfolioModal2"
            tabIndex={-1}
            aria-labelledby="portfolioModal2"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center pb-5">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        {/* Portfolio Modal - Title*/}
                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                          vintage
                        </h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                          <div className="divider-custom-line" />
                          <div className="divider-custom-icon">
                            <i className="fas fa-star" />
                          </div>
                          <div className="divider-custom-line" />
                        </div>
                        {/* Portfolio Modal - Image*/}
                        <img
                          className="img-fluid rounded mb-5"
                          src="assets/img/portfolio/vintage.png"
                          alt="..."
                        />
                        {/* Portfolio Modal - Text*/}
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          <i className="fas fa-xmark fa-fw" />
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Modal 3*/}
          <div
            className="portfolio-modal modal fade"
            id="portfolioModal3"
            tabIndex={-1}
            aria-labelledby="portfolioModal3"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center pb-5">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        {/* Portfolio Modal - Title*/}
                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                          senja
                        </h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                          <div className="divider-custom-line" />
                          <div className="divider-custom-icon">
                            <i className="fas fa-star" />
                          </div>
                          <div className="divider-custom-line" />
                        </div>
                        {/* Portfolio Modal - Image*/}
                        <img
                          className="img-fluid rounded mb-5"
                          src="assets/img/portfolio/sendja.png"
                          alt="..."
                        />
                        {/* Portfolio Modal - Text*/}
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          <i className="fas fa-xmark fa-fw" />
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Modal 4*/}
          <div
            className="portfolio-modal modal fade"
            id="portfolioModal4"
            tabIndex={-1}
            aria-labelledby="portfolioModal4"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center pb-5">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        {/* Portfolio Modal - Title*/}
                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                          Daun
                        </h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                          <div className="divider-custom-line" />
                          <div className="divider-custom-icon">
                            <i className="fas fa-star" />
                          </div>
                          <div className="divider-custom-line" />
                        </div>
                        {/* Portfolio Modal - Image*/}
                        <img
                          className="img-fluid rounded mb-5"
                          src="assets/img/portfolio/daun.png"
                          alt="..."
                        />
                        {/* Portfolio Modal - Text*/}
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          <i className="fas fa-xmark fa-fw" />
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Modal 5*/}
          <div
            className="portfolio-modal modal fade"
            id="portfolioModal5"
            tabIndex={-1}
            aria-labelledby="portfolioModal5"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center pb-5">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        {/* Portfolio Modal - Title*/}
                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                          persawahan
                        </h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                          <div className="divider-custom-line" />
                          <div className="divider-custom-icon">
                            <i className="fas fa-star" />
                          </div>
                          <div className="divider-custom-line" />
                        </div>
                        {/* Portfolio Modal - Image*/}
                        <img
                          className="img-fluid rounded mb-5"
                          src="assets/img/portfolio/persawahan.png"
                          alt="..."
                        />
                        {/* Portfolio Modal - Text*/}
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          <i className="fas fa-xmark fa-fw" />
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Modal 6*/}
          <div
            className="portfolio-modal modal fade"
            id="portfolioModal6"
            tabIndex={-1}
            aria-labelledby="portfolioModal6"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center pb-5">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        {/* Portfolio Modal - Title*/}
                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                          lapanganBelakang
                        </h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                          <div className="divider-custom-line" />
                          <div className="divider-custom-icon">
                            <i className="fas fa-star" />
                          </div>
                          <div className="divider-custom-line" />
                        </div>
                        {/* Portfolio Modal - Image*/}
                        <img
                          className="img-fluid rounded mb-5"
                          src="assets/img/portfolio/_Lapangan Belakang_.png"
                          alt="..."
                        />
                        {/* Portfolio Modal - Text*/}
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                        <button
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          <i className="fas fa-xmark fa-fw" />
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const linkDb = "https://databaseyusron.herokuapp.com/";
  const dataResponse = await fetch(linkDb);
  const mydata = await dataResponse.json();
  return {
    props: {
      web: mydata,
    },
  };
}
