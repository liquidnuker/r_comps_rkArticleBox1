export default class RkArticleBox101 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property1: ""
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
            <div className="rkarticlebox101_img-holder">
              <img src="img.jpg" alt="img alt" title="img title" />
            </div>
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
            <footer className="row rkarticlebox101_extras">
              <p>extra text Lorem ipsum dolor sit amet</p>
              <button data-message="button1" className="btn btn1-01" tabindex="0">read more</button>
              <button data-message="button2" className="btn btn1-01" tabindex="0">read more</button>
            </footer>
          </li>
        </ul>
      </div>      
    );
  }
}