import Figure from "react-bootstrap/Figure";

function FigureExample() {
  return (
    <Figure>
      <Figure.Caption>
        <h1 style={{ textAlign: "center" }}>W BEAUTY</h1>
      </Figure.Caption>
      <Figure.Image
        width={1250}
        height={800}
        src="https://wforwoman.gumlet.io/commonsection/1654861163W_BEAUTY-Footer.jpg"
        alt="image"
      />
    </Figure>
  );
}

export default FigureExample;
