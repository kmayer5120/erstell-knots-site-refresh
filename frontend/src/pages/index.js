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
import Footer from '../components/Footer';
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
              <div className="pt-2 pb-2 pr-2 pl-2" id="about-me">
                <h2 className="pt-1 pb-1">About Erstell Knots</h2>
                <p className="pt-1">
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

                <aside className="">
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

                <p className="pt-1">
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
                <p className="pt-1">
                  Once I have a few more patterns completed, I plan on learning
                  tunisian crochet and knitting. Once I become more established
                  and have more space, I will be dyeing and selling my own yarn.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <Container className="announcements pt-2 pb-2 pr-2 pl-2">
                <h2 className="pt-1 pb-2">Finding Summer Barefoot Sandals</h2>

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
                <div className="announcements__body mt-1">
                  Are you looking for a{' '}
                  <span className="color-blueberry text-bold">super quick</span>{' '}
                  and{' '}
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
                    className="pt-1"
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

                <h3 className="mt-1">The Best Is Handmade</h3>
                <StaticImage
                  src="../images/EK_FBCover.png"
                  alt=""
                  className="img-fluid rounded"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* <!--end about--> */}
      <Section className="image-grid__section">
        <div className="container image-grid" id="image-grid"></div>
      </Section>

      {/* <!-- contact form --> */}
      <Section className="mt-2" id="contact-wrapper">
        <form
          action="./apis/"
          id="contact"
          method="post"
          noValidate
          className="p-5 my-4"
        >
          <h3>Have questions?</h3>
          <div>
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
      <Footer />
    </Layout>
  );
};

export default IndexPage;
