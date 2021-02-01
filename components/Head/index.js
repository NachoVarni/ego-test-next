import Head from 'next/head';

const HeadComponent = ({ title }) => (
  <Head>
    <title>Ego Test {title ? `- ${title}` : ''}</title>
    <meta name="Description" content="" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
  </Head>
);

export default HeadComponent;
