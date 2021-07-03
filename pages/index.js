import Head from 'next/head';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const res = await fetch('https://httpbin.org/get');
  const data = await res.json();

  return {
    props: { data }
  };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App {data.origin}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  );
}
