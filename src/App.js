import data from './data';
import Header from './components/Header';
import Main from './components/Main';


export default function App(){
    const mainContent = data.map(item => {
        return(
            <Main 
                key={item.id}
                {...item}
            />
        )
    });
    return(
        <div>
            <Header />
            {mainContent}
        </div>
    );
}