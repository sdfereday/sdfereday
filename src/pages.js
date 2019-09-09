import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { NAV_TYPES } from "./consts";

export const PortfolioPage = ({ items = [] }) => {
  const [justClosed, setJustClosed] = useState(null);
  const [bigItem, setBigItem] = useState(null);

  const handleOnContentItemClick = id =>
    setBigItem(
      bigItem && id === bigItem.id ? null : items.find(item => item.id === id)
    );

  const handleOnBigItemClose = id => {
    setBigItem(null);
    setJustClosed(id);
  };

  useEffect(() => {
    const scrollTo = document.getElementById(justClosed);
    if (!scrollTo) return;

    scrollTo.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [bigItem]);

  return !bigItem ? (
    <div className="items">
      {items.length ? (
        items.map(({ title, intro, thumbUrl, id }, i) => {
          return (
            <div
              key={i}
              id={id}
              className={classNames("item", {
                goBig: bigItem === id
              })}
            >
              <div
                className="imageWrapper"
                onClick={() => handleOnContentItemClick(id)}
              >
                <div className="overlay" />
                <img src={thumbUrl} alt={title} className="image" />
              </div>
              <div className="content">{intro}</div>
            </div>
          );
        })
      ) : (
        <div className="content">
          <p>No results.</p>
        </div>
      )}
    </div>
  ) : (
    <div className="page">
      <button
        className="close"
        onClick={() => handleOnBigItemClose(bigItem.id)}
      >
        {" "}
      </button>
      <img src={bigItem.imageUrl} alt={bigItem.title} className="largeImage" />
      <h2 className="title">{bigItem.title}</h2>
      <div className="content">{bigItem.content}</div>
    </div>
  );
};

export const ContentPage = ({ pageData = { title: "", content: "" } }) => {
  return (
    <div className="page">
      <div className="content">{pageData.content}</div>
    </div>
  );
};

export default ({ type, ...props }) => {
  const types = {
    [NAV_TYPES.FILTER]: <PortfolioPage {...props} />,
    [NAV_TYPES.PAGE]: <ContentPage {...props} />
  };

  return types[type];
};
