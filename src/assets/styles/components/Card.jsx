import Badge from "./Badge";
import PriceLineTh from "./PriceLineTh";
import Stars from "./Stars";

const Card = (props) => {
    return (
            <div class="col mb-5">
                <a href="#" className="cards">
                    <div class="card h-100">
                        {props.badge}
                        <img class="card-img-top" src={props.image} alt="..." />
                        <div class="card-body p-4">
                            <div class="text-center">
                                <h5 class="fw-bolder">{props.title}</h5>
                                {props.stars}
                                {props.priceLine}
                                {props.price}
                            </div>
                        </div>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                        </div>
                    </div>
                </a>
            </div>
    )
}
export default Card;