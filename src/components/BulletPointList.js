import React from 'react';
import { Typography } from '@mui/material';

const BulletPointList = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <Typography 
                    key={index} 
                    component="p"
                    sx={{ margin: '4px 0' }}  // Adjust margin as needed
                >
                    {item}
                </Typography>
            ))}
        </div>
    );
}

export default BulletPointList;