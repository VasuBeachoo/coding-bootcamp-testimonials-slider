import styled from "styled-components";
import TestimonialsSlider from "./components/TestimonialsSlider";
import imageTanya from "./assets/image-tanya.jpg";
import imageJohn from "./assets/image-john.jpg";

const AppContainer = styled.div``;

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

  return (
    <AppContainer>
      <TestimonialsSlider testimonialData={testimonials[0]} />
    </AppContainer>
  );
};

export default App;
