import React, { useState, useEffect } from "react";
import { NAV_TYPES } from "./consts";
import { DEFAULT_ITEM, navigationData } from "./navigationData";
import { getPortfolio, getPages } from "./data";
import IndexTemplate from "./IndexTemplate";
import "./styles.scss";

export default () => {
  const [portfolioData] = useState(getPortfolio());
  const [pageData] = useState(getPages());

  const [activeNavItem, setActiveNavItem] = useState(DEFAULT_ITEM);
  const [activeFilter, setActiveFilter] = useState(DEFAULT_ITEM.id);
  const [activePage, setActivePage] = useState(DEFAULT_ITEM.id);

  const [filteredItems, setFilteredItems] = useState([]);

  const handleOnFilterClick = filter => setActiveFilter(filter);

  const handleOnPageclick = id =>
    setActivePage(pageData.find(item => item.id === id));

  const handleOnNavItemClick = ({ id, type }) => {
    setActiveNavItem(navigationData.find(item => item.id === id));
    type === NAV_TYPES.FILTER ? handleOnFilterClick(id) : handleOnPageclick(id);
  };

  useEffect(() => {
    setFilteredItems(
      activeFilter !== DEFAULT_ITEM.id
        ? portfolioData.filter(({ relation }) =>
            relation.some(r => r === activeFilter)
          )
        : portfolioData
    );
  }, [activeFilter]);

  return (
    <IndexTemplate
      activeNavItem={activeNavItem}
      activePage={activePage}
      filteredItems={filteredItems}
      onNavItemClick={handleOnNavItemClick}
    />
  );
};
