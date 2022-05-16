import React from 'react';
import ReactDOM from 'react-dom/client';

import { HeaderPage } from './Components/HeaderPage';
import { WhatDo } from './Components/WhatDo';
import { Products } from './Components/WhatDo/Products';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <HeaderPage />
        <main>
            <WhatDo />
            <Products />
        </main>
    </>
);
