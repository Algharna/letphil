export default function Card({ pokemon }) {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {pokemon.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}
