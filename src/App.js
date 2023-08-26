import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guardian_page from './Guardian_page';
import Chat_page from './Chat_page';
import Rating_page from './Rating_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<HomePage/>} />
          <Route path="guardian_search" element={<Guardian_page/>} />
          <Route path="guardian_chat" element={<Chat_page/>} />
          <Route path="guardian_rating" element={<Rating_page/>} />
          {/* <Route path='footer' element={<Footer/>}/>  */}
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
