/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import {useStyles} from './Tabs.theme.js';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {Details} from '../Details/Details.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Component = ({description, country, region, type, taste, purpose, material}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.aaa}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label={<span className={classes.bbb}>Opis</span>} {...a11yProps(0)} />
          <Tab label={<span className={classes.bbb}>Szczegóły</span>} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Details country={country} region={region} material={material} taste={taste} purpose={purpose} type={type}/>
      </TabPanel>
    </div>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  country: PropTypes.string,
  region: PropTypes.string,
  type: PropTypes.string,
  taste: PropTypes.string,
  purpose: PropTypes.string,
  material: PropTypes.string,
};

export {
  Component as Tabs,
  // Container as Tabs,
  Component as TabsComponent,
};
