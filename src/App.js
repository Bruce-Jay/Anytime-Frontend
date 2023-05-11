import './App.css';
import {MessageTwoTone} from '@ant-design/icons'

function App() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-40">
        <div className="shrink-0">
              <MessageTwoTone style={{ fontSize: '200%'}} />
        </div>
        <div>
            <div className="text-2xl font-medium text-black">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
        </div>
    </div>
  );
}

export default App;
