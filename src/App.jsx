
import Home from "./Home";
import AuthProvider from './Provider/AuthProvider.jsx'
import  Routes  from './Routes.jsx';
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </Router>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
