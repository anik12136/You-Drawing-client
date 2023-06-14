
const Banner = () => {
    return (
        <div className='mx-20' >
            
            <div className="carousel w-full h-[600px]">
                
                <div id="item1" className="carousel-item w-full">
                    <img src="https://as2.ftcdn.net/v2/jpg/04/46/51/85/1000_F_446518520_nEgxiILmGCXaA8kyYkewKNWv6WmKq65q.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://as2.ftcdn.net/v2/jpg/02/11/57/45/1000_F_211574559_1khyEBcSRCU7UBH2WyXHTC7jeS7JaxnR.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://as1.ftcdn.net/v2/jpg/05/73/58/86/1000_F_573588655_ZjIl4IaGqAKDRU6L8n30hoMZ8cxtVyS0.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://as1.ftcdn.net/v2/jpg/05/73/58/94/1000_F_573589477_yjJUVopOJkUGzswmskgfSPjXd8WRxhcg.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
    
};

export default Banner;