import { useState } from 'react'

function ShowDropdown() {
    const [cities, setCities] = useState([])
  const countries = [{
    name : "India",
    value : "IN",
    cities : [
      "mumbai",
      "delhi"
    ]
  },
{
  name : "Bangaldesh",
  value : "BG",
  cities : [
    "Dhaka",
    "Chittagaon"
  ]
}]

  const FetchCities = (e) => {
    console.log(e.target.value)
    if(e.target.value) {
      let country = countries.find(country => country.value == e.target.value);
      setCities(country.cities);
    }else{
      setCities([])
    }
  }

  return (
    <div style={{    paddingTop: "15%", paddingLeft: "5%"}}>
      <select onChange={FetchCities}>
        <option value="">--Select Country--</option>
        {
          countries.map((country) => (
            <option value={country.value}>{country.name}</option>
          ))
        }
      </select>

      <select>
        {
          cities.length == 0 ? <option value={""}>--No Any Cities--</option> : cities.map((city) =>(
            <option value={city}>{city}</option>
          )) 
        }
      </select>
    </div>
  )
}

export default ShowDropdown;