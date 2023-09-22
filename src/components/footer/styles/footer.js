import styled, { keyframes } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const colorAnimation = keyframes`
  0% {
    color: red;
    border-color: red;
  }
  14.28% {
    color: orange;
    border-color: orange;
  }
  28.57% {
    color: yellow;
    border-color: yellow;
  }
  42.85% {
    color: green;
    border-color: green;
  }
  57.14% {
    color: blue;
    border-color: blue;
  }
  71.42% {
    color: indigo;
    border-color: indigo;
  }
  85.71% {
    color: violet;
    border-color: violet;
  }
  100% {
    color: red;
    border-color: red;
  }
`;

export const Name = styled.h1`
  color: red;
  margin-bottom: 20px;
  font-size: 14px;
  font-style: italic;
  text-align: center;
  border: 10px double red;
  border-radius: 50%;
  width: fit-content;
  padding: 10px;
  animation: ${colorAnimation} 6s linear infinite;
  width: 100%; /* Set the width to occupy the full width of the footer */
  margin-left: auto; /* Center horizontally */
  margin-right: auto; /* Center horizontally */
  font-family: "Montserrat", "Roboto", "Poppins", "Lato", "Oswald",
    "Playfair Display", "Raleway", "Open Sans", "Nunito", "Josefin Sans",
    "Helvetica", sans-serif;
`;
