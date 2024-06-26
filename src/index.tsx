import React, { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { kcContext as kcLoginThemeContext } from './keycloak-theme/login/kcContext';

const KcLoginThemeApp = lazy(() => import('./keycloak-theme/login/KcApp'));
// Important note:
// In this starter example we show how you can have your react app and your Keycloak theme in the same repo.
// Most Keycloakify user only want to great a Keycloak theme.
// If this is your case run the few commands that will remover everything that is not strictly related to the
// Keycloak theme:
// https://github.com/keycloakify/keycloakify-starter?tab=readme-ov-file#i-only-want-a-keycloak-theme
const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Suspense>
            {(() => {
                if (kcLoginThemeContext !== undefined) {
                    return <KcLoginThemeApp kcContext={kcLoginThemeContext} />;
                }

                return <App />;
            })()}
        </Suspense>
    </StrictMode>,
);
