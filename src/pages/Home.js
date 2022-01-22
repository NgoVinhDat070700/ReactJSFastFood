const { default: Categories } = require("../components/Categories")
const { default: Footer } = require("../components/Footer")
const { default: Navbar } = require("../components/Navbar")
const { default: News } = require("../components/News")
const { default: Product_List } = require("../components/Product_List")
const { default: Slider } = require("../components/Slider")

const Home = ()=>{
    return (
        <div>
            <Slider />
            <Categories />
            <Product_List />
            <News />
        </div>
    )
}
export default Home