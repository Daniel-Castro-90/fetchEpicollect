import GifAleatorio from "./GifAleatorio";

function Home() {
    return(
        <div className="col-lg-12 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Home</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <GifAleatorio/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>

                </div>
            </div>
        </div>
    )
}

export default Home;