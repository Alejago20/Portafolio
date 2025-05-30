
import { Button, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

export default function Buttones() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        position: 'fixed',
        zIndex: 400,
        left: '4%',
        top: {
          xs: '80%',  // móviles pequeños bajan más
          sm: '75%',  // móviles grandes/tablets
          md: '62%',  // desktop y superior
        },
      }}
    >
      <Button
        variant="contained"
        endIcon={<DownloadIcon />}
        href="/download/Cv_HojadevidaAlejandraG.pdf"
        download="Cv_HojadevidaAlejandraG.pdf"
        sx={{
          backgroundColor: '#6A6789',
          color: 'white',
          '&:hover': {
            backgroundColor: '#5a5678',
          },
        }}
      >
        Descargar CV
      </Button>
    </Stack>
  );
}
