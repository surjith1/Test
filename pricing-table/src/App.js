import './App.css';
import PriceTable from './components/PriceTable';
function App() {
  let data=[
    {
    price:"$0",
    user:"Single User",
    userEnabler:true,
    userBold:false,
    storage:"5GB Storag",
    storageEnabler:true,
    storageBold:false,
    publicProject:"Unlimited Public Projects",
    publicProjectEnabler:true,
    publicProjectBold:false,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    communityAccessBold:false,
    privateProject:"Unlimited Private Projects",
    privateProjectEnabler:false,
    privateProjectBold:false,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler:false,
    phoneSupportBold:false,
    subDomain:"Free SubDomain",
    subDomainEnabler:false,
    subDomainBold:false,
    statusReport:"Monthly Status Report",
    statusReportEnabler:false,
    statusReportBold:false
    },
    {
    price:"$9",
    user:"5 User",
    userEnabler:true,
    userBold:true,
    storage:"50GB Storag",
    storageEnabler:true,
    storageBold:false,
    publicProject:"Unlimited Public Projects",
    publicProjectEnabler:true,
    publicProjectBold:false,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    communityAccessBold:false,
    privateProject:"Unlimited Private Projects",
    privateProjectEnabler:true,
    privateProjectBold:false,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler:true,
    phoneSupportBold:false,
    subDomain:"Free SubDomain",
    subDomainEnabler:true,
    subDomainBold:false,
    statusReport:"Monthly Status Report",
    statusReportEnabler:false,
    statusReportBold:false
    },
    {
      price:"$49",
      user:"Unlimited User",
      userEnabler:true,
      userBold:true,
      storage:"150GB Storag",
      storageEnabler:true,
      storageBold:false,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      publicProjectBold:false,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      communityAccessBold:false,
      privateProject:"Unlimited Private Projects",
      privateProjectEnabler:true,
      privateProjectBold:false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler:true,
      phoneSupportBold:false,
      subDomain:" Free SubDomain",
      subDomainEnabler:true,
      subDomainBold:true,
      unlimitedSubdomain:"Unlimited",
      statusReport:"Monthly Status Report",
      statusReportEnabler:true,
      statusReportBold:false
      }
];
  return (<>
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
    {
      data.map((e)=>{
        return <PriceTable data={e}/>
      })
    }
    </div>
  </div>
</section>
 </> );
}

export default App;
