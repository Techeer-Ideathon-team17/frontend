import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('chat');
  };
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleStart}>시작</button>
    </div>
  );
}
export default Main;
