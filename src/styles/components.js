import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

`;

export const Content = styled.div`
@media (min-width: 1200px){
    width: 1200px!important;
    max-width: 100%;
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 1199px){
  width: 100%;
  padding: 0 30px;
}

@media screen and (max-width: 767px){
  padding: 0;
}
`;
