export default function Places({
  title,
  places,
  fallbackText,
  onSelectPlace,
  loading,
  errMsg,
}) {
  // console.log("places", places);
  return (
    <section className="places-category">
      <h2
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {loading && <p className="loader"></p>}
        {loading ? "Loading..." : !errMsg? title :errMsg}
      </h2>
      {!loading && places.length === 0 && (
        <p className="fallback-text">{errMsg ? 'Something went wrong' : fallbackText}</p>
      )}
      {!loading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place)}>
                <img
                  src={`http://localhost:3000/${place.image.src}`}
                  alt={place.image.alt}
                />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
