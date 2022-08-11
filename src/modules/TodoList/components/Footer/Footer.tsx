import {
  Container,
  FilterOption,
  FiltersWrapper,
  Counter,
} from "./Footer.styles";

const Footer = () => {
  return (
    <Container>
      <Counter>99 items left</Counter>
      <FiltersWrapper>
        <FilterOption>All</FilterOption>
        <FilterOption>Active</FilterOption>
        <FilterOption>Completed</FilterOption>
      </FiltersWrapper>
    </Container>
  );
};

export default Footer;
