import styled from '@emotion/styled';
import { stylistics } from '../../../styles/styles';

export const OpenBtn = styled.button`
position: fixed;
right: 50px;
bottom: 40px;
display: block;
min-width: 44px;
height: 44px;
text-align: center;
cursor: pointer;
border-radius: 50px;
background-color: ${stylistics.colors.primaryBgBtn};
box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    :hover,
    :focus {
      background-color: ${stylistics.colors.primaryBgBtn};
    }
`;

// export const PlusSvg = styled.PlusSvg` 
// width: 20px;
// height: 20px;
// `;
export const SpanAdd = styled.span` 
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `;
