import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Article.module.css';

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map(each => (
                <ArticleItem key={each.id} singleArticle={each}/>
            ))}
        </div>
    )
}

export default ArticleList
