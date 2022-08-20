import styled from "styled-components";
import Slider from "./Slider";

export const AuthorImg = styled.img``;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AuthorTitle = styled.p``;

export const AuthorName = styled.p``;

export const AuthorBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Testimonial = styled.p``;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TestimonialsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TestimonialsSlider = ({ className, testimonialData }) => {
  return (
    <TestimonialsBox className={className}>
      <TextBox>
        <Testimonial>{testimonialData.testimonial}</Testimonial>
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
        <Slider />
      </ImgBox>
    </TestimonialsBox>
  );
};

export default TestimonialsSlider;
