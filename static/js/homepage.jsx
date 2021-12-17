'use strict';

function Homepage(props) {
  return(
    <React.Fragment>
    <h1>  </h1>
    <div> 
      <a href="/cards"> Click here to go to cards page </a>
    </div>
    <img src="/static/img/balloonicorn.jpg"/>
    </React.Fragment>
  ) ;
  
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
