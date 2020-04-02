import styled from 'styled-components';
import { grey } from '../../styles/color';

export const Container = styled.div`


@media screen and (min-width: 929px){
  display: none;
}
`;


export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background: rgba(255,255,255, 0.2);
`;

export const FooterText = styled.div`

p {
margin-bottom: 0px;
color: ${grey};
}
`;

export const FooterImg = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
img {
  margin: 0 9px;
}
`;

export const FooterLogo = styled.div`

`;


