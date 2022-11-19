import Figure from "react-bootstrap/Figure";

function FigureExample() {
  return (
    <Figure>
      <Figure.Caption>
        <h1 style={{ textAlign: "center" }}>FOLKSONG</h1>
      </Figure.Caption>
      <Figure.Image
        width={1250}
        height={800}
        alt="image"
        src="https://wforwoman.gumlet.io/commonsection/1648195461FolkSong-Footer-banner-desktop.jpg"
      />
    </Figure>
  );
}

export default FigureExample;
