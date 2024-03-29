import { ToastContainer } from 'react-toastify';
import styled from '@emotion/styled';

import { Cross } from 'components/other';

import { theme } from 'styles';

export const ToastContainerStyled = styled(ToastContainer)`
    top: 50px;

    width: 100%;
    max-width: 400px;

    @media only screen and (max-width: 480px) {
        max-width: 100%;
    }

    .Toastify__toast {
        position: relative;

        background-repeat: no-repeat;
        background-size: cover;

        padding: 24px 40px 24px 16px;

        color: #092636;
        background-color: #f6f6f6;

        border: 1px solid rgba(115, 143, 172, 0.1);
        border-radius: 16px;

        box-shadow: inset 0px 0px 54px rgba(255, 255, 255, 0.04);

        backdrop-filter: blur(30px);

        @media only screen and (max-width: 480px) {
            margin-bottom: 12px;

            border-radius: 0;
        }
    }

    .Toastify__toast-body {
        align-items: flex-start;

        padding: 0;
    }

    .Toastify__toast-icon {
        width: 24px;
    }

    /* 
.Toastify__toast--success {
}

.Toastify__toast--error {   
}

.Toastify__toast--warning {
} 
*/
`;

export const CrossStyled = styled(Cross)`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const TitleStyled = styled.p`
    font-weight: ${theme.text.normal.fontWeight};
    font-size: ${theme.text.normal.fontSize};
`;

export const ContentWrapper = styled.div`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.small.fontSize};

    transition: color 0.15s ease-in-out;
`;
