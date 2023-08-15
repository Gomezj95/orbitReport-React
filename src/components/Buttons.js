// const Buttons = () => {
//   return (
//     <div>
//       <button>Placeholder Button</button>
//       <button>All Orbits</button>
//       </div>
//   );
// };



import satData from "./satData";


const Buttons = ({fitlerByType, setSat, displaySats}) => {
  return ( 
  <div>
  {displaySats.map((sat, id) => {
return (
  <button onClick={() => fitlerByType(sat)} key={id}>
    {sat} Orbit
  </button>
);
})}
<button onClick={() => setSat(satData)}>All Orbits</button>
</div>)
}

export default Buttons;