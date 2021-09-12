import React from 'react';
import { Link } from 'gatsby';

import './styles.scss';

const Nav = () => {
  return (
    /* <!--    navbar--> */
    <nav className="navbar">
      <div>
        <ul className="navbar__nav">
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
  );
};

export default Nav;
