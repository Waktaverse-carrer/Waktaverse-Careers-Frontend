import { standard } from '@/app/styles/standard';
import styled from 'styled-components';

const member = ['ine', 'jingburger', 'lilpa', 'jururu', 'gosegu', 'viichan'];
type Member = 'ine' | 'jingburger' | 'lilpa' | 'jururu' | 'gosegu' | 'viichan';

const getColor = (content: string) => {
  return member.includes(content)
    ? standard.color.isedol(content as Member)
    : standard.color.main(500);
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1724.07px;
  flex-shrink: 0;
  gap: 15px;

  margin-bottom: 44px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
`;

const Title = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ArrowImg = styled.img`
  width: 7.4px;
  height: 12px;
  flex-shrink: 0;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;
`;

const SideTitle = styled.span`
  color: var(--color-grey-800);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CardList = styled.div`
  display: flex;
  width: 1724.07px;
  gap: 25px;
  flex-shrink: 0;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 266.279px;
  flex-shrink: 0;
  gap: 5px;

  cursor: pointer;
`;

const Card = styled.div`
  width: 266.279px;
  height: 200px;
  flex-shrink: 0;

  border-radius: 10px;
  background: #d9d9d9;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardTitle = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Tags = styled.div`
  display: flex;
  gap: 5px;
`;

const Tag = styled.div<{ content: string }>`
  display: inline-flex;
  height: 22px;
  padding: 2px 9.5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 5px;
  background: ${({ content }) => getColor(content)};

  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

interface Props {
  title: string;
}

export function List({ title }: Props) {
  return (
    <ListContainer>
      <Nav>
        <Left>
          <Title>{title}</Title>
          <ArrowImg src={'/images/arrow-right.svg'} />
        </Left>
        <Right>
          <SideTitle>더보기</SideTitle>
          <ArrowImg src={'/images/arrow-right.svg'} />
        </Right>
      </Nav>
      <CardList>
        <CardBox>
          <Card />
          <Info>
            <CardTitle>챤하~</CardTitle>
            <Tags>
              <Tag content='viichan'>비챤</Tag>
              <Tag content='ilust'>일러스트</Tag>
            </Tags>
          </Info>
        </CardBox>
        <CardBox>
          <Card />
          <Info>
            <CardTitle>챤하~</CardTitle>
            <Tags>
              <Tag content='viichan'>비챤</Tag>
              <Tag content='ilust'>일러스트</Tag>
            </Tags>
          </Info>
        </CardBox>
        <CardBox>
          <Card />
          <Info>
            <CardTitle>챤하~</CardTitle>
            <Tags>
              <Tag content='viichan'>비챤</Tag>
              <Tag content='ilust'>일러스트</Tag>
            </Tags>
          </Info>
        </CardBox>
        <CardBox>
          <Card />
          <Info>
            <CardTitle>챤하~</CardTitle>
            <Tags>
              <Tag content='viichan'>비챤</Tag>
              <Tag content='ilust'>일러스트</Tag>
            </Tags>
          </Info>
        </CardBox>
        <CardBox>
          <Card />
          <Info>
            <CardTitle>챤하~</CardTitle>
            <Tags>
              <Tag content='viichan'>비챤</Tag>
              <Tag content='ilust'>일러스트</Tag>
            </Tags>
          </Info>
        </CardBox>
        <CardBox>
          <Card />
          <Info>
            <CardTitle>챤하~</CardTitle>
            <Tags>
              <Tag content='viichan'>비챤</Tag>
              <Tag content='ilust'>일러스트</Tag>
            </Tags>
          </Info>
        </CardBox>
      </CardList>
    </ListContainer>
  );
}
