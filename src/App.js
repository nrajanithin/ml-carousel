import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div style={{marginLeft:'10px',marginRight:'10px',marginTop:'10px',display:'flex',justifyContent:'space-between'}}>
        <form style={{display:'flex'}} action="/files/" enctype="multipart/form-data" method="post">
        <input name="files" type="file" multiple />
        <input type="submit" />
        </form>
      
       
        <form style={{display:'flex'}} action="http://localhost:8000/uploadfiles/" enctype="multipart/form-data" method="post">
        <input name="files" type="file" multiple />
        <input type="submit" />
       </form>
    </div>
    <div style={{marginTop:'20px',padding:'0'}} class="container">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner" style={{width:'100%',height:'600px'}}>
      <div class="item active">
        <img src="http://localhost:8000/image/raja.png" alt="Los Angeles" style={{width:"100%"}} />
      </div>

      <div class="item">
        <img src="http://localhost:8000/image/nithin.png" alt="Chicago" style={{width:"100%"}} />
      </div>
    
      <div class="item">
        <img src="http://localhost:8000/image/raja.png" alt="New york" style={{width:"100%"}} />
      </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
      </div> 
  );
}

export default App;
