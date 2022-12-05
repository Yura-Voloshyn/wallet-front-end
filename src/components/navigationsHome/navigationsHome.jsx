import home from '../../images/icons/home_icon.svg';
import stat from '../../images/icons/diagram_icon.svg';
import styled from '@emotion/styled';

const Icons = styled.img`
  display: inline-block;
  width: 18px;
  margin-right: 23px;
  margin-left: 3px;
`;
const Link = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-size: 18px;
  line-height: 27px;
  text-decoration: none;
  color: #000000;
`;
const Ul = styled.ul`
  margin-top: 40px;
`;

const NavigationsHome = () => {
  return (
    <div>
      <Ul>
        <li>
          <Link href="/">
            <Icons src={home} alt="" />
            Home
          </Link>
        </li>
        <li>
          <Link href="/">
            <Icons src={stat} alt="" />
            Statictics
          </Link>
        </li>
      </Ul>
    </div>
  );
};

export default NavigationsHome;
