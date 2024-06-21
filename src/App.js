import React from 'react';
import { Avatar, Typography, Container, List, ListItem, ListItemIcon, ListItemText, Link, Grid, Icon, Paper } from '@mui/material';
import SectionTitle from './components/SectionTitle'; // Import the SectionTitle component
import BulletPointList from './components/BulletPointList';
import ExperienceCard from './components/ExperienceCard';
import datawork from './datawork.json';
import favoritesData from './datafavorites.json'
import FavoriteCard from './components/FavoriteCard';


function App() {
    return (
        <div>
            

            <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid container spacing={4} alignItems="center" justifyContent="center" minHeight="100vh">
                    <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Typography variant="h3" gutterBottom style={{ color: '#4CAF50', textAlign: 'center', marginTop: '40px' }}>
                            Hi, I'm Konnie Duan
                        </Typography>
                        <Typography variant="body1" style={{ textAlign: 'center', marginTop: '20px' }}>
                            Hi! I am an undergraduate at MIT double majoring in Computer Science and Engineering (6-3) and Finance (15-3). I excel in dynamic environments and love building strong relationships with the people I work with. I hope to continue to learn and grow, so I'm always looking for opportunities to expand my horizons!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
                            <Avatar
                                alt="Konnie Duan"
                                src="https://media.licdn.com/dms/image/C4D03AQFdjJV1idEDXg/profile-displayphoto-shrink_800_800/0/1621834633250?e=1724284800&v=beta&t=-D6ERcOzlLt4zupONavYougoGYIqFxmuHEbK6sUYUnc"
                                sx={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px' }}
                            />
                        </div>
                    </Grid>
                </Grid>

                <section id="work" className="section" style={{ marginTop: '40px' }}>
                    <SectionTitle title="Work Experience" />
                    <Grid container spacing={4} justifyContent="center">
                        {datawork.map((experience, index) => (
                            <Grid item key={index} xs={12} sm={12}>
                                <ExperienceCard
                                    title={experience.title}
                                    subheader={experience.subheader}
                                >
                                    <BulletPointList items={experience.points} />
                                </ExperienceCard>
                            </Grid>
                        ))}
                    </Grid>
                </section>

                

                <section id="faves" className="section" style={{ marginTop: '40px' }}>
                    <SectionTitle title="My Favorite Things :)" />
                    <Grid container spacing={3}>
                        {favoritesData.favorites.map((favorite, index) => (
                            <Grid item xs={12} sm={3} key={index}>
                                <FavoriteCard title={favorite.title} description={favorite.description}></FavoriteCard>
                                
                            </Grid>
                        ))}
                    </Grid>
                </section>
                <section id="contact" className="section" style={{ marginTop: '40px' }}>
                    <SectionTitle title="Contact Information" />
                    <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f0f0f0', marginTop: '20px' }}>
                        <List>
                            <ListItem button component={Link} href="mailto:konnie@example.com">
                                <ListItemIcon>
                                    <Icon>email</Icon>
                                </ListItemIcon>
                                <ListItemText primary="konnie@example.com" />
                            </ListItem>
                            <ListItem button component={Link} href="https://www.linkedin.com/in/konnie" target="_blank">
                                <ListItemIcon>
                                    <Icon>linkedin</Icon>
                                </ListItemIcon>
                                <ListItemText primary="linkedin.com/in/konnie" />
                            </ListItem>
                        </List>
                    </Paper>
                </section>
            </Container>

            <footer style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#4CAF50', color: 'white' }}>
                <Typography variant="body1">&copy; 2024 Konnie. All rights reserved.</Typography>
            </footer>
        </div>
    );
}

export default App;
