import SignCard from "../components/SignCard"

function Signs() {
   const signs = [
    {id: 1, name: "Aries", planet: "Mars", element: "Fire", modality: "Cardinal"},
    {id: 2, name: "Taurus", planet: "Venus", element: "Earth", modality: "Fixed"},
    {id: 3, name: "Gemini", planet: "Mercury", element: "Air", modality: "Mutable"},
    {id: 4, name: "Cancer", planet: "Moon", element: "Water", modality: "Cardinal"},
    {id: 5, name: "Leo", planet: "Sun", element: "Fire", modality: "Fixed"},
    {id: 6, name: "Virgo", planet: "Mercury", element: "Earth", modality: "Mutable"},
    {id: 7, name: "Libra", planet: "Venus", element: "Air", modality: "Cardinal"},
    {id: 8, name: "Scorpio", planet: "Mars", element: "Water", modality: "Fixed"},
    {id: 9, name: "Sagittarius", planet: "Jupiter", element: "Fire", modality: "Mutable"},
    {id: 10, name: "Capricorn", planet: "Saturn", element: "Earth", modality: "Cardinal"},
    {id: 11, name: "Aquarius", planet: "Saturn", element: "Air", modality: "Fixed"},
    {id: 12, name: "Pisces", planet: "Jupiter", element: "Water", modality: "Mutable"}
  ]


  return (
 
    <div className="home">
      <div className="signs-grid">
        {signs.map((sign) => (
          <SignCard sign={sign} key={sign.id} />
        ))}
      </div>
    </div>
  )
}

export default Signs