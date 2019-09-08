import { NAV_TYPES } from "./consts";

export const navigationData = [
  // {
  //   id: "all",
  //   title: "All",
  //   type: NAV_TYPES.FILTER
  // },
  {
    id: "sites",
    title: "Portfolio",
    type: NAV_TYPES.FILTER
  },
  // {
  //   id: "art",
  //   title: "Art",
  //   type: NAV_TYPES.FILTER
  // },
  {
    id: "about",
    title: "About",
    type: NAV_TYPES.PAGE
  },
  {
    id: "contact",
    title: "Contact",
    type: NAV_TYPES.PAGE
  }
];

export const DEFAULT_ITEM = navigationData[0];
