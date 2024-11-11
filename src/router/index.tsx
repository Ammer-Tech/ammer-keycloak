import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';
import { observer } from 'mobx-react';

import * as PAGES from 'pages';

// import { useRootStore } from 'stores/initStore';
// import { dark, light } from 'styles/themes';
import * as C from './const';
import * as S from './units';

export const NavigationRouter = observer(() => {
    // const { commonStore } = useRootStore();

    // const currentTheme = commonStore.isLight ? light : dark;

    // useEffect(() => {
    //     document.body.style.color = commonStore.isLight ? '#092636' : '#ffffff';

    //     document.body.style.backgroundColor = commonStore.isLight ? '#ffffff' : '#1E2934';
    // }, [commonStore.isLight]);

    return (
        // <ThemeProvider theme={currentTheme}>
        <Router>
            <S.MainWrapper>
                <Routes>
                    <Route path={C.MAIN_PAGE} element={<PAGES.LoginPage />} />

                    <Route path={C.REGISTER_PAGE} element={<PAGES.RegisterPage />} />

                    <Route path={C.RESET_PASSWORD_PAGE} element={<PAGES.ResetPasswordPage />} />

                    <Route path={C.UPDATE_PASSWORD_PAGE} element={<PAGES.UpdatePasswordPage />} />

                    <Route path={C.VERIFY_EMAIL_PAGE} element={<PAGES.LoginVerifyEmail />} />

                    <Route path={C.EXPIRED_PAGE} element={<PAGES.LoginPageExpired />} />

                    <Route path={C.INFO_PAGE} element={<PAGES.Info />} />

                    <Route path={C.ERROR_PAGE} element={<PAGES.Error />} />

                    <Route path="*" element={<PAGES.LoginPage />} />
                </Routes>
            </S.MainWrapper>
        </Router>
        // </ThemeProvider>
    );
});
