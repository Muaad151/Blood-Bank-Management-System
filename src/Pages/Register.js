import Navbar from '../Components/Navbar2'
import Donor from '../Components/Donorform'
import Footer from '../Components/Footer'


function Landingpage() {
    return ( 
      <div className = "Landingpage" >
        <Navbar/>
        <Donor/>
        <Footer/>
      </div>
    );
}

export default Landingpage;