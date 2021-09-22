import ArticleList from '../components/ArticleList'
import Header from '../components/Header'
import { articles } from '../data'

export default function Home() {
  return (
    <div>
      <Header />
      <ArticleList articles={articles} />
    </div>
  )
}
