import React from 'react'

const PriceTable = (props) => {
  return (<>
 <div className="col-lg-4">
 <div className="card mb-5 mb-lg-0">
   <div className="card-body">
     <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
     <h6 className="card-price text-center"><span className="price">{props.data.price} </span><span className="period">/month</span></h6>
     <hr/>
     <ul className="fa-ul">
       <li className={ props.data.userEnabler ? "" : "text-muted" }><span className="fa-li"><i className={ props.data.userEnabler ? "fas fa-check" : "fas fa-times" }></i></span>{ props.data.userBold ? <><b>{props.data.user}</b></> : <>{props.data.user}</> }</li>
       <li className={ props.data.storageEnabler ? "" : "text-muted" }><span className="fa-li"><i className={props.data.storageEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.data.storage}</li>
       <li className={ props.data.publicProjectEnabler ? "" : "text-muted" }><span className="fa-li"><i className={ props.data.publicProjectEnabler ? "fas fa-check" : "fas fa-times" }></i></span>{props.data.publicProject}</li>
       <li className={ props.data.communityAccessEnabler ? "" : "text-muted" }><span className="fa-li"><i className={ props.data.communityAccessEnabler ? "fas fa-check" : "fas fa-times" }></i></span>{props.data.communityAccess}</li>
       <li className={ props.data.privateProjectEnabler ? "" : "text-muted" }><span className="fa-li"><i className={ props.data.privateProjectEnabler ? "fas fa-check" : "fas fa-times" }></i></span>Unlimited
         {props.data.privateProject}</li>
       <li className={ props.data.phoneSupportEnabler ? "" : "text-muted" }><span className="fa-li"><i className={ props.data.phoneSupportEnabler ? "fas fa-check" : "fas fa-times" }></i></span>{props.data.phoneSupport}</li>
       <li className={ props.data.subDomainEnabler ? "" : "text-muted" }><span className="fa-li"><i className={ props.data.subDomainEnabler ? "fas fa-check" : "fas fa-times" }></i></span>{props.data.subDomainBold? <><b>{props.data.unlimitedSubdomain}</b><span>{props.data.subDomain} </span></> : <><span> {props.data.subDomain}</span></>}
       </li>
       <li className={ props.data.statusReportEnabler ? "" : "text-muted" }><span className="fa-li"><i className={ props.data.statusReportEnabler ? "fas fa-check" : "fas fa-times" }></i></span>{props.data.statusReport}</li>
     </ul>
     <div className="d-grid">
       <a href="#" className="btn btn-primary text-uppercase">Button</a>
     </div>
   </div>
 </div>
</div>
  </>)
}

export default PriceTable