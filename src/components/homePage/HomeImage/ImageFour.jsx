import Figure from "react-bootstrap/Figure";

function FigureExample() {
  return (
    <Figure>
      <Figure.Caption>
        <h1 style={{ textAlign: "center" }}>CATEGORY TO BAG</h1>
      </Figure.Caption>
      <Figure.Image
        width={1250}
        height={800}
        alt="image"
        src="https://wforwoman.gumlet.io/commonsection/1654667187W-Plus-Footer-desktop.jpg"
      />
    </Figure>
  );
}

export default FigureExample;
