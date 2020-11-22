import * as S from './styles';

const Main = ({
  description = 'React SSR boilerplate made on top of NextJS with the power of Typescript, Styled Components, Jest, Testing Library and infinite possibilities.',
  linkText = 'Get started',
}) => (
  <S.Wrapper>
    <S.Logo
      src="/images/logo.svg"
      alt="Vector of a Penrose Square with Next Beacon written on the right side"
    />
    <S.Description>{description}</S.Description>

    <S.Link href="https://google.com">{linkText}</S.Link>
  </S.Wrapper>
);

export default Main;
