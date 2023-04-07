import Nav_Welcome from "./Nav_Welcome";
import Cards from './Cards'
import {Link} from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
    const RealEstate_prop = {
        title: "RealEstate",
        imageUrl: "https://learn.g2.com/hubfs/G2CM_FI124_Learn_Article_Images-Blockchain_V1b.png",
        description: "The Best Houses",
    }
    const Bid_prop = {
        title: "Bid",
        imageUrl: "https://learn.g2.com/hubfs/G2CM_FI124_Learn_Article_Images-Blockchain_V1b.png",
        description: "The Best Houses",
    }
    const CrowdFunding_prop = {
        title: "Crowdfunding",
        imageUrl: "https://learn.g2.com/hubfs/G2CM_FI124_Learn_Article_Images-Blockchain_V1b.png",
        description: "The Best Houses",
    }
    const Tender_prop = {
        title: "Tender",
        imageUrl: "https://learn.g2.com/hubfs/G2CM_FI124_Learn_Article_Images-Blockchain_V1b.png",
        description: "The Best Houses",
    }
    return (  
        <div className="Welcome"> 
            <Nav_Welcome/>
            <div className="card_welcome-container">
                <div className="row_welcome">
                    <div className="col-sm-6 left">
                    <Link className="Link" to='/RealEstate'><Cards title={RealEstate_prop.title} imageUrl = {RealEstate_prop.imageUrl} description = {RealEstate_prop.description}/></Link>
                    </div>
                    <div className="col-sm-6 right">
                    <Link className="Link" to='/Bid'><Cards title={Bid_prop.title} imageUrl = {Bid_prop.imageUrl} description = {Bid_prop.description}/></Link>
                    </div>
                </div>
                <div className="row_welcome">
                    <div className="col-sm-6 left">
                    <Link className="Link" to='/CrowdFunding'><Cards title={CrowdFunding_prop.title} imageUrl = {CrowdFunding_prop.imageUrl} description = {CrowdFunding_prop.description}/></Link>
                    </div>
                    <div className="col-sm-6 right">
                    <Link className="Link" to='/Tender'><Cards title={Tender_prop.title} imageUrl = {Tender_prop.imageUrl} description = {Tender_prop.description}/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Welcome;