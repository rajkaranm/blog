import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{margin: "0"}}> Welcome to the desert. We all hate reading long tech blogs but it's part of our job so Seat back, relax and read all the articles with a free mind.</p>
        <p style={{marginTop: "0"}}> I'm currently as a Software Developer but I've huge interest in cybersecurity (Only Ethically ☠️) and I'm also a hobbyist Game Maker, just for fun and learning. You can connect with me on <a href='https://x.com/imrajkaran_' target='_blank'>here</a>. </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 style={{fontSize: "1.2rem"}}>Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link style={{fontSize: "1rem"}} href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
