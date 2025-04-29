export default function RenderList() {
  const fruits = [
    "Apples",
    "Orange",
    "Bananas",
    "Pineapples",
    "Coconuts",
    "Strawberries",
    "Cherries",
    "Watermelon",
    "Cantaloupe",
  ];

  return (
    <>
      <h1>Render List</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
