export function Card({ image, collection, description, mintPage }) {
    return (
        <div className="card m-10 lg:card-side bg-base-100">
            <figure className="bg-contain"><img src={image} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{collection}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success"><a href={mintPage} target="_blank" rel="noopener noreferrer">Go Mint!</a></button>
                </div>
            </div>
        </div>
    );
}
