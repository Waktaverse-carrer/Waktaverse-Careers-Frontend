'use client';

import styled from 'styled-components';
import ContactItem from './_components/ContantItem';

const PageTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  width: 100%;
  text-align: center;
`;

const GridContainer = styled.div`
  position: relative;
  margin: 50px auto 0 auto;
  width: 1150px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 45px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background-color: #000;
    transform: translateX(-50%);
    border-radius: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

const data = [
  {
    title: '신고/제보하기',
    description:
      'WAKTAVERSE CAREER 이용 중 문제가 있거나\n저작권, 템플릿에 이상이 있다면 신고해주세요.',
    email: 'report@waktaverse.career',
    icon: '/images/contact/report.svg',
  },
  {
    title: '기능 제안',
    description:
      'WAKTAVERSE CAREER 서비스에 원하시는\n기능이 있다면 제안해주세요.',
    email: 'proposal@waktaverse.career',
    icon: '/images/contact/proposal.svg',
  },
  {
    title: '정보 추가/수정 요청',
    description:
      'WAKTAVERSE CAREER 서비스에서\n누락되거나 오기재된 내용이 있다면 제보해주세요.',
    email: 'data@waktaverse.career',
    icon: '/images/contact/data.svg',
  },
  {
    title: '기타 문의',
    description:
      'WAKTAVERSE CAREER에 궁금한 점이\n있으시면 언제든 문의해주세요.',
    email: 'contact@waktaverse.career',
    icon: '/images/contact/contact.svg',
  },
];

const Contact = () => {
  return (
    <div style={{ marginTop: '3rem' }}>
      <PageTitle>문의</PageTitle>
      <GridContainer>
        {data.map((item, idx) => (
          <ContactItem
            key={`contact_${idx}`}
            title={item.title}
            description={item.description}
            email={item.email}
            icon={item.icon}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default Contact;
