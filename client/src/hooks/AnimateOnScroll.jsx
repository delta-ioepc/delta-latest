import { useEffect } from "react";

const useAnimateOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const containers = document.querySelectorAll(".container");
    containers.forEach((container) => observer.observe(container));

    return () => observer.disconnect();
  }, []);
};

export default useAnimateOnScroll;
