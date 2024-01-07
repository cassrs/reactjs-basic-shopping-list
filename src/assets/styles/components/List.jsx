import Badge from "./Badge";
import Card from "./Card";
import Price from "./Price";
import PriceLineTh from "./PriceLineTh";
import Stars from "./Stars";
import Stars4 from "./Stars4";

const List = () => {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <Card title="Nike SB Zoom Blazer Mid" image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/af8fc2f0-ea7f-4d94-926d-6fcca8c40112/sb-zoom-blazer-mid-kaykay-ayakkab%C4%B1s%C4%B1-WyTAj8OA.png" price={<Price price="$40 - $80"/>} />
                    <Card title="Nike V2 Run" image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e8455ad-c00c-4996-a85a-b5c4d38c6ae2/v2k-run-ayakkab%C4%B1s%C4%B1-KWwRP4.png" stars={<Stars />} badge={<Badge />} priceLine={<PriceLineTh priceLine="$25" />} price={<Price price=" $18"/>}/>
                    <Card title="Nike Air Force 1 '07 EasyOn" image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/air-force-1-07-easyon-ayakkab%C4%B1-rLFV2F.png" badge={<Badge />} priceLine={<PriceLineTh priceLine="$50" />} price={<Price price=" $25"/>} />
                    <Card title="Nike Air Jordan Legacy 312 Low" image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9bfad942-8485-4cf7-8953-e7fe1272bc91/air-jordan-legacy-312-low-ayakkab%C4%B1s%C4%B1-mpV0mH.png" stars={<Stars />} price={<Price price="$40"/>} />
                    <Card title="Adidas Kantana" image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8f8d57ead56b4262a4223db63e1cee32_9366/Kantana_Ayakkabi_Beyaz_ID5555_01_standard.jpg" stars={<Stars />} badge={<Badge />} priceLine={<PriceLineTh priceLine="$60" />} price={<Price price=" $30"/>} />
                    <Card title="Adidas Forum Low CL" image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/17571d1c44384187ba708c3ac903e8c2_9366/FORUM_LOW_CL_Bej_ID0991_01_standard.jpg" stars={<Stars4 />} badge={<Badge />} price={<Price price="$35" />} />
                    <Card title="Adidas Ultraboost 1.0" image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b167fd83945f414bbfdbf637efba5a01_9366/Ultraboost_1.0_Ayakkabi_Beyaz_ID5879_01_standard.jpg" badge={<Badge />} priceLine={<PriceLineTh priceLine="$40" />} price={<Price price=" $30"/>}/>
                    <Card title="Adidas Dropset 2" image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c63fd9c974ba4532b5ca3d64833b965a_9366/Dropset_2_Antrenman_Ayakkabisi_Yesil_IE5489_01_standard.jpg" price={<Price price="$30 - $50" />}/>
                    <Card title="Hummel Regar" image="https://st-hummel.mncdn.com/Content/media/ProductImg/original/900392-2042-regar-ayakkabi-638248471452990316.jpg" stars={<Stars4 />} badge={<Badge />} priceLine={<PriceLineTh priceLine="$35" />} price={<Price price=" $25" />}/>
                    <Card title="Hummel Reach LX 6000 MP" image="https://st-hummel.mncdn.com/Content/media/ProductImg/original/218333-2093-reach-lx-6000-mp-ayakkabi-638379888494155817.jpg" price={<Price price="$20 - $30" />}/>
                    <Card title="Hummel Neo II" image="https://st-hummel.mncdn.com/Content/media/ProductImg/original/638119880803002654.jpg" stars={<Stars />} badge={<Badge />} priceLine={<PriceLineTh priceLine="$60" />} price={<Price price=" $45" />}/>
                    <Card title="Hummel Carter" image="https://st-hummel.mncdn.com/Content/media/ProductImg/original/638119893813619380.jpg" stars={<Stars />} badge={<Badge />} price={<Price price="$40" />}/>
                </div>
            </div>
        </section>
    )
}
export default List;