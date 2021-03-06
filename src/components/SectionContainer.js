import React, { useEffect } from "react";
import styled from "styled-components";
import { useIntersectionObserver } from "./hooks";

const SectionDiv = styled.div`
  min-height: 100vh;
  .section-container {
    padding-top: 35px;
  }
`;

const SectionContainer = React.forwardRef((props, ref) => {
  const { activeHandler, index, children } = props;

  const node = ref;

  const entry = useIntersectionObserver(node, {
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
    freezeOnceVisible: false,
  });

  useEffect(() => {
    if (entry) {
      const isVisible = entry.isIntersecting;
      if (isVisible) {
        activeHandler(index);
      }
    }
  }, [entry, index, activeHandler]);

  return (
    <SectionDiv>
      <div className="section-container" ref={node}>
        {children}
      </div>
    </SectionDiv>
  );
});

export default SectionContainer;
