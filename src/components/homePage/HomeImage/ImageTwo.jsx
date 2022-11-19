import Figure from "react-bootstrap/Figure";

function FigureExample() {
  return (
    <Figure>
      <Figure.Caption>
        <h1 style={{ textAlign: "center" }}>TRENDING NOW</h1>
      </Figure.Caption>
      <Figure.Image
        width={1250}
        height={800}
        src="https://wforwoman.gumlet.io/commonsection/1653036982W-Footwear-Footer-desktop.jpg"
        alt="image"
      />
    </Figure>
  );
}

export default FigureExample;
