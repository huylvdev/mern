import { CardMedia, Typography } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';
const Button = styled.a`
`
export default function HeroPost({ title, slug, description, id, image }) {
    return (
        <section>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={image}
                title={title}
            />
            <Link href={{ pathname: slug, query: { postId: id } }}>
                <Button>{title}</Button>
            </Link>
            <div>
                <Typography variant="body2" color="textSecondary" component="p"> {description} </Typography>
            </div>

        </section>
    )
}
