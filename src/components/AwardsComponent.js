import React from 'react';
import { Typography, Grid } from '@mui/material';

const AwardsComponent = ({ awards }) => {
    return (
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
            {awards.map((award, index) => (
                <Grid item xs={12} sm={6} key={index}>
                   
                    <Typography variant="h6" gutterBottom><strong>{award.title}</strong></Typography>
                    <Typography variant="body1">{award.description}</Typography>
                    
                </Grid>
            ))}
        </Grid>
    );
};

export default AwardsComponent;
