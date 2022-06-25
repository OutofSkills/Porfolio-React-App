export default function About(){
    return(
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Software Engineer based out of Romania</p>

            <div className="about-me__body">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Officiis a quas aliquam quibusdam enim veritatis hic reprehenderit fuga repudiandae non, impedit, adipisci iste, error sint animi doloribus explicabo quis perferendis!

                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis sunt recusandae, 
                    illo fugiat nobis dolor deserunt accusantium dolorum natus officiis saepe dignissimos voluptatibus magnam aut et eligendi maiores ipsam.
                </p>
            </div>

            <img src={require('../images/dev-photo-01.jpg')} alt="Jane leaning against a bus" className="about-me__img"/>
        </section>
    );
}