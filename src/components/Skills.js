export default function Skills(){
    return(
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">
                What I do
            </h2>
            <div className="services">
                <div className="service">
                    <h3>Design + Development</h3>
                    <p>
                        As a software engineer I can design and implement a solution in diffrent enviroments. 
                        I have experience working with UML diagrams and diffrent types of architectures like MVC, MVVM or simple n-tires architecture.
                    </p>
                </div>

                <div className="service">
                    <h3>Android Solution</h3>
                    <p>
                        I'm able to build an andoid solution from scratch or contribute to an existing one built by using Java, Google Api, Firebase, SQLite or Retrofit.
                    </p>
                </div> 

                <div className="service">
                    <h3>Web Applications</h3>
                    <p>
                        I have developed multiple Web application by using diffrent technologies. 
                        For a SPA I can use React or Blazor and for server based applications Asp.NET or Symfony.
                    </p>
                </div>
            </div> 

            <a href="#work" className="btn">My Work</a>
        </section>
    );
}