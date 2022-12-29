import './App.css'
import Title from './components/title'
import Counter from './components/counter'
import useCountDown from './hooks/useCountDown'

// import NewYear from './assets/feliz-ano-novo.jpg'

function App() {

    const [day, hour, min, sec] = useCountDown("Jan 1, 2023 00:00:00")



  return (

    <div className="App">
      <div className="container">
        <Title title={"Contagem regressiva para o ano novo!"}/>

        <div className="countdown-container">
          <Counter title={"Dias"} number={day}/>
          <Counter title={"Horas"} number={hour}/>
          <Counter title={"Minutos"} number={min}/>
          <Counter title={"Segundos"} number={sec}/>
        </div>

      </div>
    </div>
      
  )
}

export default App
