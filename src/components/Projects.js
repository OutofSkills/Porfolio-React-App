export default function Projects(){
    return(
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My Projects</h2>
            <p className="section__subtitle section__subtitle--work">Selection of my range of work</p>

            <div className="portfolio">
                <a href="#" className="portfolio__item">
                    <img src={require("../images/portfolio-01.jpg")} alt="Project 1" className="portfolio__img" />
                </a>

                <a href="#" className="portfolio__item">
                    <img src={require("../images/portfolio-02.jpg")} alt="Project 2" className="portfolio__img" />
                </a>

                  <a href="#" className="portfolio__item">
                    <img src={require("../images/portfolio-03.jpg")} alt="Project 3" className="portfolio__img" />
                </a>

                  <a href="#" className="portfolio__item">
                    <img src={require("../images/portfolio-04.jpg")} alt="Project 4" className="portfolio__img" />
                </a>

                  <a href="#" className="portfolio__item">
                    <img src={require("../images/portfolio-05.jpg")} alt="Project 5" className="portfolio__img" />
                </a>

                  <a href="#" className="portfolio__item">
                    <img src={require("../images/portfolio-06.jpg")} alt="Project 6" className="portfolio__img" />
                </a>

                  <a href="#" className="portfolio__item">
                    <img src={require("../images/portfolio-07.jpg")} alt="Project 7" className="portfolio__img" />
                </a>

                  <a href="#" className="portfolio__item">
                    <img src={require("../images/portfolio-08.jpg")} alt="Project 8" className="portfolio__img" />
                </a>

                  <a href="#" className="portfolio__item">
                    <img src={require("../images/portfolio-09.jpg")} alt="Project 9" className="portfolio__img" />
                </a>

                  <a href="#" className="portfolio__item">
                    <img src={require("../images/portfolio-10.jpg")} alt="Project 10" className="portfolio__img" />
                </a>
            </div>
        </section>
    );
}