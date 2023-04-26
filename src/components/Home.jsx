import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Footer} from "./Footer";
import { ResponsiveAppBar } from './AppBar';
import { Bootstrap } from './customersSVG/Bootstrap';
import { Css3 } from './customersSVG/Css3'
import { Express } from './customersSVG/Express'
import { Github } from './customersSVG/Github'
import { Html } from './customersSVG/Html'
import { Js } from './customersSVG/Js'
import { Mui } from './customersSVG/Mui'
import { Mysql } from './customersSVG/Mysql'
import { ReactIcon } from './customersSVG/ReactIcon'

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <div>
        hola! soy Dimitri lagares!<br/>
        Programador fullstack en desarrollo,
        en la actualidad he manejado las siguientes tecnologías:<br/>
      </div>
      <Stack direction="row" style={{ m:'auto', justifyContent:'center', border: 'solid', borderRadius: 50, borderBlockColor:'#f0f0f0'}} spacing={2}>
      <Avatar>
        <Html/>
      </Avatar>

      <Avatar>
        <Css3/>
      </Avatar>

      <Avatar>
        <Js/>
      </Avatar>

      <Avatar>
        <Bootstrap/>
      </Avatar>

      <Avatar>
        <Mui/>
      </Avatar>

      <Avatar>
        <Express/>
      </Avatar>
      
      <Avatar>
        <Github/>
      </Avatar>
      
      <Avatar>
        <Mysql/>
      </Avatar>
      
      <Avatar>
        <ReactIcon/>
      </Avatar>
    </Stack>
      <div>
        👇🏽Aqui una captura de pantalla de algunos de los proyectos realizados con su link a su repositorio en GitHub👇🏽
      </div>
      <div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Home;