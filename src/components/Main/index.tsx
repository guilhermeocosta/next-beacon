import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Title>
      <S.Logo src="/images/logo.svg" alt="Vector of a Penrose Square" />
      Next<S.Highlight>Beacon</S.Highlight>
    </S.Title>
    <S.Description>
      React SSR boilerplate made on top of NextJS with the power of Typescript,
      Styled Components, Jest, Testing Library and infinite possibilities.
    </S.Description>

    <S.Link href="https://google.com">Get started</S.Link>
  </S.Wrapper>
);

export default Main;
