import { Card } from "./Card";

export function Tier() {
    return (
        <div className="grid grid-rows bg-base-200 py-10 min-h-screen">
            <div className="mx-10 mb-10 columns-md">
                <Card image="https://placeimg.com/300/300/arch" collection="Unpolite Punks" description="Crypto Punks gone wild and unpolite. They will show you a nicley pixelated middle finger" mintPage="/" />
                <Card image="https://placeimg.com/300/300/arch" collection="Unpolite Apes" description="This guys were bored, now they are bored and unpolite. Hairy big middle fingerino is waiting for you" mintPage="/" />
                <Card image="https://placeimg.com/300/300/arch" collection="Unpolite Nouns" description="They where the ones that had the biggest treasury of any DAO, now they say F**k you, we are leaving with all this money. " mintPage="/" />
            </div>
        </div>
    );
}