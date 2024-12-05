import styled from 'styled-components';

const ImageContainer = styled.img`
  width: 1722px;
  height: 200px;
  flex-shrink: 0;
`;

export function SmallBanner() {
  return (
    <ImageContainer src={'/images/small-banner.png'} alt={'small banner'} />
  );
}
