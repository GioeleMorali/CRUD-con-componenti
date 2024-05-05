import "./App.css";

export default function Cancellazione({ id, setInsert, caricaAlunni, inConferma, setInConferma, inModifica, inCancellazione, setInCancellazione}) {
    
    async function cancellaAlunno() {
        setInCancellazione(true);
        await fetch(`http://localhost:8080/alunni/${id}`, 
        {
          method: "DELETE",
        });
        caricaAlunni();
        setInCancellazione(false);
        setInsert(true);
      }
    
      function richiediConferma() {
        setInsert(false);
        setInConferma(true);
      }
    
      function annullaCancellazione() {
        setInsert(true);
        setInConferma(false);
      }

return(
    <>
    {inCancellazione ? (
        <div>Cancellazione in corso...</div>
      ) 
      : 
      (
        <span className="conferma">
          {inConferma ? (
            <>
              <br />
              <br />
              Sei sicuro?
              <button onClick={cancellaAlunno}>si</button>
              <button onClick={annullaCancellazione}>no</button>
            </>
          ) : 
            (
            <>
              { !inModifica &&
                <>
                <button onClick={richiediConferma}>Cancella</button>
                {" "}
                </>
              }
            </>
            )
          }
        </span>
      )
    }
    </>
);
}