export const uniqueId = (pre = "") =>
  `${pre}${pre.length ? "_" : ""}` +
  (
    Number(String(Math.random()).slice(2)) +
    Date.now() +
    Math.round(performance.now())
  ).toString(36);
