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
          xs: '63%',  // móviles: justo abajo de un logo de ~50% alto
          sm: '49%',  // tablets: tu logo es un poco más pequeño
          md: '55%',  // desktop: ajusta según imagen
        },
      }}
    >
      <Button
        variant="contained"
        endIcon={<DownloadIcon />}
        href="/download/Cv_HojadevidaAlejandraG_.pdf"
        download="Cv_HojadevidaAlejandraG_.pdf"
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
