function RkArticleBox102_header(props) {
  return (
    <header className="rkarticlebox102_article-title">
    <h3 className="rkarticlebox102_heading1">Article heading1</h3>
    <p>
    Lorem ipsum dolor sit amet, elit, sed do eiusmod
    </p>
    </header>
  );
}

function RkArticleBox102_extras(props) {
  return (
    <footer className="rkarticlebox102_extras">
    <p>extra text</p>
    <button data-message="button1" className="btn btn1-01" tabindex="0">read more</button>
    <button data-message="button2" className="btn btn1-01" tabindex="0">read more</button>
    </footer>
  );
}

function RkArticleBox102_imgHolder(props) {
  return (
    <div className="rkarticlebox102_img-holder">
    <img src="img.jpg" alt={props.pr_alt} title="img title" />
    </div>
  );
}

function RkArticleBox102_article(props) {
  return (
    <article role="article">
    <h3 className="rkarticlebox102_heading2">Article heading2</h3>
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

export default class RkrkArticleBox102 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property1: "",
      alt: "RkArticleBox102 img alt"
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
      <div className="rkarticlebox102">
        <ul>          
          <li>
            <RkArticleBox102_header />
            <div className="row">
              <RkArticleBox102_imgHolder 
              pr_alt={this.state.alt}/>
              <RkArticleBox102_article />
            </div>
            <RkArticleBox102_extras />
          </li>          
        </ul>
      </div>
    );
  }
}