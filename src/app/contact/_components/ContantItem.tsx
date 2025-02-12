import styled from 'styled-components';
import Image from 'next/image';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  width: 575px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 800;
`;

const Description = styled.p`
  font-size: 20px;
  color: #868686;
  white-space: pre-line;
  text-align: center;
`;

const Email = styled.a`
  font-size: 20px;
  color: #868686;
  margin-top: -4px;
`;

interface Props {
  title: string;
  description: string;
  email: string;
  icon: string;
}

const ContactItem = ({ title, description, email, icon }: Props) => {
  return (
    <ItemContainer>
      <Image src={icon} alt={title} width={90} height={90} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Email href={`mailto:${email}`}>{email} →</Email>
    </ItemContainer>
  );
};

export default ContactItem;
