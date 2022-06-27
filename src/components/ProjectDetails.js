export default function ProjectDetails(props){
    return(
        <div className="portfolio-item-individual">
            <p>
                {props.details.p1}
            </p>
            <img src={require(`../images/${props.details.img}`)} alt=""/>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam fugiat eius numquam, unde modi inventore, id architecto atque, maxime odit incidunt iure reprehenderit blanditiis suscipit odio. Ex veniam consequatur sint.
            </p>
            <p>
            {props.details.p2}
            </p>
        </div>
    );
}