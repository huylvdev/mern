import { Container } from '@material-ui/core';
import { getPost } from '../api/Post';
import PostBody from '../components/PostBody';
import Seo from '../components/seo';
import Tag from '../components/Tag';
export default function Post(props) {

    const { tag, category, title, content, description } = props
    return (
        <>
            <Seo title={title} description={description} />
            <Container maxWidth='md'>
                <PostBody content={content} />
                <Tag tags={tag} />
            </Container>
        </>
    )
}

export async function getServerSideProps({ query }) {
    let data = await getPost(query.postId);
    return { props: data }
}