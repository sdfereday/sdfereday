import React from "react";
import Obfuscate from "react-obfuscate";
import { uniqueId } from "./helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFileCode,
  faCode,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import {
  faReact,
  faJs,
  faGithub,
  faWordpress,
  faMicrosoft
} from "@fortawesome/free-brands-svg-icons";

export const getPortfolio = () => [
  {
    id: uniqueId("portfolio_item"),
    title: "Windermere Suites",
    relation: ["sites"],
    intro:
      "Site for the award winning Windermere Suites hotel in the lake district.",
    content: (
      <React.Fragment>
        <p>
          Site for the award winning Windermere Suites hotel in the lake
          district. Developed using wordpress and designed by{" "}
          <a
            href="https://www.neilburnett.co.uk/"
            title="Burnett Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Burnett Design
          </a>.
        </p>

        <p>
          <a
            href="https://www.windermeresuites.co.uk/"
            title="Windermere Suites"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
        </p>
      </React.Fragment>
    ),
    imageUrl: "../images/winsuites.jpg",
    thumbUrl: "../images/winsuites.jpg"
  },
  {
    id: uniqueId("portfolio_item"),
    title: "Blacks Solicitors",
    relation: ["sites"],
    intro:
      "Site developed for Blacks Solicitors who provide a multitude of services across the UK.",
    content: (
      <React.Fragment>
        <p>
          Site developed for Blacks Solicitors who provide a multitude of
          services across the UK. Developed using wordpress and designed by{" "}
          <a
            href="https://www.neilburnett.co.uk/"
            title="Burnett Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Burnett Design
          </a>. A lot of work was done based around different types of queries
          and content relationships which led to some interesting challenges
          when it came to setting up searches, sub page linking, etc.
        </p>

        <p>
          <a
            href="https://www.lawblacks.com/"
            title="Blacks Solicitors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
        </p>
      </React.Fragment>
    ),
    imageUrl: "../images/blacks.jpg",
    thumbUrl: "../images/blacks.jpg"
  },
  {
    id: uniqueId("portfolio_item"),
    title: "Shire Homes",
    relation: ["sites"],
    intro:
      "Developed for Shire Homes who provide building services across Cumbria.",
    content: (
      <React.Fragment>
        <p>
          This site was built from designs supplied by{" "}
          <a
            href="https://www.neilburnett.co.uk/"
            title="Burnett Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Burnett Design
          </a>{" "}
          and had some interesting challenges when it came to constructing the
          background elements across the site. Like many of the other projects,
          this one uses WordPress.
        </p>
        <p>
          <a
            href="https://www.shire-homes.co.uk"
            title="Shire Homes"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
        </p>
      </React.Fragment>
    ),
    imageUrl: "../images/shire.jpg",
    thumbUrl: "../images/shire.jpg"
  },
  {
    id: uniqueId("portfolio_item"),
    title: "Bigland Hall",
    relation: ["sites"],
    intro:
      "Site developed for Bigland Hall who provide luxury cottages in the Lake District.",
    content: (
      <React.Fragment>
        <p>
          Designs supplied by{" "}
          <a
            href="https://www.neilburnett.co.uk/"
            title="Burnett Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Burnett Design
          </a>, this was one of the first sites I worked on in a freelance
          setting and allowed for one to really get to grips with WordPress.
        </p>
        <p>
          <a
            href="https://www.biglandhallcottages.co.uk"
            title="Bigland Hall Cottages"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
        </p>
      </React.Fragment>
    ),
    imageUrl: "../images/bigland.jpg",
    thumbUrl: "../images/bigland.jpg"
  },
  {
    id: uniqueId("portfolio_item"),
    title: "Enjoy Mull",
    relation: ["sites"],
    intro:
      "Designed and built for Enjoy Mull who run wildlife tours and accommodation on the Isle of Mull.",
    content: (
      <React.Fragment>
        <p>
          Enjoy Mull was designed and built by myself, originally it had a
          different plugin to manage custom elements for building the pages.
          However after discovering ACF (Advanced Custom Fields), things got a
          whole lot easier. I continue to maintain this site updating and
          optimizing where possible.
        </p>
        <p>
          <a
            href="https://www.enjoymull.co.uk"
            title="Enjoy Mull"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
        </p>
      </React.Fragment>
    ),
    imageUrl: "../images/enjoymull.jpg",
    thumbUrl: "../images/enjoymull.jpg"
  },
  {
    id: uniqueId("portfolio_item"),
    title: "Sussex Garden School",
    relation: ["sites"],
    intro:
      "Site developed for Sussex Garden School who provide gardening courses a numerous venues.",
    content: (
      <React.Fragment>
        <p>
          <a
            href="https://www.neilburnett.co.uk/"
            title="Burnett Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Burnett Design
          </a>{" "}
          approached me to build Sussex Garden School in WordPress, with it
          being one of the first sites I'd work on in a freelance setting it
          definitely had some interesting challenges lined up. Overall very
          happy with the result.
        </p>
        <p>
          <a
            href="https://www.sussexgardenschool.com"
            title="Sussex Garden School"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
        </p>
      </React.Fragment>
    ),
    imageUrl: "../images/sussex.jpg",
    thumbUrl: "../images/sussex.jpg"
  },
  {
    id: uniqueId("portfolio_item"),
    title: "Fiona Clucas",
    relation: ["sites"],
    intro:
      "A site designed and built for Fiona Clucas, a wildlife and nature artist in Cumbria.",
    content: (
      <React.Fragment>
        <p>
          This was a site designed and built by myself, it also makes use of
          some custom JavaScript that queries the WordPress API. I was very
          interested in how well the API had been built and the results ended up
          being quite pleasing. The backend is running WordPress and the front
          end has a mixture of both PHP and JavaScript to handle API queries.
        </p>
        <p>
          <a
            href="https://www.fiona-clucas.co.uk"
            title="Fiona Clucas"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
        </p>
      </React.Fragment>
    ),
    imageUrl: "../images/fclucas.jpg",
    thumbUrl: "../images/fclucas.jpg"
  }
];

export const getPages = () => [
  {
    id: "about",
    title: "About",
    content: (
      <div className="asFlex alignStart">
        <img
          src="../images/profile.png"
          alt="Sam Fereday - Freelance Web Developer"
          className="profilePicture"
        />

        <div>
          <p>
            Coming from a self-taught background, over the years I've jumped
            from strength to strength fulfilling both an insatiable curiosity
            and desire to learn, especially when it comes to technology.
          </p>

          <p>
            For the most part programming has been my main interest over the
            years, but more recently I decided to train my creative skills at
            Falmouth University where I can work on bringing development and
            creativity together.
          </p>

          <p>
            Development still offers an endless supply of new endeavours however
            and I'm always looking forward to what can be learnt and crafted
            next.
          </p>

          <p>I work primarily with the following:</p>

          <dl className="iconList">
            <dd>
              <FontAwesomeIcon icon={faFileCode} />
              <span className="tag">CSS / HTML</span>
            </dd>
            <dd>
              <FontAwesomeIcon icon={faReact} />
              <span className="tag">React</span>
            </dd>
            <dd>
              <FontAwesomeIcon icon={faJs} />
              <span className="tag">JavaScript</span>
            </dd>
            <dd>
              <FontAwesomeIcon icon={faWordpress} />
              <span className="tag">Wordpress</span>
            </dd>
            <dd>
              <FontAwesomeIcon icon={faCode} />
              <span className="tag">C# (Unity3D)</span>
            </dd>
            <dd>
              <FontAwesomeIcon icon={faMicrosoft} />
              <span className="tag">.NET</span>
            </dd>
          </dl>

          <p>
            Please feel free to{" "}
            <a href="../files/CV.pdf" target="_blank" rel="noopener noreferrer">
              download a copy of my CV
            </a>.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <React.Fragment>
        <p>
          You can reach me directly via email, or if you'd prefer to see a few
          projects that I've worked on over the years you can find them on my
          Github page:
        </p>
        <dl className="iconList">
          <dd>
            <Obfuscate email="sdfereday.dev@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="tag">Email</span>
            </Obfuscate>
          </dd>
          <dd>
            <a
              href="https://github.com/sdfereday"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="tag">Github</span>
            </a>
          </dd>
        </dl>
      </React.Fragment>
    )
  }
];
