
import { Typography } from '@material-ui/core';
export default function PostBody({ content }) {
    return (
        <Typography variant="body1" color="textPrimary" >
            <div
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </Typography>
    )
}
