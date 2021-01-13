import Chip from '@material-ui/core/Chip';
export default function Tag({ tags }) {
    const listItems = tags.map((tag) =>

        <Chip key={tag} label={tag} component="a" href="#/" clickable variant="outlined" />
    );
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )

} 