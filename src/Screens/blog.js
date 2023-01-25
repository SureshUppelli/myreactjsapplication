import React from "react";
import Footer from "../Components/Footer";
import TopNav from "../Components/TopNav";

export default function Blog() {
    return (
        <div>
            <TopNav />
            <main id="main">
                <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('assets/img/blog-header.jpg')" }}>
                    <div className="container position-relative d-flex flex-column align-items-center">

                        <h2>Careers</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Careers</li>
                        </ol>

                    </div>
                </div>


                <section id="blog" className="blog">
                    <div className="container" data-aos="fade-up">

                        <div className="row g-5">




                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}