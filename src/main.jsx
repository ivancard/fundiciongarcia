import React from 'react';
import ReactDOM from 'react-dom/client';
import { Contact } from './Components/Contact';
import { Feet } from './Components/Feet';
import { Footer } from './Components/Footer';

import { HeaderPage } from './Components/HeaderPage';
import { WhatDo } from './Components/WhatDo';
import { Products } from './Components/WhatDo/Products';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <HeaderPage />
        <main>
            <WhatDo />
            <Products />
            <Feet />
            <Contact />
            <Footer />
        </main>
    </>
);
