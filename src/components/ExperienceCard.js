import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';

const ExperienceCard = ({ title, subheader, children }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <Card>
                <CardHeader
                    title={title}
                    subheader={subheader}
                    sx={{ paddingBottom: 0 }}
                />
                <CardContent
                    sx={{ paddingTop: 0, paddingBottom: 0 }}
                >
                    {children}
                </CardContent>
            </Card>
        </div>
    );
}

export default ExperienceCard;
