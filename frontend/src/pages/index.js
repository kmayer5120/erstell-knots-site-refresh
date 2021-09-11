import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Section from '../components/Section';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import '../styles/pages/_home.scss';

const IndexPage = () => {
  return (
    <Layout title="Home">
      {/* <!--    hero--> */}
      <Hero />

      {/* <!--    navbar--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" id="hamburger-menu-icon"></span>
          <span id="menu-descriptor">Menu</span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item pr-4 active">
              <Link className="nav-link" to="https://erstellknots.com/">
                {/* <!--SVG Icon found at: https://iconmonstr.com/home-6-svg/--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="pr-1"
                >
                  <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link className="nav-link" to="#about-me">
                {/* <!--SVG Icon found at: https://iconmonstr.com/info-5-svg/--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="pr-1"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
                </svg>
                About
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link className="nav-link" to="#image-grid">
                {/* <!--SVG Icon found at: https://iconmonstr.com/picture-17-svg/--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="pr-1"
                >
                  <path d="M1.859 6l-.489-2h21.256l-.491 2h-20.276zm1.581-4l-.439-2h17.994l-.439 2h-17.116zm20.56 16h-24l2 6h20l2-6zm-20.896-2l-.814-6h19.411l-.839 6h2.02l1.118-8h-24l1.085 8h2.019zm2.784-3.995c-.049-.555.419-1.005 1.043-1.005.625 0 1.155.449 1.185 1.004.03.555-.438 1.005-1.044 1.005-.605 0-1.136-.449-1.184-1.004zm7.575-.224l-1.824 2.68-1.813-1.312-2.826 2.851h10l-3.537-4.219z" />
                </svg>
                Gallery
              </Link>
            </li>

            <li className="nav-item pr-4">
              <Link className="nav-link" to="#services">
                {/* <!--SVG Icon found at: https://iconmonstr.com/ruler-30-svg/--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="pr-1"
                >
                  <path d="M5.641 22.569l-5.641 1.431 1.397-5.674 4.244 4.243zm-2.829-5.657l4.243 4.243 16.945-16.913-4.242-4.242-16.946 16.912zm14.114-2.783l-1.414 1.414.708.708 1.414-1.414 1.414 1.414-2.122 2.122.707.707 2.122-2.122 1.417 1.385-2.829 2.829-4.232-4.233-1.415 1.413 5.648 5.648 5.656-5.657-5.643-5.643-1.431 1.429zm-9.887-4.261l-4.21-4.21 2.828-2.829 1.369 1.401-2.121 2.121.707.707 2.121-2.122 1.414 1.415-1.414 1.414.707.707 1.414-1.414 1.432-1.429-5.629-5.629-5.657 5.657 5.623 5.624 1.416-1.413z" />
                </svg>
                Services
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link
                className="nav-link"
                to="https://www.etsy.com/shop/ErstellKnots"
                target="_blank"
                rel="noreferrer"
              >
                {/* <!--SVG Icon found at: https://iconmonstr.com/shopping-cart-3-svg/--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="pr-1"
                >
                  <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                </svg>
                Shop
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link className="nav-link" to="#contact">
                {/* <!--SVG Icon found at: https://iconmonstr.com/paper-plane-1-svg/--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="pr-1"
                >
                  <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                </svg>
                Contact
              </Link>
            </li>
            <li className="nav-item pr-4">
              <Link
                className="nav-link"
                to="https://www.erstellknots.com/yarn-calculator.html"
              >
                {/* <!--SVG Icon found at: https://iconmonstr.com/calculator-10-svg/ --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.611 13.663c.262-.187.559-.274.849-.274.616 0 1.21.392 1.405 1.044-.249-.191-.541-.285-.836-.285-.301 0-.603.097-.866.285-.522.374-.753 1.009-.551 1.611-.814-.581-.819-1.795-.001-2.381zm2.073 7.831c.651.218 2.665.772 4.999 2.506l4.317-3.088c-1.123-1.569-.816-2.669-1.932-4.229-.499-.695-.939-1.12-1.755-.977l-.234.043.394.548c.239.335-.267.683-.499.357l-.351-.49c-.124-.174-.34-.256-.548-.21l-.796.179.478.666c.24.336-.267.681-.499.356l-.412-.576c-.129-.18-.353-.26-.562-.208l-.809.203.504.705c.241.336-.267.682-.499.357l-1.658-2.334c-.269-.376-.793-.463-1.17-.194-.376.27-.464.793-.193 1.17l2.632 3.7c-.812-.299-2.059-.426-2.289.411-.139.501.262.898.882 1.105zm-.684-18.494h-11v5h11v-5zm-7 9h3v-2h-3v2zm-1-2h-3v2h3v-2zm0 3h-3v2h3v-2zm-3 5h3v-2h-3v2zm7-5h-3v2h3v-2zm2.306 6h-10.306v-17h13v9.75c1.487.733 2 2.546 2 2.546v-14.296h-17v21h11.821c-.128-.802.049-1.379.485-2zm-1.306-9v2h.507c.709-.486 1.569-.711 2.493-.568v-1.432h-3zm-1 6h-3v2h3v-2z" />
                </svg>
                Yarn Calculator
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!--end navbar--> */}
      {/* <!--about--> */}
      <Section>
        <Container>
          <Row className="" id="about-me-wrapper">
            <Col span={6}>
              <div id="about-me">
                <h2 className="py-2">About Erstell Knots</h2>
                <p className="pt-2">
                  My name is April and I’m from Albuquerque, NM, USA. I started
                  Erstell.Knots in December of 2020. I first learned how to
                  crochet in April of 2020. As I learned more about this craft,
                  I got bored with following other patterns. I wanted to be
                  creative and create my own work. After I created my first
                  pattern,
                  <Link
                    to="https://www.ravelry.com/patterns/library/oceans-summit-ear-warmer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ocean’s Summit Ear Warmer
                  </Link>
                  , I got a taste of what it was like to go through the whole
                  process.
                </p>

                <aside className="my-2">
                  Designing
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" />
                  </svg>
                  Editing
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" />
                  </svg>
                  Publishing
                </aside>

                <p className="pt-2">
                  During the testing and publishing phase of my first pattern is
                  when the brand Erstell.Knots was born. Since then, I have
                  completed a
                  <Link
                    to="https://www.ravelry.com/patterns/library/warm-ashes-beanie"
                    target="_blank"
                    rel="noreferrer"
                  >
                    hat pattern
                  </Link>
                  and I already have a long list of items I want to design
                  patterns for. All of my designs are available on
                  <Link
                    to="https://www.ravelry.com/designers/april-donk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ravelry
                  </Link>
                  and my
                  <Link
                    to="https://www.etsy.com/shop/ErstellKnots"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Etsy
                  </Link>
                  store.
                </p>
                <p className="pt-2">
                  Once I have a few more patterns completed, I plan on learning
                  tunisian crochet and knitting. Once I become more established
                  and have more space, I will be dyeing and selling my own yarn.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div className="container announcements">
                <h2>Finding Summer Barefoot Sandals</h2>

                <div className="announcements__countdown">
                  <p id="countdown">
                    PATTERN RELEASE:
                    <span id="days"></span>
                    <span id="hours"></span>
                    <span id="minutes"></span>
                    <span id="seconds"></span>
                  </p>
                </div>
                <div className="announcements__img-grid">
                  <StaticImage
                    src="../images/img-finding-summer-barefoot-sandals-2.jpeg"
                    alt="barefoot sandals"
                  />
                  <StaticImage
                    src="../images/img-finding-summer-barefoot-sandals-1.jpeg"
                    alt="barefoot sandals"
                  />
                  <StaticImage
                    src="../images/img-finding-summer-barefoot-sandals-3.jpeg"
                    alt="barefoot sandals"
                  />
                </div>
                <div className="announcements__body mt-2">
                  Are you looking for a
                  <span className="color-blueberry text-bold">super quick</span>{' '}
                  and
                  <span className="color-blueberry text-bold">
                    fun pattern?
                  </span>{' '}
                  Are you looking for something cute and functional to wear
                  instead of shoes all of the time? Then these Finding Summer
                  Barefoot Sandals are perfect for you! They only take 2-3 hours
                  to make and they are perfect for any occasion and any age!
                  <Link
                    to="https://www.etsy.com/shop/ErstellKnots"
                    target="_blank"
                    rel="noreferrer"
                    className="pt-2"
                    id="etsy-link"
                  >
                    Pattern on Etsy
                  </Link>
                  <Link
                    to="https://www.ravelry.com/designers/erstell-knots"
                    target="_blank"
                    rel="noreferrer"
                    id="ravelry-link"
                  >
                    Pattern on Ravelry
                  </Link>
                </div>
              </div>

              <h3 className="py-2 mt-3">The Best Is Handmade</h3>
              <StaticImage
                src="../images/EK_FBCover.png"
                alt=""
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </Section>

      {/* <!--end about--> */}
      <Section className="image-grid__section">
        <div className="container image-grid" id="image-grid"></div>
      </Section>
      {/* <!-- services --> */}
      <Section>
        <Container>
          <Row>
            <Col span={6}>
              <Row>
                <div className="col-md-12" id="services-tools">
                  <StaticImage
                    src="../images/tools.jpeg"
                    alt="tools"
                    className="img-fluid mw-25 mh-25 p-2 mx-auto"
                  />
                </div>
              </Row>
              <Row>
                <h3 className="mt-3" id="links-description">
                  Find me here:
                </h3>
                <Col span={6}>
                  <div className="etsy-ravelry-svg-links-container">
                    <Link
                      to="https://www.etsy.com/shop/ErstellKnots"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <StaticImage
                        src="../images/etsy_logo_sm_white.png"
                        id="etsy-logo"
                        alt="etsy-logo"
                      />
                    </Link>
                    <Link
                      to="https://www.ravelry.com/designers/april-donk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <StaticImage
                        className="img-fluid py-2"
                        src="../images/ravelry-logo-white.svg"
                        id="ravelry-logo"
                        alt="ravelry logo"
                      />
                    </Link>
                  </div>
                </Col>
                <Col span={6}>
                  {/* <!--SVG Icon found at: https://iconmonstr.com/instagram-14-svg/--> */}
                  <Link
                    to="https://www.instagram.com/erstell.knots/"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="instagram-logo"
                      viewBox="0 0 24 24"
                      className="py-2"
                    >
                      <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                    </svg>
                  </Link>
                  {/* <!--SVG Icon found at: https://iconmonstr.com/facebook-4-svg/--> */}
                  <Link
                    to="https://www.facebook.com/erstell.knots"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="facebook-logo"
                      viewBox="0 0 24 24"
                      className="py-2"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                    </svg>
                  </Link>
                  {/* <!--SVG Icon found at: https://www.iconpacks.net/free-icon/tiktok-logo-4505.html--> */}
                  <Link
                    to="https://www.tiktok.com/@erstell.knots"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="tiktok-logo"
                      viewBox="0 0 90 90"
                      className="py-2"
                    >
                      <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 72.039 33.277 v 6.758 c -3.187 0.001 -6.283 -0.623 -9.203 -1.855 c -1.878 -0.793 -3.627 -1.814 -5.227 -3.048 l 0.048 20.801 c -0.02 4.684 -1.873 9.085 -5.227 12.4 c -2.73 2.698 -6.188 4.414 -9.937 4.97 c -0.881 0.13 -1.777 0.197 -2.684 0.197 c -4.013 0 -7.823 -1.3 -10.939 -3.698 c -0.586 -0.452 -1.147 -0.941 -1.681 -1.468 c -3.635 -3.593 -5.509 -8.462 -5.194 -13.584 c 0.241 -3.899 1.802 -7.618 4.404 -10.532 c 3.443 -3.857 8.26 -5.998 13.41 -5.998 c 0.906 0 1.803 0.068 2.684 0.198 v 2.499 v 6.951 c -0.835 -0.275 -1.727 -0.427 -2.656 -0.427 c -4.705 0 -8.512 3.839 -8.442 8.548 c 0.045 3.013 1.69 5.646 4.118 7.098 c 1.141 0.682 2.453 1.105 3.853 1.182 c 1.097 0.06 2.151 -0.093 3.126 -0.415 c 3.362 -1.111 5.787 -4.268 5.787 -7.992 l 0.011 -13.93 V 16.5 h 9.307 c 0.009 0.922 0.103 1.822 0.276 2.694 c 0.702 3.529 2.692 6.591 5.46 8.678 c 2.414 1.821 5.42 2.9 8.678 2.9 c 0.002 0 0.029 0 0.027 -0.002 V 33.277 z" />
                    </svg>
                  </Link>
                </Col>
              </Row>
            </Col>

            <div
              className="
            col-md-6 col-sm-12
            d-flex
            flex-column
            justify-content-start
            align-items-center
            my-5
            p-3
            "
              id="services"
            >
              <h2>Services</h2>
              <p className="pt-2">
                A few of the services we provide include designing custom
                patterns, creating custom crochet products, and eventually our
                own yarn line. We welcome anyone to{' '}
                <Link to="#contact">reach out</Link> to us if you’d like to
                collaborate on a pattern together.
              </p>
              <h5 className="pt-2">Custom patterns:</h5>
              <p className="pt-2">
                If there is an item you’d like a pattern for but can’t seem to
                find a pattern you like, you can
                <Link to="#contact">reach out</Link> to us and we can work
                together to create a custom pattern for your needs or we have
                patterns available on
                <Link
                  to="https://www.ravelry.com/designers/april-donk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ravelry
                </Link>
                and
                <Link
                  to="https://www.etsy.com/shop/ErstellKnots"
                  target="_blank"
                  rel="noreferrer"
                >
                  Etsy
                </Link>
                .
              </p>
              <h5 className="pt-2">Custom Crochet Products:</h5>
              <p className="pt-2">
                If you see a pattern in our
                <Link
                  to="https://www.ravelry.com/stores/erstellknots-designs"
                  target="_blank"
                  rel="noreferrer"
                >
                  store
                </Link>
                that you love, we can create the item for you with yarn we
                already have or yarn of your choice. If you order locally, we
                can provide delivery for a small fee.
              </p>
            </div>
          </Row>
        </Container>
      </Section>
      {/* <!--end services --> */}
      {/* <!-- contact form --> */}
      <Section className="container-fluid mt-5" id="contact-wrapper">
        <form
          action="./apis/"
          id="contact"
          method="post"
          noValidate
          className="p-5 my-4"
        >
          <h3>Have questions?</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="email@your-email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Purpose</label>
            <select className="form-control" id="subject" name="subject">
              <option>General Inquiries</option>
              <option>Custom Order</option>
              <option>Pattern Testing</option>
              <option>Shipping Inquiries</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              maxLength="2000"
              rows="3"
              placeholder="Message to send. (Max 2,000 characters.)"
              required
            ></textarea>
          </div>
          <div
            className="g-recaptcha"
            id="recaptcha"
            data-sitekey="6LdZUVQaAAAAAPIY2wsU52pf6cQuPyKqg9kSGo1R"
          ></div>
          <div className="form-group">
            <button id="btn-send" className="py-2" type="submit">
              SEND
            </button>
          </div>
          <div id="output-area"></div>
        </form>
      </Section>
      {/* <!--end contact form --> */}
      {/* <!-- footer --> */}
      <div className="container-fluid" id="footer">
        <div className="row">
          <footer className="footer">
            <div className="footer__copyright">
              &copy; Erstell.Knots 2021 <span>|</span>
            </div>
            <div className="footer__created-by">
              <div className="px-2">Created By: Kyle Mayer</div>
              <Link
                to="https://github.com/kmayer5120"
                target="_blank"
                rel="noreferrer"
                className="px-2"
              >
                {/* <!--GitHub SVG--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                </svg>
              </Link>
              <Link
                to="https://www.linkedin.com/in/kyle-mayer-fullstack/"
                target="_blank"
                rel="noreferrer"
                className="px-2"
              >
                {/* <!--LinkedIn SVG--> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
