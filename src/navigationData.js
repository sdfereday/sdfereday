import { NAV_TYPES } from "./consts";

export const navigationData = [
  // {
  //   id: "all",
  //   title: "All",
  //   type: NAV_TYPES.FILTER,
  //   hideFromNav: false
  // },
  // {
  //   id: "sites",
  //   title: "Portfolio",
  //   type: NAV_TYPES.FILTER,
  //   hideFromNav: false
  // },
  // {
  //   id: "art",
  //   title: "Art",
  //   type: NAV_TYPES.FILTER,
  //   hideFromNav: false
  // },
  {
    id: "demo",
    title: "Prototypes",
    type: NAV_TYPES.PAGE,
    hideFromNav: true,
    isDefault: true
  }//,
  // {
  //   id: "about",
  //   title: "About",
  //   type: NAV_TYPES.PAGE,
  //   hideFromNav: false
  // },
  // {
  //   id: "contact",
  //   title: "Contact",
  //   type: NAV_TYPES.PAGE,
  //   hideFromNav: false
  // }
];

export const DEFAULT_ITEM = navigationData.find(x => x.isDefault) || navigationData[0];
