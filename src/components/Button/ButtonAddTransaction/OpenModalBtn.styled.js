import styled from '@emotion/styled';
import { stylistics } from '../../../styles/styles';

export const OpenBtn = styled.button`
position: fixed;
display: block;
text-align: center;
right: 20px;
bottom: 30px;
min-width: 44px;
height: 44px;
border-radius: 50%;
border: none;
cursor: pointer;
background: ${stylistics.colors.primaryBgBtn};
box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);

  @media screen and (min-width: 767px) and (max-width: 1279px) {
    right: 40px;
    bottom: 40px;
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    right: 85px;
    bottom: 40px;
  }
`;



