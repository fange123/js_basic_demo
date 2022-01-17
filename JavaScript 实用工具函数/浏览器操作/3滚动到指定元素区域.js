const smoothScroll = (element) => {
  console.log(document.querySelector(element));
  document.querySelector(element)?.scrollIntoView({
    behavior: "smooth",
  });
};
