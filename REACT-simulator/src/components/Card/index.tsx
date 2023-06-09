import { Container, Title, P } from "./styled";

interface CardProps {
  title: string;
  firstProperty: string;
  secondProperty: string;
  firstResult: string | undefined;
  secondResult: string | number | undefined;
}

export const Card = ({
  title,
  firstProperty,
  secondProperty,
  firstResult,
  secondResult,
}: CardProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Container>
        <P>
          {firstProperty}: <span>{firstResult}</span>
        </P>
        <P>
          {secondProperty}: <span>{secondResult}</span>
        </P>
      </Container>
    </>
  );
};
