import React from 'react';
import { Typography, Box, Card, CardContent, Link } from '@mui/material';
const Publication = ({ items }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {items.map((item, index) => (
                <Card key={index} sx={{ minWidth: 275, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h6" component="div" gutterBottom>
                            {item.title}
                        </Typography>
                        {item.authors && (
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item.authors}
                            </Typography>
                        )}
                        {item.journal && (
                            <Typography variant="body2">
                                {item.journal}
                            </Typography>
                        )}
                        {item.conference && (
                            <Typography variant="body2">
                                {item.conference}
                            </Typography>
                        )}
                        {item.date && (
                            <Typography variant="body2" color="text.secondary">
                                {item.date}
                            </Typography>
                        )}
                        {item.link && (
                            <Typography variant="body2">
                                <Link href={item.link} target="_blank" rel="noopener">
                                    Read more
                                </Link>
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            ))}
        </Box>
);
}
export default Publication