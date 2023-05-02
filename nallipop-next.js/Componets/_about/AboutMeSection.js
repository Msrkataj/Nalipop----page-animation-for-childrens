import React from 'react';
import Link from 'next/link';
import {useScrollAnimation} from "../hooks/useScrollAnimation";

const AboutMeSection = () => {
    const isVisible = useScrollAnimation('.about_me');

    return (
        <>
            <div className="page">
                <div className="container">
                    <section className={`about_me${isVisible ? ' visible' : ''}`}>
                        <h1>Natalia Marciniak</h1>
                        <div className="about_me-content">
                            <div className="about_me-content-text">
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dicta dolor
                                    eveniet explicabo, iure labore laborum maxime molestias porro quaerat quasi quidem
                                    quisquam ratione sed, totam veniam! Dolores, harum!
                                </div>
                                <div>Ad at eos ex itaque nesciunt quae quis reiciendis tempore. Aperiam commodi cum ducimus
                                    enim facere illo magnam magni, molestias mollitia nemo quae quaerat quia, recusandae,
                                    reiciendis rem rerum temporibus.
                                </div>
                                <div>A accusamus accusantium autem blanditiis commodi corporis culpa cumque deleniti
                                    doloribus earum excepturi exercitationem fuga impedit laudantium maiores, nisi
                                    perferendis quas qui, similique sint temporibus tenetur ut. Est, similique, temporibus.
                                </div>
                                <div>Alias, aspernatur consequatur, corporis cupiditate dignissimos doloribus eaque expedita
                                    ipsa ipsam laboriosam pariatur provident quaerat recusandae reiciendis sequi tempora
                                    temporibus totam unde veritatis voluptate! Accusamus ex ipsum odio repellendus
                                    voluptates?
                                </div>
                                <div>Ad alias aliquam amet beatae commodi consequatur culpa, cumque, dolore ducimus enim eum
                                    expedita facere facilis impedit itaque modi nemo odio provident quam ratione recusandae
                                    repudiandae sit tenetur voluptate voluptatibus!
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AboutMeSection;