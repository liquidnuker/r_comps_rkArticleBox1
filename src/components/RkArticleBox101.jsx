function RkArticleBox101_imgHolder(props) {
  return (
    <div className="rkarticlebox101_img-holder">
    <img src="img.jpg" alt={props.pr_img_alt} title="img title" />
    </div>
  );
}

function RkArticleBox101_extras(props) {
  return (
    <footer className="row rkarticlebox101_extras">
    <p>extra text Lorem ipsum dolor sit amet</p>
    <button data-message="button1" className="btn btn1-01" tabindex="0">read more</button>
    <button data-message="button2" className="btn btn1-01" tabindex="0">read more</button>
    </footer>
  );
}

function RkArticleBox101_article(props) {
  return (
    <article role="article">
    <h2 className="rkarticlebox101_heading">Article heading</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </article>
  );
}

export default class RkArticleBox101 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property1: "",
      alt: "image alt"
    };

    // 
    // this.method1 = this.method1.bind(this);
  }

  // lifecycle hooks
  
  // methods
  method1() {
    this.setState(prevState => ({
      // property1: store.state
    }));
  }

  render() {
    return (
      <div className="rkarticlebox101">
        <ul>          
          <li className="row">
            <RkArticleBox101_imgHolder 
            pr_img_alt={this.state.alt} />
            
            <RkArticleBox101_article />
            <RkArticleBox101_extras />
          </li>
        </ul>
      </div>      
    );
  }
}