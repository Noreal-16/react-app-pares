export const ContentComponent = ({data}) => {
  return (
    <div className="content-card">
      <div className="content-values">
        <h1>Objetive {data.objetive}</h1>
        <h2>
          <nav>Result {data.pairs}</nav>
        </h2>
      </div>
      <p>Array {data.arrays} </p>
    </div>
  );
};
