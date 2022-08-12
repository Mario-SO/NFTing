import { Card } from "./Card";

export function Tier({ title }) {
    return (
        <div className="grid grid-rows">
            <h1 className="text-5xl font-bold m-10 ">{title}</h1>
            <div className=" mx-10 mb-10 columns-sm">
                <Card src="https://placeimg.com/400/225/arc" />
                <Card src="https://placeimg.com/400/225/arc" />
                <Card src="https://placeimg.com/400/225/arc" />
                <Card src="https://placeimg.com/400/225/arc" />
            </div>
        </div>
    );
}