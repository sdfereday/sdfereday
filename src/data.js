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
  faArtstation,
  faWordpress
} from "@fortawesome/free-brands-svg-icons";

export const getPortfolio = () => [
  {
    id: uniqueId("portfolio_item"),
    title: "Test Site",
    relation: ["sites"],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl:
      "https://xf5cp1dvpdp3alhqw1jg2xjh-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/unnamed-810x540.jpg"
  },
  {
    id: uniqueId("portfolio_item"),
    title: "Test Art",
    relation: ["art"],
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate",
    imageUrl:
      "https://xf5cp1dvpdp3alhqw1jg2xjh-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/Genes@Coop_Global_Nav1-1620x1080.jpg"
  },
  {
    id: uniqueId("portfolio_item"),
    title: "Test Art",
    relation: ["art"],
    content:
      "At vqui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate",
    imageUrl:
      "https://xf5cp1dvpdp3alhqw1jg2xjh-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/Screen-Shot-2019-05-01-at-3.20.27-PM-1620x1080.png"
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
