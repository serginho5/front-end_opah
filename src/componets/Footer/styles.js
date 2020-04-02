import styled from 'styled-components';
import { grey } from '../../styles/color';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

@media screen and (max-width: 930px){
  display: none;
}
`;

export const FooterText = styled.div`

p {
  color: ${grey};
  margin-bottom: 0px;
}
`;

export const FooterImg = styled.div`
  width: 63%;
img {
  margin: 0 9px;
}
`;

export const FooterLogo = styled.div`

`;
