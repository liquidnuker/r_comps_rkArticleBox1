export default class RkArticleBox103 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property1: ""
    };

    // 
    this.method1 = this.method1.bind(this);
  }

  // lifecycle hooks
  
  // methods
  method1() {
    this.setState(prevState => ({
      property1: store.state
    }));
  }

  render() {
    return (
       <div className="rkarticlebox103">
        <ul>
                   <li>
            <header>
              <h3 className="rkarticlebox103_heading1">Article title</h3>
              <p>
                Lorem ipsum dolor sit amet, elit, sed do eiusmod
              </p>
              <ul className="row rkarticlebox103_title-info">
                <li>
                &copy;&nbsp;Date posted</li>
                <li>Author</li>
                <li>Posted in Category</li>
                <li>comments&nbsp;<span className="rkarticlebox103_badge">12</span>
              </li>
            </ul>
          </header>
          <div className="row">
            <div className="rkarticlebox103_img-holder">
              <img src="img.jpg" alt="img alt" title="img title" />
            </div>
            <article role="article">
              <h3 className="rkarticlebox103_heading2">Article heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </article>
          </div>
          <footer className="rkarticlebox103_extras">
            <p>extra text</p>
            <button data-message="button1" className="btn btn1-01" tabindex="0">read more</button>
            <button data-message="button2" className="btn btn1-01" tabindex="0">read more</button>
          </footer>
        </li>
        
      </ul>
    </div>
    );
  }
}