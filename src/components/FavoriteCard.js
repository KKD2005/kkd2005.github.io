import React from 'react';
import { Typography } from '@mui/material';

const FavoriteCard = ({ title, description }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            
                <Typography variant="body1" style={{ lineHeight: '1.6' }}><strong>{title}:</strong> {description}</Typography>
            
        </div>
    );
}

export default FavoriteCard;
