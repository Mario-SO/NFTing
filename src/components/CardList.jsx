import { Card } from "./Card";

export function CardList() {
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="grid px-10 pt-10 lg:grid-cols-2 md:grid-cols-1 py-10">
                <Card image="/noun.png" collection="Unpolite Nouns" description="They where the ones that had the biggest treasury of any DAO, now they say F**k you, we are leaving with all this money." mintPage="/" />
                <Card image="/punk.png" collection="Unpolite Punks" description="Crypto Punks gone wild and unpolite. They will show you a nicely pixelated middle finger." mintPage="/" />
                <Card image="/ape.png" collection="Unpolite Apes" description="This guys were bored, now they are bored and unpolite. Hairy big middle fingerino is waiting for you." mintPage="/" />
                <Card image="/coolcat.png" collection="Unpolite Cats" description="This badass cats were the cool kids during the biggest NFT bull run, until now, now they are just unpolite." mintPage="/" />
            </div>
        </div >
    );
}