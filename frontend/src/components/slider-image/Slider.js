import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import styles from "./Slider.module.css";
const Slider = () => {
  const [imageUrl, setImageUrl] = useState("");
  const fallbackImageUrl =
    "https://images.unsplash.com/photo-1630683924997-fe27050a0416?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=YOUR_UNSPLASH_ACCESS_KEY`
        );
        const data = await response.json();
        setImageUrl(data.urls.regular || fallbackImageUrl);
      } catch (error) {
        console.error("Error fetching the image from Unsplash", error);
        setImageUrl(fallbackImageUrl); // Use fallback image if fetch fails
      }
    };
    fetchImage();
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollPercent =
        scrollTop /
        (document.documentElement.scrollHeight - window.innerHeight);
      const offset = scrollPercent * 100; // Adjust the multiplier as needed
      document.documentElement.style.setProperty(
        "--background-position",
        `center ${offset}%`
      );
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return _jsx("div", {
    className: styles.home,
    children: _jsx("div", {
      className: styles.background,
      style: {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "var(--background-position)",
      },
      children: _jsxs("div", {
        className: styles.overlay,
        children: [
          _jsx("div", {
            className: styles.title,
            children: _jsx("h1", { children: "JOIN OUR COMMUNITY" }),
          }),
          _jsx("div", {
            className: styles.text,
            children: _jsxs("p", {
              children: [
                "In the ever-changing construction industry, we\u2019re proud to offer ",
                _jsx("span", {
                  className: "highlight",
                  children: "competitive benefits",
                }),
                " along with an ",
                _jsx("span", {
                  className: "highlight",
                  children: "education allowance",
                }),
                " to help employees continue to learn and develop. We strive to foster a work environment where relationships are valued and every team member is treated with ",
                _jsx("span", {
                  className: "highlight",
                  children: "trust and respect",
                }),
                ".",
              ],
            }),
          }),

          _jsx("div", {
            className: styles.link,
            children: [
              _jsx("a", {
                href: "/about us", // This links to the careers section
                className: styles.homeLink,
                children: "Our Career Opportunities >>",
              }),
            ],
          }),

        ],
      }),
    }),
  });
};
export default Slider;
