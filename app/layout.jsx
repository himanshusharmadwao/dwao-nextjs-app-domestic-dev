import Header from '@/components/layout/header'

import '@/styles/global.css'
import Footer from "@/components/layout/footer";
import { headers } from 'next/headers';
import Script from 'next/script';
import FloatingForm from '@/components/floatingForm/FloatingForm';

export const metadata = {
  title: {
    template: "%s | DWAO",
    default: "DWAO"
  },
  description: "DWAO offers digital transformation and marketing services, including analytics, CRO, performance marketing, CDP, marketing automation, SEO, and more, helping businesses enhance their online presence, optimize performance, and drive growth."
};

export default async function RootLayout({ children, searchParams }) {

  const h = await headers();
  const preview = h.get('x-preview') === '1';

  return (
    <html lang="en">
      <head>

        {/* ga4 library */}
        <Script
          id="ga4-load"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-5G4XP4S`}
        />
        {/* ✅ gtag() Init (THE MISSING PART → fixes your error) */}
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5G4XP4S');
            `
          }}
        />

        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, l, i) {
                    w[l] = w[l] || []; w[l].push({
                      'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
                }); var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-5G4XP4S');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5G4XP4S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header preview={preview} />
        {children}
        <Footer preview={preview} />
        {/* <div className='fixed right-1 md:right-5 top-1/2 -translate-y-1/2 z-[9999] px-2 py-3'>
          <FloatingForm />
        </div> */}

        {/* SequentCore Chatbot - loads after 5s delay */}
        <Script
          id="sequentcore-widget"
          strategy="lazyOnload"
          src="https://sdk.sequentcore.com/widget.js"
        />
        <Script
          id="sequentcore-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(function() {
                (function check() {
                  if (typeof SequentWidget !== 'undefined') {
                    SequentWidget.init({
                      type: 'chat',
                      baseUrl: 'https://sequentcore.com',
                      tenantId: '3266762c-3378-41ee-82aa-51d4856bea6b',
                      agentId: '19876e1a-cb74-4726-8ebb-c39b8fcbd49c',
                      branding: {
                        title: 'DWAO Assistant',
                        subtitle: 'Online',
                        avatar: '',
                        welcomeTitle: 'Hi there! I am Aria. How can I help you?',
                        welcomeMessage: '',
                        inputPlaceholder: 'Type a message...',
                      },
                      theme: {
                        primary: '#4969BB',
                        background: '#ffffff',
                        text: '#333333',
                        userBubble: '#4969BB',
                        agentBubble: '#F4F4F4',
                        borderRadius: '8px',
                      },
                      position: 'bottom-right',
                      offset: { x: 24, y: 24 },
                    });
                  } else {
                    setTimeout(check, 200);
                  }
                })();
              }, 5000);
            `,
          }}
        />
      </body>
    </html>
  );
}
