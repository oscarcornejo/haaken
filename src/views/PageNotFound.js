import { Link } from "react-router-dom";
import { Message } from "rsuite";

const PageNotFound = () => {
  return (
    <div>
      <Message
        type="warning"
        title="Página No Encontrada"
        description={
          <p>
            ¡Oops! La página que buscas no existe aquí.
            <br />
            <br />
            <Link to="/">Volver al Home</Link>
          </p>
        }
      />
    </div>
  );
};

export default PageNotFound;
