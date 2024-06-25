import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import SectionTitle from './SectionTitle';

const activitiesData = [
  { title: 'Webmaster', organization: 'DanceTroupe',url: 'https://dancetroupe.mit.edu'  },
  { title: 'Finance New Member Educator', organization: 'Women Business Leaders', url: 'http://wbl.mit.edu/' },
  { title: 'Outreach Lead', organization: 'MITxHarvard Women in AI', url: 'https://mitharvardwai.github.io/' }
];

const ActivitiesSection = () => {
  return (
    <div
    
    >
      <SectionTitle title="Activities and Societies" />
      <Grid container spacing={2} direction="column" alignItems="center" style={{ marginTop: '10px' }}>
        {activitiesData.map((activity, index) => (
          <Grid item key={index}>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              <span role="img" aria-label="sparkles">✨</span> {activity.title} @ <Link href={activity.url} color="primary">{activity.organization}</Link>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ActivitiesSection;
