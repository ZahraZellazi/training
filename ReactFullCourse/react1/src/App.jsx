import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Header/>
      <Header/> {/* i can use the code as many times as i like  */}
      <Footer/>
    </div>
  );
}
export default App;

//instrad of all of this we divise the file into a lot of componenets (header/footer/navbar).jsx

/*function App() {
  return (
    <div className="App">
      <nav>
        <a href="">home</a>
        <a href="">about</a>
        <a href="">contact</a>
        <a href="">login</a>
        <a href="">signup</a>
      </nav>
      <div>
        <h1>Hello this the header</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius magni aliquid deleniti vero ut suscipit quos corporis dolorem et quam cupiditate eos animi tempora, eaque in quidem, aspernatur exercitationem?</p>
      </div>
      <footer>
        <h3>footer</h3>
        <h3>footer</h3>
        <h3>footer</h3>
        <h3>footer</h3>
        <h3>footer</h3>
        <h3>footer</h3>
      </footer>
    </div>
  );
}

export default App;
*/
