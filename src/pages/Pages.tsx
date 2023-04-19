import { Routes, Route } from 'react-router-dom';

import { Button } from 'shared/ui/Button/Button';

export const Pages = () => (
    <Routes>
        <Route path="" element={<Button>main page</Button>} />
        <Route path="test" element={<Button>test page</Button>} />
    </Routes>
);
