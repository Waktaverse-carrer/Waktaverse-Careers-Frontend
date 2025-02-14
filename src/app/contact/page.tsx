'use client';

import styled from 'styled-components';
import ContactItem from './_components/ContantItem';
import { ReportIcon, ContactIcon, DataIcon } from './_assets';

const PageTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  width: 100%;
  text-align: center;
`;

const ListContainer = styled.div`
  margin: 50px auto 0 auto;
  max-width: 1150px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 52px;

  & > div:nth-child(3) {
    grid-column: span 2;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;

    & > div:nth-child(3) {
      grid-column: auto;
    }
  }
`;

const data = [
  {
    title: '신고/제보하기',
    description:
      'WAKTAVERSE CAREER 이용 중 문제가 있거나\n저작권, 템플릿에 이상이 있다면 신고해주세요',
    email: 'report@waktaverse.career',
    icon: <ReportIcon />,
  },
  {
    title: '정보 추가/수정 요청',
    description:
      'WAKTAVERSE CAREER 서비스에서\n누락되거나 오기재된 내용이 있다면 제보해주세요',
    email: 'data@waktaverse.career',
    icon: <DataIcon />,
  },
  {
    title: '기타 문의',
    description:
      'WAKTAVERSE CAREER에 궁금한 점이\n있으시면 언제든 문의해주세요',
    email: 'contact@waktaverse.career',
    icon: <ContactIcon />,
  },
];

const Contact = () => {
  return (
    <div style={{ marginTop: '3rem', height: '100vh' }}>
      <PageTitle>문의</PageTitle>
      <ListContainer>
        {data.map((item, idx) => (
          <ContactItem
            key={`contact_${idx}`}
            title={item.title}
            description={item.description}
            email={item.email}
            icon={item.icon}
          />
        ))}
      </ListContainer>
    </div>
  );
};

export default Contact;
