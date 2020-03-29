import styled from 'styled-components';
import { gren, red } from '../../styles/color';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #d9d5d5;
`;

export const HeaderLogo = styled.div`

`;

export const HeaderNav = styled.div`


ul {
    display: flex;
    list-style: none;
}

li {
    font-size: 1.33em;
    padding: 0 9px;
}

li a {
  color: ${gren};
  font-weight: 300;
  letter-spacing: -0.0909090909em;
  text-decoration: none;
}

li a:hover {
  color: ${red};
  border-bottom: 2px solid ${red};
}

`;
