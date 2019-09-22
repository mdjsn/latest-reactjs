import styled from "styled-components";

export const Background = styled.img({
  position: "fixed",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  maxWidth: "100vw",
  height: "100vh",
  overflow: "hidden",
  objectPosition: "top",
  objectFit: "cover",
  transition: "all 150ms ease-in",
  opacity: 1
});
