import { Routes, Route, Link } from 'react-router-dom'
import MarkupPage from './MarkupPage.tsx'


function MyButton() {
    return (
        <Link to = "/markup">
            <button>
                Teilnehmen!
            </button>
        </Link>
    );
}

function Header(){
    return(
      <h1>
          Wilkommen zu der wichtigsten Umfrage aller Zeiten
      </h1>
    );
}

function HomePage(){
    return (
        <div className="container">
            <Header />
            <MyButton />
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/markup" element={<MarkupPage />} />
        </Routes>
    )
}







