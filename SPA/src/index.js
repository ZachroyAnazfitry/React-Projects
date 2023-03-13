import REACTDOM from 'react-dom/client';
import List from './components/List'; 
function App() {
    // return <h1>Zxch & Anaz</h1>;
    return (
        <div>
            <h1>Zxch & Anaz</h1>
            <List />
        </div>
    );
};
const container = document.getElementById('root');
const root = REACTDOM.createRoot(container);
root.render(<App />);


// console.log("Zxch & Anaz");
