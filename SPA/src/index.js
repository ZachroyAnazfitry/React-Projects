import REACTDOM from 'react-dom/client';
import List from './components/List'; 
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    // return <h1>Zxch & Anaz</h1>;
    return (
        <div className='container'>
            <nav className='navbar sticky-top navbar-light bg-dark'>
                <h1 className='navbar-brand text-light'>Zxch & Anaz</h1>
            </nav>
            <List />
        </div>
    );
};
const container = document.getElementById('root');
const root = REACTDOM.createRoot(container);
root.render(<App />);


// console.log("Zxch & Anaz");
