import React from 'react';
import ReactDOM from 'react-dom/client';

import { HeaderPage } from './Components/HeaderPage';
import { WhatDo } from './Components/WhatDo';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <HeaderPage />
        <main>
            <WhatDo />
        </main>
    </>
);
