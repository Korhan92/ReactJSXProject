let fourname = ["John", "Max", "Sarah", "Lisa"]
let cumlearr = [<h2>Congragulations!"</h2>, <h3>React is awesome</h3>]


ReactDOM.render(
    <div>
        <div className="card">
            <h1>
                Hello world!
            </h1>

            <ol>
            {fourname.map((element,index) => {

                return  <li className={index==0 ? "first" : index==1 ? "second" : index==2 ? "third" : "first"} key={element}>{element}</li>

            })}
            </ol>


        </div>
        <div>
            {cumlearr.map((element,i)=>{
              return (<div key={i}>{element}</div>)
            })}
       {/*} <h2>{cumlearr[0]}</h2>
        <h3>{cumlearr[1]}</h3> */ }
        </div>
    </div>,
    document.getElementById('example'));