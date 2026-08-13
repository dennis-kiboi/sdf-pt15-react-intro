import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";

const studentsData = [
  { name: "Amina Mohamed", email: "amina.mohamed@example.com" },
  { name: "Brian Kamau", email: "brian.kamau@example.com" },
  { name: "Faith Wanjiku", email: "faith.wanjiku@example.com" },
  { name: "Kevin Ochieng", email: "kevin.ochieng@example.com" },
  { name: "Joy Cherono", email: "joy.cherono@example.com" },
  { name: "Dennis Kiprop", email: "dennis.kiprop@example.com" },
  { name: "Mercy Mwangi", email: "mercy.mwangi@example.com" },
  { name: "Victor Onyango", email: "victor.onyango@example.com" },
  { name: "Stacy Muthoni", email: "stacy.muthoni@example.com" },
  { name: "Emmanuel Hassan", email: "emmanuel.hassan@example.com" }
];

function Home() {
  
  return (
    <>
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
      <h2>Students</h2>
      <div>
        {studentsData.map(student => (
          <Card key={student.name} name={student.name} email={student.email} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
