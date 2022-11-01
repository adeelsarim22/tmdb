import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: 250 }}>
      <CircularProgress />
    </Box>
  );
}
export default Loader;