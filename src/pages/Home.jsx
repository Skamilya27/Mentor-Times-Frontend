import MainCarousel from "../components/MainCarousel"
import Posts from "../components/Posts"

const Home = () => {
  return (
    <div className="container">
      <div className="mx-auto max-w-7xl px-4">
        <MainCarousel />
        <Posts />
      </div>
    </div>
  )
}

export default Home
