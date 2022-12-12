import Media from 'react-media';

import { MainNav, Link } from './Navigation.styled';

import { ReactComponent as HomeIcon } from 'images/icons/home-icon.svg';
import { ReactComponent as DiagramIcon } from 'images/icons/diagram_icon.svg';
import { ReactComponent as MoneyIcon } from 'images/icons/money_icon.svg';


export const Navigation = () => {
  
  
  return (
    <MainNav>
      <Link to="/home">
        <HomeIcon />
        <span>Home</span>
      </Link>
      <Media
        query="(min-width: 768px)"
        render={() => (
          <Link to="diagram">
            <DiagramIcon />
            <span>Statistics</span>
          </Link>
        )}
      />

      <Media
        query="(max-width: 767px)"
        render={() => (
          <Link to="/diagram">
            <DiagramIcon />
            <span>Statistics</span>
          </Link>
        )}
      />
      <Media
        query="(max-width: 767px)"
        render={() => (
          <Link to="/currency">
            <MoneyIcon />
          </Link>
        )}
      />
    </MainNav>
  );
};
