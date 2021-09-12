import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

const Services = () => (
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
            A few of the services we provide include designing custom patterns,
            creating custom crochet products, and eventually our own yarn line.
            We welcome anyone to <Link to="#contact">reach out</Link> to us if
            you’d like to collaborate on a pattern together.
          </p>
          <h5 className="pt-2">Custom patterns:</h5>
          <p className="pt-2">
            If there is an item you’d like a pattern for but can’t seem to find
            a pattern you like, you can
            <Link to="#contact">reach out</Link> to us and we can work together
            to create a custom pattern for your needs or we have patterns
            available on
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
            that you love, we can create the item for you with yarn we already
            have or yarn of your choice. If you order locally, we can provide
            delivery for a small fee.
          </p>
        </div>
      </Row>
    </Container>
  </Section>
);

export default Services;
