import React from 'react';
import { useRerenderOnStateChange } from 'evt/hooks';
import { useDownloadTerms } from 'keycloakify/login';
import { evtTermMarkdown } from 'keycloakify/login/lib/useDownloadTerms';
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName';
import type { PageProps } from 'keycloakify/login/pages/PageProps';
import { clsx } from 'keycloakify/tools/clsx';
import { Markdown } from 'keycloakify/tools/Markdown';

import type { I18n } from '../i18n';
import type { KcContext } from '../kcContext';

export default function Terms(props: PageProps<Extract<KcContext, { pageId: 'terms.ftl' }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes,
    });

    const { msg, msgStr } = i18n;

    // NOTE: If you aren't going to customize the layout of the page you can move this hook to
    // KcApp.tsx, see: https://docs.keycloakify.dev/terms-and-conditions
    useDownloadTerms({
        kcContext,
        downloadTermMarkdown: async ({ currentLanguageTag }) => {
            const tos_url = (() => {
                switch (currentLanguageTag) {
                    case 'fr':
                        return '';
                    // return `${import.meta.env.BASE_URL}terms/fr.md`;
                    default:
                        return '';
                    // return `${import.meta.env.BASE_URL}terms/en.md`;
                }
            })();

            const markdownString = await fetch(tos_url).then((response) => response.text());

            return markdownString;
        },
    });

    useRerenderOnStateChange(evtTermMarkdown);

    const { url } = kcContext;

    const termMarkdown = evtTermMarkdown.state;

    if (termMarkdown === undefined) {
        return null;
    }

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            displayMessage={false}
            headerNode={msg('termsTitle')}
        >
            <div id="kc-terms-text">
                <Markdown>{termMarkdown}</Markdown>
            </div>
            <form className="form-actions" action={url.loginAction} method="POST">
                <input
                    className={clsx(
                        getClassName('kcButtonClass'),
                        getClassName('kcButtonClass'),
                        getClassName('kcButtonClass'),
                        getClassName('kcButtonPrimaryClass'),
                        getClassName('kcButtonLargeClass'),
                    )}
                    name="accept"
                    id="kc-accept"
                    type="submit"
                    value={msgStr('doAccept')}
                />
                <input
                    className={clsx(
                        getClassName('kcButtonClass'),
                        getClassName('kcButtonDefaultClass'),
                        getClassName('kcButtonLargeClass'),
                    )}
                    name="cancel"
                    id="kc-decline"
                    type="submit"
                    value={msgStr('doDecline')}
                />
            </form>
            <div className="clearfix" />
        </Template>
    );
}
