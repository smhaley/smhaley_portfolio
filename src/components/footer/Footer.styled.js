import styled from "styled-components";

export const FooterDiv = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.veryDark};
  position: relative;
  bottom: 0;
  left: 0;
  height: 100px;

  svg {
    stroke: ${(props) => props.theme.light};
    margin: 5px;
  }
  svg:hover {
    stroke: ${(props) => props.theme.green};
  }

  h5 {
    font-weight: 500;
  }

  span {
    color: ${(props) => props.theme.green};
    font-weight: 600;
    padding-right: 5px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
