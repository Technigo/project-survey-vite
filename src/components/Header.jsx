import petImage from './pets_large.jpeg'

const Header = () => {
  return (
    <header style={{ padding: '10px 0', backgroundColor: 'white', color: '#fff', textAlign: 'center' }}>
      <h1 style={{ color: '#213547' }}>Your new pet</h1>
      <img src={petImage} alt="Pets" style={{ width: '100%', maxWidth: '500px' }} />
    </header>
  );
}

export default Header;