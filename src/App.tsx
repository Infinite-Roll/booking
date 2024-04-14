import 'bootstrap/dist/css/bootstrap.min.css';
import "toastify-js/src/toastify.css"
import EventForm from './components/EventForm'
import { Container } from 'react-bootstrap';
import pricingTable from './assets/table.jpg';
import banner from './assets/banner.jpg';
import info from './assets/info.jpg';

function App() {

    return (
        <Container fluid>
            <nav className="banner">
                <img className='banner__img' src={banner} alt="infinite roll banner" />
            </nav>
            <section className="info">
                <img className='info__img' src={info} alt="infinite roll info" />
            </section>
            <main className='main'>
                <img className='main__img' src={pricingTable} alt="infinite roll pricing" />
                <EventForm />
            </main>
        </Container>
    )
}

export default App
