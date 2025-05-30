// src/components/Panel.tsx
import React from 'react';
import { Box, Grid, Card, Typography } from '@mui/material';
import { FaReact, FaHtml5, FaGitAlt } from 'react-icons/fa';


   
const frontendIcons = [
  {
    id: 'react',
    node: <FaReact color="#61DAFB" />
  },
  {
    id: 'html5',
    node: <FaHtml5 color="#E34F26" />
  },
  {
    id: 'typescript',
    node: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
      />
    )
  },
  {
    id: 'javascript',
    node: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        alt="JavaScript"
      />
    )
  },
  {
    id: 'css3',
    node: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3"
      />
    )
  },
  {
    id: 'mui',
    node: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
        alt="Material‑UI"
      />
    )
  },
  {
    id: 'figma',
    node: (
      <img
        src="data:image/png;base64,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"          
      />
    )
  }
];

const backendIcons = [
  {
    id: 'csharp',
    node: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        alt="C#"
      />
    )
  },
  {
    id: 'mysql',
    node: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        alt="MySQL"
      />
    )
  },
  {
    id: 'sqlserver',
    node: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
        alt="SQL Server"
      />
    )
  },
  {
    id: 'java',
    node: (
      <img
        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
        alt="Java"
      />
    )
  }
];

const toolIcons = [
  {
    id: 'sharepoint',
    node: (
      <img
        src="https://media.licdn.com/dms/image/C5112AQHYAIlYgxKyaQ/article-cover_image-shrink_600_2000/0/1549089312346?e=2147483647&v=beta&t=iP9Qe3JLKuE6Z7l_cf9r_nMhmDG4-yT6REF17Y9jok4"
        alt="SharePoint"
      />
    )
  },
  {
    id: 'designer',
    node: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7k1SB7qurT5WuWnnigwGJ7Sfb_veIC08Lg&s"
        alt="SharePoint Designer"
      />
    )
  },
  {
    id: 'powerautomate',
    node: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIPl7zG1a0tB5Gcgi4FV2SpVeZdn_8_XNtQ&s"
        alt="Power Automate"
      />
    )
  },
  {
    id: 'git',
    node: <FaGitAlt color="#F05032" />
  },
  {
    id: 'excel',
    node: (
      <img
        src="https://img.icons8.com/color/480/000000/microsoft-excel-2019--v1.png"
        alt="Excel"
      />
    )
  }
];
 
const Panel: React.FC = () => (

  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: '7%',
      alignItems: 'center',
      position: 'relative'
    }}
  >
    <Card
      elevation={0}
      sx={{
        width: { xs: '90%', md: '60%' },
        backgroundColor: 'rgba(0,0,0,0)',
        p: 2,
        zIndex: 100
      }}
    >
 
      <Grid container spacing={2} justifyContent="center">
       
        {/* Frontend */}
        <Grid item xs={12}>
          <Typography variant="h6" align="center" sx={{ color: '#6A6789' }}>
            Desarrollo Frontend
          </Typography>
        </Grid>
        {frontendIcons.map(icon => (
          <Grid
            key={icon.id}
            item
            xs={4}
            sm={3}
            md={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                width: 60,
              height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.6))',
                transition: 'transform .25s',
                '&:hover': { transform: 'scale(1.2)' },
                '& img, & svg': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }
              }}
            >
              {icon.node}
            </Box>
          </Grid>
        ))}

        {/* Backend */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography variant="h6" align="center" sx={{ color: '#6A6789' }}>
            Desarrollo Backend
          </Typography>
        </Grid>
        {backendIcons.map(icon => (
          <Grid
            key={icon.id}
            item
            xs={4}
            sm={3}
            md={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                width: 60,
              height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.6))',
                transition: 'transform .25s',
                '&:hover': { transform: 'scale(1.2)' },
                '& img, & svg': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }
              }}
            >
              {icon.node}
            </Box>
          </Grid>
        ))}

        {/* Otras Herramientas */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography variant="h6" align="center" sx={{ color: '#6A6789' }}>
            Otras Herramientas
          </Typography>
        </Grid>
        {toolIcons.map(icon => (
          <Grid
            key={icon.id}
            item
            xs={4}
            sm={3}
            md={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                width: 60,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.6))',
                transition: 'transform .25s',
                '&:hover': { transform: 'scale(1.2)' },
                '& img, & svg': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }
              }}
            >
              {icon.node}
             
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  </Box>
);

export default Panel;
