import { Link } from "react-router-dom";

export function Card({ image, collection, description, mintPage }) {
    return (
        <div className="card m-10 lg:card-side bg-base-100">
            <figure className="bg-contain"><img src={image} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">Unpolite {collection}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn-disabled btn-success"><Link to={mintPage} target="_blank" rel="noopener noreferrer">Coming Soon!</Link></button>
                </div>
            </div>
        </div>
    );
}
