import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import TestimonialsSlider from "./components/TestimonialsSlider";
import imageTanya from "./assets/image-tanya.jpg";
import imageJohn from "./assets/image-john.jpg";
import patternBg from "./assets/pattern-bg.svg";
import patternCurve from "./assets/pattern-curve.svg";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${patternCurve}), url(${patternBg});
  background-repeat: no-repeat;
  background-position: left bottom, 95% 40%;
  background-size: 50vw, 50vw;

  @media (max-width: 800px) {
    justify-content: flex-start;
    background-position: left bottom, 50% 5%;
    background-size: 60vw, 25rem;
  }
`;

const App = () => {
  const testimonials = [
    {
      name: "Tanya Sinclair",
      title: "UX Engineer",
      testimonial:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
      img: { src: imageTanya, alt: "image-tanya" },
    },
    {
      name: "John Tarkpor",
      title: "Junior Front-end Developer",
      testimonial:
        "If you want to lay the best foundation possible, I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      img: { src: imageJohn, alt: "image-john" },
    },
  ];

  const [index, setIndex] = useState(0);

  function nextSlide() {
    if (index === testimonials.length - 1) setIndex(0);
    else setIndex(index + 1);
  }

  function prevSlide() {
    if (index === 0) setIndex(testimonials.length - 1);
    else setIndex(index - 1);
  }

  return (
    <AppContainer>
      <GlobalStyle />
      <TestimonialsSlider
        testimonialData={testimonials[index]}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </AppContainer>
  );
};

export default App;
