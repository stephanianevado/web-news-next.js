import {server} from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import dataStyles from '../../../styles/Data.module.css'


const article = ({article}) => {
    return (
        <>
            <Meta title={article.title} description={article.excerpt}/>
            <div className={dataStyles.card}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
                <br/>
            </div>
            <div className={dataStyles.card}>
                <Link href='/'>Go Back</Link>
            </div>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false,
    }
}

export default article