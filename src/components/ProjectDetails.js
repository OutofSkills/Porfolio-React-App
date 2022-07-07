import CarouselCompound from './carousel-compound'

export default function ProjectDetails(props){
    const carouselItems = props.details.screenshots.map((img, index) => {
        return (
            <CarouselCompound.Page key={index}>
                <img src={require(`../images/${img}`)} style={{height:'550px'}} alt='Project screenshot'/>
            </CarouselCompound.Page>
        );
    });
    console.log(props)

    const specElements = props.details.specs.map((spec, index) => {
        return (
            <li key={index}><i className="fa-solid fa-bug"></i> <b>{spec}</b></li>
        );
    });

    return(
        <div className="portfolio-item-individual">
            <h2 style={{textAlign:'center'}}>{props.details.title}</h2>
            <p>
               {props.details.description}
            </p>
            <CarouselCompound infinite>
                {carouselItems}
            </CarouselCompound>

            <ul className='fa-ul'>
                {specElements}
            </ul>
        </div>
    );
}