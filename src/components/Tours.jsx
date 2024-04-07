import "./Tours.css"
import Card from "./Card.jsx"
function Tours({ tours, removeTour }) {
    return (<div className="container">
        <div><h1 className="title">Plan With Love</h1></div>
        <div className="cards">
            {
                tours.map(function (tour) {
                    return <Card {...tour} removeTour={removeTour} ></Card>
                }
                )
            }
        </div>
    </div>
    );
  }
export default Tours;