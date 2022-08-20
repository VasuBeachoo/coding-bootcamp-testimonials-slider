import styled from "styled-components";
import iconPrev from "../assets/icon-prev.svg";
import iconNext from "../assets/icon-next.svg";

export const SliderIcon = styled.img``;

export const SliderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Slider = ({ className }) => {
  return (
    <SliderBox className={className}>
      <SliderIcon src={iconPrev} alt="left-arrow-icon" />
      <SliderIcon src={iconNext} alt="right-arrow-icon" />
    </SliderBox>
  );
};

export default Slider;
