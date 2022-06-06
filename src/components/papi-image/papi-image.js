import Papi from './papi.jpg';
import './papi-image.scss';

class PapiImage {
    render() {
        const img = document.createElement('img');
        img.src = Papi;
        img.alt = "Papi";
        img.classList.add('papi-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default PapiImage;