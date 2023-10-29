import Card from './components/Card'
import './styles/global.css'

export default function App() {

  return (
    <div className="min-h-screen bg-background bg-repeat bg-Red flex flex-col items-center justify-center px-5 py-16 md:pb-0 md:grid md:grid-cols-2 md:place-items-center md:pt-0 xl:px-36">
      <div className="flex flex-col justify-center space-y-6 md:p-4 lg:pr-20">
        <h1 className="text-white font-Poppins text-center font-semibold text-3xl lg:text-5xl xl:text-5xl xl:text-left">Learn to code by watching others</h1>
        <p className="text-white font-Poppins text-center leading-7 xl:text-left">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <Card></Card>
      <div className=""></div>
    </div>
  )
}

