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
                            <HeroPost
                                id={item._id}
                                image={item.image}
                                slug={item.slug}
                                title={item.title}
                                description={item.description}
                            />

                        </Grid>
                    )}
                </Grid>
            </Container>
        );
    }
}

export default Home;
