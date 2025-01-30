import { BASENAME } from "./constants";
export const withBase = (path) => {
  if (!`${BASENAME}`) return path; // If no base URL, return path as is
  return `${BASENAME}${path.startsWith("/") ? path : `/${path}`}`;
};
