import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <div>
      <Nav />
      <h1>This is my number: {1 + 5}</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <ul>
        <li>Lorem ipsum dolor sit.</li>
        <li>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequuntur, magni.
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default Home;
