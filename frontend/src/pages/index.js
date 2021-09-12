import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Section from '../components/Section';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import '../styles/pages/_home.scss';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Hero />
      <Nav />

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
