import styled from "styled-components";
import iconPrev from "../assets/icon-prev.svg";
import iconNext from "../assets/icon-next.svg";

export const SliderIcon = styled.img`
  opacity: 0.5;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const SliderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 6.2rem;
  user-select: none;
  background-color: var(--White);
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 0.9rem 1.05rem;
`;

const Slider = ({ className, nextSlide, prevSlide }) => {
  return (
    <SliderBox className={className}>
      <SliderIcon src={iconPrev} alt="left-arrow-icon" onClick={prevSlide} />
      <SliderIcon src={iconNext} alt="right-arrow-icon" onClick={nextSlide} />
    </SliderBox>
  );
};

export default Slider;
