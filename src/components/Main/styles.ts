import styled from 'styled-components';

import { MarginsOff } from 'styles/global';

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  align-items: center;
  display: inline-flex;
  font-size: 6rem;
  font-weight: 400;

  ${MarginsOff}
`;

export const Highlight = styled.strong`
  color: #e94560;
  font-weight: 800;
  transform: translateY(0.2rem);
`;

export const Logo = styled.img`
  margin-right: 2rem;
  width: 10rem;
`;

export const Description = styled.h2`
  max-width: 80rem;
  font-size: 2.2rem;
  font-weight: 400;
`;

export const Link = styled.a`
  font-size: 2.2rem;
  color: #fff;

  &:hover {
    color: #e94560;
  }
`;
