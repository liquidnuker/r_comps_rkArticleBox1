import RkArticleBox101 from "./RkArticleBox101.jsx";
import RkArticleBox102 from "./RkArticleBox102.jsx";
import RkArticleBox103 from "./RkArticleBox103.jsx";

export default function Home(props) {
  return (
    <div>
    
    <div className="row">
    {/*rkArticleBox101*/}
    <h2 className="item-id">rkArticleBox101</h2>
      <div className="col-sm-3">39</div>
      <div className="col-sm-9">
        <RkArticleBox101 />
      </div>
    </div>

    <div className="row">
    {/*rkArticleBox102*/}
    <h2 className="item-id">rkArticleBox102</h2>
      <div className="col-sm-3">39</div>
      <div className="col-sm-9">
        <RkArticleBox102 />
      </div>
    </div>

    <div className="row">
    {/*rkArticleBox103*/}
    <h2 className="item-id">rkArticleBox103</h2>
      <div className="col-sm-3">39</div>
      <div className="col-sm-9">
        <RkArticleBox103 />
      </div>
    </div>

    </div>
  );
}