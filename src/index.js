
import dva from 'dva';
import './index.css';
import './components/Left.css';


// 1. Initialize
const app = dva({
    initialState: { 
   Left:{ path: [{ title: 'root', key: '/',father:'/' }] },
   MainLayout:{
    nodeData:"",
    
    statData:[{
      key: '0',
      nodekey: 'key',
      value: 'value'
    
    }
    ],progress:{
      show:false,
      status:"active",
      percent:20
    },showOther:false
   }
  }
}
  
);

app.model(require("./models/Left").default);



app.model(require("./models/DeleteNodeModal").default);



app.model(require("./models/NodeProperty").default);


app.model(require("./models/addNodeModal").default);

app.model(require("./models/mainLayout").default);

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
