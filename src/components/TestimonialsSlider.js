import styled from "styled-components";
import Slider from "./Slider";

export const AuthorImg = styled.img``;

export const ImgBox = styled.div``;

export const AuthorTitle = styled.p``;

export const AuthorName = styled.p``;

export const AuthorBox = styled.div``;

export const Testimonial = styled.p``;

export const TextBox = styled.div``;

export const TestimonialsBox = styled.div``;

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
