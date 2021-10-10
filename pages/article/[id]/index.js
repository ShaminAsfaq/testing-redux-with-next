import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";

const ArticleDetails = ({ article }) => {
    // const router = useRouter();
    // const {id} = router.query;
    return (
        <>
            <Meta title={article.title}/>
            <h1>
                {article.title}
            </h1>
            <p>
                {article.body}
            </p>
            <br/>
            <Link href="/">Go Back</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);
    const articleList = await res.json();

    const idList = articleList.map(each => each.id);

    const paths = idList.map(each => ({params: {id: each.toString()}}))

    return {
        paths,
        fallback: false
    }
}

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const articleList = await res.json();

//     const idList = articleList.map(each => each.id);

//     const paths = idList.map(each => ({params: {id: each.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }

export default ArticleDetails
