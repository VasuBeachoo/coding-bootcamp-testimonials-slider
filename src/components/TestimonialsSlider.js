import styled from "styled-components";
import Slider from "./Slider";

export const AuthorImg = styled.img`
  width: clamp(15rem, 40vw, 27rem);
  box-shadow: var(--Grayish-Blue) 0px 25px 50px -12px;
`;

export const ImgBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AuthorTitle = styled.p`
  color: var(--Grayish-Blue);
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0;
`;

export const AuthorName = styled.p`
  color: var(--Dark-Blue);
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
`;

export const AuthorBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
`;

export const Testimonial = styled.p`
  color: var(--Dark-Blue);
  font-size: clamp(1rem, 2.75vw, 1.6rem);
  font-weight: 300;
  line-height: 2.3ch;
  max-width: 33ch;
  margin: 0;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.85rem;
  transform: translateX(3.5rem);
  z-index: 2;
`;

export const TestimonialsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 3.75rem 0 0;
`;

const TestimonialsSlider = ({
  className,
  testimonialData,
  nextSlide,
  prevSlide,
}) => {
  return (
    <TestimonialsBox className={className}>
      <TextBox>
        <Testimonial>&ldquo; {testimonialData.testimonial} &rdquo;</Testimonial>
        <AuthorBox>
          <AuthorName>{testimonialData.name}</AuthorName>
          <AuthorTitle>{testimonialData.title}</AuthorTitle>
        </AuthorBox>
      </TextBox>
      <ImgBox>
        <AuthorImg
          src={testimonialData.img.src}
          alt={testimonialData.img.alt}
        />
        <Slider nextSlide={nextSlide} prevSlide={prevSlide} />
      </ImgBox>
    </TestimonialsBox>
  );
};

export default TestimonialsSlider;
