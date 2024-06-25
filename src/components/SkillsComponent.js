import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const SkillsComponent = ({ header, skillsList }) => {
  return (
    <Box sx={{ my: 2, mx: 'auto', textAlign: 'center' }}> 
      <Typography variant="h5" component="h2" gutterBottom>
        {header}
      </Typography>
      <List>
        {skillsList.map((skill, index) => (
          <ListItem key={index} sx={{ padding: 0 , textAlign: 'center' }}>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

SkillsComponent.propTypes = {
  header: PropTypes.string.isRequired,
  skillsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsComponent;
