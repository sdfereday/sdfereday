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
  faWordpress
} from "@fortawesome/free-brands-svg-icons";

export const getPortfolio = () => [
  {
    id: uniqueId("portfolio_item"),
    title: "Windermere Suites",
    relation: ["sites"],
    intro: "Site for the award winning Windermere Suites hotel in the lake district.",
    content: (
      <React.Fragment>
        <p>
          Site for the award winning Windermere Suites hotel in the lake
          district. Developed using wordpress and designed by{" "}
          <a
            href="https://www.neilburnett.co.uk/"
            title="Burnett Design"
            target="_blank"
          >
            Burnett Design
          </a>.
        </p>

        <p>
          <a
            href="https://www.windermeresuites.co.uk/"
            title="Windermere Suites"
            target="_blank"
          >
            View Site
          </a>
        </p>
      </React.Fragment>
    ),
    imageUrl: "../images/winsuites.png",
    thumbUrl: "../images/winsuitesthumb.png"
  },
  {
    id: uniqueId("portfolio_item"),
    title: "Blacks Solicitors",
    relation: ["sites"],
    intro: "Site developed for Blacks Solicitors who provide a multitude of services across the UK.",
    content: (
      <React.Fragment>
        <p>Site developed for Blacks Solicitors who provide a multitude of services across the UK. Developed using wordpress and designed by{" "}
          <a
            href="https://www.neilburnett.co.uk/"
            title="Burnett Design"
            target="_blank"
          >
            Burnett Design
          </a>. A lot of work was done based around different types of queries and content relationships which led to some interesting challenges when it came to 
          setting up searches, sub page linking, etc.
        </p>

        <p>
          <a
            href="https://www.lawblacks.com/"
            title="Blacks Solicitors"
            target="_blank"
          >
            View Site
          </a>
        </p>
      </React.Fragment>
    ),
    imageUrl: "../images/blacks.png",
    thumbUrl: "../images/blacksthumb.png"
  }
];

export const getPages = () => [
  {
    id: "about",
    title: "About",
    content: (
      <React.Fragment>
        <p>
          Coming from a self-taught background, over the years I've jumped from
          strength to strength fulfilling both an insatiable curiosity and
          desire to learn, especially when it comes to technology.
        </p>

        <p>
          For the most part programming has been my main interest over the
          years, but more recently I decided to train my creative skills at
          Falmouth University where I can work on bringing development and
          creativity together.
        </p>

        <p>
          Development still offers an endless supply of new endeavours however
          and I'm always looking forward to what can be learnt and crafted next.
        </p>

        <p>I work primarily with the following:</p>

        <dl className="iconList asFlex">
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
            <FontAwesomeIcon icon={faFileCode} />
            <span className="tag">CSS / HTML</span>
          </dd>
        </dl>
      </React.Fragment>
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
        <dl className="iconList asFlex">
          <dd>
            <Obfuscate email="sdfereday.dev@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="tag">Email</span>
            </Obfuscate>
          </dd>
          <dd>
            <a href="https://github.com/sdfereday" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              <span className="tag">Github</span>
            </a>
          </dd>
        </dl>
      </React.Fragment>
    )
  }
];
