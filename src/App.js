import logo from "./logo.svg";
import img from "./download.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-img" alt="img" />
        <h1>Embracing a Holistic Approach to a Healthy Life</h1>
        <p>
          In today's fast-paced world, prioritizing our health has never been
          more crucial. "Thriving Through Wellness" explores the
          multidimensional aspects of a healthy life, emphasizing the importance
          of a holistic approach. From nourishing our bodies with wholesome
          nutrition to nurturing our mental and emotional well-being, this guide
          provides practical tips and insights to help you achieve balance and
          vitality. Discover how small, sustainable changes in your lifestyle
          can lead to significant improvements in your overall health and
          well-being. Dive into the journey of self-care, mindfulness, and
          positive habits, and unlock the potential to lead a life filled with
          energy, purpose, and contentment.
        </p>
      </header>
    </div>
  );
}

export default App;
