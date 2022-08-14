export function Card({ src }) {
    return (
        <div className="card mb-11">
            <figure><img className="rounded" src={src} alt="NFT" /></figure>
            <div className="card-body">
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
