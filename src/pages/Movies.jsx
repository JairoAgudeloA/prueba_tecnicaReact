import { BarMovies } from "../components/BarMovies"
import { Footer } from "../components/Footer"
import { MoviesCards } from "../components/MoviesCards"
import { Header } from "../components/header"


export const Movies = () => {
  return (
    <>
        <Header/>
        <BarMovies/>
        <MoviesCards/>
        <Footer/>
    </>
  )
}
