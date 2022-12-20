import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { NavBar } from '../components/NavBar/NavBar'
import { Recipes } from '../components/Recipes/Recipes'

export const PrincipalLayout = () => {
  return (
   <>
    <NavBar/>
    <Header/>
    <Recipes/>
    <Footer/>
    </>

  )
}
