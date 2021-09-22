import Link from 'next/link'
import Meta from '../../../components/Meta'
import dataStyles from '../../../styles/Data.module.css'
import { articles } from '../../../data'

const Article = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <div className={dataStyles.card}>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
      </div>
      <div className={dataStyles.card}>
        <Link href="/">Go Back</Link>
      </div>
    </>
  )
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const filtered = articles.filter((article) => article.id === id)

  return {
    props: {
      article: filtered[0],
    },
  }
}

export const getStaticPaths = async () => {
  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default Article
