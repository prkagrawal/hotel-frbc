import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Luxurious rooms" subtitle="Deluxe rooms starting at $250">
                    <Link to="rooms" className="btn-primaary">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
        </>
    )
}

export default Home;