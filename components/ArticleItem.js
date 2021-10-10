import articleStyels from '../styles/Article.module.css'
import Link from 'next/link';

const ArticleItem = ({ singleArticle }) => {
    return (
        <Link href="/article/[id]" as ={`/article/${singleArticle.id}`}>
            <a className={articleStyels.card}>
                <h3>{singleArticle.title} &rarr;</h3>
                <p>{singleArticle.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
