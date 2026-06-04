import signos from "./Signs"
import SignCard from "../components/SignCard"

function Signos() {
  return (
    <div className="grid">
      {signos.map((signo) => (
        <SignCard key={signo.nome} signo={signo} />
      ))}
    </div>
  )
}

export default Signos