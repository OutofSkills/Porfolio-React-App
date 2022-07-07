export default function About(){
    return(
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Software Engineer based out of Romania</p>

            <div className="about-me__body">
                <p>
                    I'm a CS graduate passionate about technologies. I find working with
                    technologies to be a rewarding activity that allows me to earn new skills
                    every day and use them to create beautiful and interactive solutions that I'm
                    pround of.
                </p>
                <p>
                    As a former CS student I believe that there's nothing impossible achieve, it just takes more time. 
                </p>
            </div>

            <img src={require('../images/dev-photo-01.jpg')} alt="Jane leaning against a bus" className="about-me__img"/>
        </section>
    );
}