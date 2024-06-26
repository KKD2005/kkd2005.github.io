import React from 'react';
import { CssBaseline, Container, Grid, Avatar, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './components/SectionTitle';
import BulletPointList from './components/BulletPointList';
import ExperienceCard from './components/ExperienceCard';
import datawork from './datawork.json';
import favoritesData from './datafavorites.json';
import FavoriteCard from './components/FavoriteCard';
import SkillsComponent from './components/SkillsComponent';
import skillsdata from './skillsdata.json';
import Publication from './components/Publication';
import publicationsData from './publicationsdata.json';
import awardsData from './awardsdata.json';
import AwardsComponent from './components/AwardsComponent';
import { ThemeContextProvider, useThemeContext } from './components/ThemeContext';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ActivitiesSection from './components/ActivitiesSection';
const Section = ({ children, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: '40px' }}
    >
      {children}
    </motion.section>
  );
};

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();

  return (
    // <button onClick={toggleDarkMode} style={{ position: 'fixed', top: 10, right: 10 }}>
    //   {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    // </button>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        bgcolor: 'background.default',
        color: 'text.primary',
         top: 10, right: 10 
      }}
    >
      {darkMode ? 'dark mode' : 'light mode'}
      <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <DarkModeToggle />
        <Grid container spacing={4} alignItems="center" justifyContent="center" minHeight="100vh">
          <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant="h3" gutterBottom style={{ color: '#4CAF50', textAlign: 'center', marginTop: '40px' }}>
              Hi, I'm Konnie Duan
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center', marginTop: '20px' }}>
              I am an undergraduate at MIT double majoring in Computer Science and Engineering (6-3) and Finance (15-3). I excel in dynamic environments and love building strong relationships with the people I work with. I hope to continue to learn and grow, so I'm always looking for opportunities to expand my horizons!
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

        <Section id="work">
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
        </Section>

        <Section id="publications">
          <SectionTitle title="Publications and Presentations" />
          <Publication items={publicationsData} />
        </Section>
        <Section id="activities">
          <ActivitiesSection></ActivitiesSection>
        </Section>
        <Section id="faves">
          <SectionTitle title="My Favorite Things :)" />
          <Grid container rowSpacing={0} columnSpacing={2}>
            {favoritesData.favorites.map((favorite, index) => (
              <Grid item xs={12} sm={3} key={index}>
                <FavoriteCard title={favorite.title} description={favorite.description}></FavoriteCard>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section id="awards">
          <SectionTitle title="Awards and Honors" />
          <AwardsComponent awards={awardsData.awards} />
        </Section>

        <Section id="skills">
          <SectionTitle title="Technical Skills" />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {skillsdata.ComputerLanguages && (
                <SkillsComponent
                  header="Computer Languages"
                  skillsList={skillsdata.ComputerLanguages}
                />
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {skillsdata.Tools && (
                <SkillsComponent
                  header="Tools"
                  skillsList={skillsdata.Tools}
                />
              )}
              {skillsdata.Skills && (
                <SkillsComponent
                  header="Skills"
                  skillsList={skillsdata.Skills}
                />
              )}
            </Grid>
          </Grid>
        </Section>

        <Section id="contact">
          <Typography variant="h4" className="sectionTitle" sx={{ marginTop: 4, marginBottom: 2 }}>
            <strong>Let's get in touch! My information:</strong>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" marginRight={1} gutterBottom><strong>Email:</strong></Typography>
              <Typography variant="body1" component={Link} href="mailto:konnie@mit.edu">konnie@mit.edu</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" marginRight={1} gutterBottom><strong>LinkedIn:</strong></Typography>
              <Typography variant="body1" component={Link} href="https://www.linkedin.com/in/konnie-duan" target="_blank">linkedin.com/in/konnie-duan</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" marginRight={1} gutterBottom><strong>Github:</strong></Typography>
              <Typography variant="body1" component={Link} href="https://github.com/KKD2005" target="_blank">github.com/KKD2005</Typography>
            </Grid>
          </Grid>
        </Section>
      </Container>

      <footer style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#4CAF50', color: 'white' }}>
        <Typography variant="body1">&copy; 2024 Konnie. All rights reserved.</Typography>
      </footer>
    </ThemeContextProvider>
  );
}

export default App;
