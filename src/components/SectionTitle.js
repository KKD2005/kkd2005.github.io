import React from 'react';
import Typography from '@mui/material/Typography';

const SectionTitle = ({ title }) => {
    return (
        <Typography variant="h4" className="sectionTitle" sx={{ marginTop: 4 }}>
            {title}
        </Typography>
    );
}

export default SectionTitle;
