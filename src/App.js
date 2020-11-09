import logo from './logo.svg';
import './App.css';
import { GetProjects } from "./components/project";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import {  getDataProjects } from "./data/project";
import { Component } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Box
} from '@material-ui/core/';

function App() {
  return (
    <div className="App">
      <Grid>
      <Header/>
      <GetProjects/>
      <Footer/>
      </Grid>
      

    </div>
  );
}

export default App;
