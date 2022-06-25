export default function Introduction(){
    return(
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Cojocaru Ion</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">
                software engineer
            </p>
            <img src={require('../images/dev-image.jpg')} alt="Jane Smith smiling" className="intro__img"/>
        </section>
    );
}
