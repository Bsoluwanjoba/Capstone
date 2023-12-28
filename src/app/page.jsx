import Category from "./components/Category";
import MainPage from "./components/MainPage";
import PopularCategories from "./components/PopularCategories";
import Recently from "./components/recently";


export default function Home() {
  return (
    <main>
    <MainPage />
    <Category />
    <PopularCategories />
    <Recently />
    </main>
  )
}