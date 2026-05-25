import BotButton from "./Compponent/button";
import Card from "./Compponent/card";
import Point from "./Compponent/point";
import Profile from "./Compponent/profile";
import Where from "./Compponent/where";

export default function Learnpage() {
    return (

        <section className="flex h-screen w-screen bg-gray-200 justify-center items-center">

            <section className="flex flex-col relative w-110 h-125 bg-white rounded-3xl p-6 justify-between overflow-hidden shadow-[30px_30px_50px_10px_rgba(0,0,0,0.1)]">
                
                <Point
                    header="Client details"
                    img="/x.svg"
                />

                <Profile
                    photo="/pp.png"
                    name="Cornelius Greenfelder"
                    badge="Verified"
                    imgbadge="/verified.svg"
                />

                <Card
                    header="Projects"

                    imgcolor="bg-blue-500"
                    hover="hover:bg-black hover:scale-110 transition duration-200"
                    img="/hourglass-empty.svg"
                    title="Ongoing"
                    qty={2}
                    price={3.8}

                    img1color="bg-green-500"
                    hover1="hover:bg-black hover:scale-110 transition duration-200"
                    img1="/square-check.svg"
                    title1="Completed"
                    qty1={24}
                    price1={54}
                />

                <Where
                    title="Location" 
                    fill="United States, New York" 
                    color="text-gray-600"
                />

                <Where
                    title="With us" 
                    fill="6 Jan 2024" 
                    color="text-gray-600"
                />

                <BotButton
                    img1="/dots-vertical.svg"

                    img2color="bg-white"
                    img2="/mail.svg"
                    title="Message"
                />

            </section>

        </section>

    );
}