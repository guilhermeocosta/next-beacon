import styled from 'styled-components';

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
`;

export const Logo = styled.img`
  margin-right: 2rem;
  width: min(100%, 80rem);
`;

export const Description = styled.h2`
  max-width: 80rem;
  font-size: 2.2rem;
  font-weight: 400;
`;

export const Link = styled.a`
  font-size: 2.2rem;
`;
