import Box from '@mui/material/Box';
export default function Habilidades() {
  return (
    <Box
      component="section"
      sx={{
        border: '1px solid white',
        position: 'fixed',  // Asegura que el componente esté fijo en la pantalla
        // Ajusta la posición en la parte inferior
        left: '46px',
        top: '59%',
        width:'100%',
        padding: '6px'
       // Asegúrate de que esté por encima del fondo de partículas
     // Color de fondo para visibilidad
      }}
    >
      <p style={{color: '#6A6789', // Color del texto blanco para contrastar con el fondo oscuro
      fontSize: '3.0rem', // Tamaño de fuente grande para visibilidad
     // Grosor del texto para mayor impacto
      textAlign: 'justify',}}>
    Habilidades
      </p>

    <Box style={{color: 'white'}}>
      <p> Hola</p>
    </Box>
    </Box>
  );
}
