import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AnimatedText from './AnimatedText';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_8ntpqfp',         
      'template_5li8agc',        
      formRef.current,
      'pSGEUDAzBCiw2Y8dK'       
    )
    .then((result) => {
      console.log('Mensaje enviado:', result.text);
      toast.success('¡Mensaje enviado con éxito!', {
        position: "top-center",
        autoClose: 3000,
      });
      setNombre('');
      setCorreo('');
      setMensaje('');
    }, (error) => {
      console.error('Error al enviar:', error.text);
      toast.error('Error al enviar el mensaje, intenta de nuevo.', {
        position: "top-center",
        autoClose: 3000,
      });
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: { xs: 5, sm: 8, md: '9%' },
          px: 2,
        }}
      >
        <Card
          sx={{
            width: { xs: '100%', sm: '80%', md: '50%', lg: '40%', xl: '30%' },
            backgroundColor: 'black',
            p: 2,
            position: 'relative',
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: 5,
              color: '#6A6789',
              fontSize: '1.8rem',
              fontWeight: 'bold',
            }}
          >
            <AnimatedText message="Contacto" />
          </Box>

          <form ref={formRef} onSubmit={handleSubmit}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Nombre"
                  margin="normal"
                  fullWidth
                  sx={inputStyles}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  name="name"
                />
                <TextField
                  label="Correo"
                  margin="normal"
                  fullWidth
                  sx={inputStyles}
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                  type="email"
                  name="email"
                />
                <TextField
                  label="Mensaje"
                  margin="normal"
                  multiline
                  rows={4}
                  fullWidth
                  sx={inputStyles}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                  name="message"
                />
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                type="submit"
                size="small"
                sx={{
                  backgroundColor: '#6A6789',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#5a5678',
                  },
                }}
              >
                Enviar
              </Button>
            </CardActions>
          </form>
        </Card>
      </Box>

      {/* Contenedor necesario para mostrar los toasts */}
      <ToastContainer />
    </>
  );
}

const inputStyles = {
  '& .MuiInputLabel-root': {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#000000',
    '& fieldset': {
      borderColor: '#6A6789',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: '#6A6789',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6A6789',
    },
  },
  '& .MuiInputBase-input': {
    color: '#ffffff',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#6A6789',
  },
};
