import Head from 'next/head';

const HeadComponent = ({ title, description }) => (
  <Head>
    <title>Ego Test {title ? `- ${title}` : ''}</title>
    <meta name="description" content={description ? description : "Ignacio Varni's challenge"} />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <meta property="og:title" content={`Ego Test ${title ? `- ${title}` : ''}`} />
    <meta property="og:description" content={description ? description : "Ignacio Varni's challenge"} />
    <link rel="icon" href="/assets/logo.png" />
  </Head>
);

export default HeadComponent;
