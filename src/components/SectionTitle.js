import React from 'react';
import Typography from '@mui/material/Typography';

const SectionTitle = ({ title }) => {
    return (
        <Typography variant="h4" className="sectionTitle" sx={{ marginTop: 4 , fontFamily: 'cursive'}}>
            {title}
        </Typography>
    );
}

export default SectionTitle;
