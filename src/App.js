
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Card from './Components/Card';
import Data from './Data';
function App() {
const data=Data.map((item)=>{
  return (
    <Card 
    key={item.id}
    {...item}
  //   img={item.coverImg}
  //  title={item.title}
  //   rating={item.stats.rating}
  //   reviewCount={item.stats.reviewCount}
  //   location={item.location}
  //   openSpot={item.openSpots}
  //   price={item.price}
/>
  )

})
  return (
   <>
   <Navbar/>
   <Main/>
   <section className="card">
                {data}
            </section>
  
 </>

  );
}

export default App;
