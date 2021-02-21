import { CardMedia, Typography } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';
const Button = styled.a`
`
export default function HeroPost({ title, slug, description, id, image }) {
    return (

        <Link href={{ pathname: slug, query: { postId: id } }}>
            <div>
                <CardMedia
                    component="img"
                    alt={title}
                    height="200"
                    image={image}
                    title={title}
                />
                <Button>{title}</Button>
                <div>
                    <Typography variant="body2" color="textSecondary" component="p"> {description} </Typography>
                </div>
            </div >

        </Link>

    )
}
