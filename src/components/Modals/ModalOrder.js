import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, Tooltip, Loader } from "rsuite";

const ModalOrder = ({ openModal, setOpenModal, loading, orderId }) => {
  const history = useHistory();

  const [showMsgTooltip, setShowMsgTooltip] = useState(false);

  const close = () => {
    setOpenModal(!openModal);
    history.push("/");
    setShowMsgTooltip(false);
  };

  const copyText = () => {
    setShowMsgTooltip(true);
    navigator.clipboard.writeText(orderId);
    setTimeout(() => {
      setShowMsgTooltip(false);
    }, 1000);
  };

  return (
    <div className="modal-container">
      <Modal show={openModal} onHide={close} backdrop="static">
        <Modal.Header>
          <Modal.Title>Procesando Orden</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {loading ? (
            <>
              <p>Estamos validando su orden...</p>
              <div style={{ textAlign: "center", margin: "20px 0px" }}>
                <Loader size="lg" />
              </div>
            </>
          ) : (
            <>
              <p>¡Su Orden fue generada con éxito!, el numero de orden es:</p>
              <h5>{orderId}</h5>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          {!loading && (
            <>
              <div style={{ position: "relative", top: "-25px", left: "240px" }}>
                <Tooltip visible={showMsgTooltip}>Id Copiado</Tooltip>
              </div>
              <Button onClick={copyText} appearance="primary">
                Copiar numero de Orden
              </Button>

              <Button onClick={close} appearance="subtle">
                Cerrar y Volver al Home
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalOrder;
