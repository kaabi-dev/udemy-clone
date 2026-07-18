import { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { AuthContext } from '../../../context/auth-context';

function StudentHomePage() {
  const { resetCredentials } = useContext(AuthContext);

  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
  };

  return (
    <div>
      <h1>Studen home page</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default StudentHomePage;
