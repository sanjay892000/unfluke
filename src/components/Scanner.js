import React, { useState } from 'react';
import { TextField, Box, Button, MenuItem, Select, InputLabel, FormControl, Switch, Typography, Paper, Grid, Chip, List, ListItem, ListItemText } from '@mui/material';
import { Skeleton } from '@mui/lab';
import '../style/scanner.css';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
const options = [
  "MACD", "Money Flow Index (MFI)", "Volume Weighted Average Price (VWAP)",
  "Rate of change (ROC)", "Relative Strength Index (RSI)", "1 day Rate Of Change (ROC)"
];
const AdvancedList = styled(List)(({ theme }) => ({
  maxHeight: 200,
  overflowY: 'auto',
}));
const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));


function Scanner() {
  const [loading, setLoading] = useState(true);
  const [option, setoption] = React.useState('');
  const [selectedOptions, setSelectedOptions] = useState(['LTP', '>', 'SMA']);
  const handleChange = (event) => {
    setoption(event.target.value);
  };
  setTimeout(() => {
    setLoading(false);
  }, 1000);


  return (
    <Box className="containers" component={Paper} elevation={3} p={3}>
      {loading ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Skeleton variant="text" height={60} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skeleton variant="rectangular" height={56} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skeleton variant="rectangular" height={56} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skeleton variant="rectangular" height={56} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skeleton variant="rectangular" height={56} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={300} />
          </Grid>
        </Grid>
      ) : (
        <>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Description" variant="outlined" fullWidth style={{ marginLeft: 16 }} />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Box flex={1} className="container1" component={Paper} elevation={3}>
                <SearchContainer className='searchcontainer'>
                  <SearchIcon className='searchicon' />
                  <TextField className='searchoption' label="Search" variant="outlined" fullWidth />
                </SearchContainer>
                <AdvancedList>
                  {options.map((option, index) => (
                    <ListItem button key={index}>
                      <ListItemText primary={option} />
                    </ListItem>
                  ))}
                </AdvancedList>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Filter</Typography>
              <FormControl fullWidth margin="normal">
                <Box sx={{ minWidth: 120 }} display="flex" justifyContent="space-between">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Options</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={option}
                      label="Options"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Equity</MenuItem>
                      <MenuItem value={10}>indices</MenuItem>
                      <MenuItem value={20}>Options</MenuItem>
                      <MenuItem value={30}>futures</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Company</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={option}
                      label="Company"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Nefty</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={10}>Equity</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={10}>Indices</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </FormControl>
              <FormControl fullWidth margin="normal" sx={{mb:3}}>
                <Button variant="outlined" fullWidth>
                  Spot
                </Button>
              </FormControl>
              <Box display="flex" justifyContent="space-between">
                <TextField label="Start Time" type="time" defaultValue="09:30" InputLabelProps={{ shrink: true }} inputProps={{ step: 300 }} />
                <TextField label="End Time" type="time" defaultValue="15:00" InputLabelProps={{ shrink: true }} inputProps={{ step: 300 }} />
              </Box>
              <Box mt={2} display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                  <Switch />
                  <Typography>Duplicate results</Typography>
                </Box>
                <TextField label="Interval" type="number" defaultValue="5" InputProps={{ endAdornment: <Typography>min</Typography> }} />
              </Box>
              <Box mt={2} display="flex" justifyContent="space-between">
                <FormControl component="fieldset">
                  <Box display="flex" alignItems="center">
                    <Switch defaultChecked />
                    <Typography>Satisfy</Typography>
                  </Box>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5} >
              <Typography variant="h6">Operations</Typography>
              <Box display="flex" flexDirection="column">
                <Box display="flex" justifyContent="space-between" mb={1}>
                  {['+', '-', '*', '/'].map((op, index) => (
                    <Button key={index} variant="outlined" className="operation-button">
                      {op}
                    </Button>
                  ))}
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  {['Number', 'Stock LTP'].map((op, index) => (
                    <Button key={index} variant="outlined" className="operation-button">
                      {op}
                    </Button>
                  ))}
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  {['>', '<', '>=', '<='].map((op, index) => (
                    <Button key={index} variant="outlined" className="operation-button">
                      {op}
                    </Button>
                  ))}
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  {['Cross from above to below', 'Cross from below to above'].map((op, index) => (
                    <Button key={index} variant="outlined" className="operation-button">
                      {op}
                    </Button>
                  ))}
                </Box>
                <Box display="flex" justifyContent="space-between">
                  {['OR', 'AND', 'SUBTRACT'].map((op, index) => (
                    <Button key={index} variant="outlined" className="operation-button">
                      {op}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Paper variant="outlined" className="selected-options">
              {selectedOptions.map((option, index) => (
                <Chip key={index} label={option} onDelete={() => { }} className="chip" />
              ))}
            </Paper>
            <Box mt={2} display="flex" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Typography>Share</Typography>
                <Switch />
                <Typography>Latest result</Typography>
              </Box>
              <Box>
              <button className="action-buttons">Submit</button>
              <button className="action-buttons">Save</button>
              </Box>
            </Box>
          </Box>
          <Typography mt={4} fontStyle="italic">
            *Disclaimer will go here
          </Typography>
        </>
      )}
    </Box>
  )
}

export default Scanner
