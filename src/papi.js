import Heading from './components/heading/heading.js';
import PapiImage from './components/papi-image/papi-image.js';
import React from 'react';

const heading = new Heading();
heading.render('papi');

const papiImage = new PapiImage();
papiImage.render();