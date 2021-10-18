import { Container, InputSearchContainer } from './styles';

import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>
    </Container>
  );
}

export default Header;
