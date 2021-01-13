import { Card, Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { getHome } from '../api/Home';
import HeroPost from '../components/hero-post';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        let r = await getHome()
        this.setState({ data: r })
    }

    render() {
        const { data } = this.state
        return (
            <Container>
                <Grid container spacing={6}>
                    {data.map((item, i) =>
                        <Grid key={item._id} item xs={12} sm={6} md={4}>
                            <Card style={{ maxWidth: 345 }}>
                                {/* <Link href={{ pathname: item.slug, query: { postId: item._id } }}>
                                    <Paper>
                                        <CardMedia
                                            component="img"
                                            alt={item.title}
                                            height="140"
                                            // image={item.image}
                                            title={item.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">{item.title}</Typography>
                                            <Typography variant="body2" color="textSecondary" component="p"> {item.description} </Typography>
                                        </CardContent>
                                    </Paper>
                                </Link> */}
                                <HeroPost
                                    id={item._id}
                                    // image={item.image}
                                    slug={item.slug}
                                    title={item.title}
                                    description={item.description}
                                />
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
        );
    }
}

export default Home;
