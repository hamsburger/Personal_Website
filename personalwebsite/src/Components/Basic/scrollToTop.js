import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  // console.log(pathname)

  useEffect(() => {
    if (pathname.split("/").length - 1 < 3) window.scrollTo({top: 0, left: 0, behavior: "instant"});
  }, [pathname]);

  return null;
}