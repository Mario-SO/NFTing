export function Card({ image, collection, description, mintPage }) {
    return (
        <div className="card lg:card-side bg-base-100 max-w-3xl mx-1 mb-10">
            <figure><img className="" src={image} alt="img" /></figure>
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
