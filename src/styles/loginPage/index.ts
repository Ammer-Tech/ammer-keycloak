import styled from '@emotion/styled';

import { FlexAlignCenterWrapper, toEnd } from 'styles';

export const ButtonsWrapper = styled(FlexAlignCenterWrapper)`
    gap: 28px;

    width: 100%;
    margin-top: 80px;

    ${toEnd('mobile')} {
        margin-top: 40px;
    }
`;

export const SignUpWrapper = styled(FlexAlignCenterWrapper)`
    gap: 12px;

    ${toEnd('mobile')} {
        align-items: flex-start;
        flex-direction: column;
        gap: 8px;
    }
`;
