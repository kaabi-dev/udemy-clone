import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/auth';
import RouteGuard from './components/route-guard';
import { useContext } from 'react';
import { AuthContext } from '@/context/auth-context';
import InstructorDashboardPage from './pages/instructor';
import StudentViewCommonLayout from './components/student-view/common-layouts';
import StudentHomePage from './pages/student/home';
import NotFoundPage from './pages/not-found';
import CreateNewCoursePage from './pages/instructor/create-new-course-page';

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path='/auth'
        element={
          <RouteGuard
            element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      <Route
        path='/instructor'
        element={
          <RouteGuard
            element={<InstructorDashboardPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path='/instructor/create-new-course'
        element={
          <RouteGuard
            element={<CreateNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      <Route
        path='/'
        element={
          <RouteGuard
            element={<StudentViewCommonLayout />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      >
        {/* If path is empty or have home, then return to student home page */}
        <Route path='' element={<StudentHomePage />} />
        <Route path='home' element={<StudentHomePage />} />
      </Route>

      {/* Page not exist! */}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
