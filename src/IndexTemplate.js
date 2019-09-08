import React from "react";
import classNames from "classnames";
import { NAV_TYPES } from "./consts";
import { DEFAULT_ITEM, navigationData } from "./navigationData";
import PageComponents from "./pages";
import "./styles.scss";

export default ({
  activeNavItem,
  activePage,
  filteredItems = [],
  onNavItemClick = () => {}
}) => {
  return (
    <div className="app">
      <h4 className="mainHeader">Sam Fereday</h4>
      {activeNavItem.type === NAV_TYPES.FILTER ? (
        <h1 className="bigHeader">
          Makes{" "}
          {activeNavItem.id !== DEFAULT_ITEM.id ? (
            <span className="cleverText">{activeNavItem.title}</span>
          ) : (
            "Sites"
          )}
        </h1>
      ) : (
        <h1 className="bigHeader">{activeNavItem.title}</h1>
      )}
      <nav className="navigation">
        {navigationData.map(({ id, title, type }) => {
          return (
            <button
              key={id}
              className={classNames("link", {
                active: activeNavItem.id === id
              })}
              onClick={() => onNavItemClick({ id, type })}
            >
              {title}
            </button>
          );
        })}
      </nav>
      <PageComponents
        type={activeNavItem.type}
        pageData={activePage}
        items={filteredItems}
      />
    </div>
  );
};
