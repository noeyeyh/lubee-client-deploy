import styled from "styled-components";

export default function LocationTag() {
  return (
    <Container>
      <DateText>
        맹꽁이 님과 <NumberText>387</NumberText>일 째{"\n"}꿀 모으는 날
      </DateText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`;

const DateText = styled.p`
  ${({ theme }) => theme.fonts.Body_0};
  color: ${({ theme }) => theme.colors.gray_800};
  white-space: pre-line; /* 줄 바꿈을 위해 추가 */
`;

const NumberText = styled.span`
  ${({ theme }) => theme.fonts.Ginto_20};
  color: ${({ theme }) => theme.colors.yellow};
`;