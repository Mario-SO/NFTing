export function Card({ src }) {
    return (
        <div className="card card-compact bg-base-100 border-5 border-r-10 border-black mb-11">
            <figure><img className="rounded-md" src={src} alt="NFT" /></figure>
            <div className="card-body">
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
