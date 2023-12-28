import Category from "./components/Category"
import MainPage from "./components/MainPage"
import PopularCategories from "./components/PopularCategories"


export default function Home() {
  return (
    <main>
    <MainPage />
    <Category />
    <PopularCategories />
    </main>
  )
}