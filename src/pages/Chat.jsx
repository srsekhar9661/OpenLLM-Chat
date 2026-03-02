import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Chat.css';

function Chat() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);
  const [temp, setTemp] = useState(0);
  const [apikey, setApikey] = useState('');

  useEffect(() => {
    const key = sessionStorage.getItem("API_KEY");

    if (!key) {
        alert('api key is required to chat with the chatbot application.')
      navigate("/");
    } else {
      setAuthorized(true);
    }
  }, [navigate]);

  if (!authorized) return null;

  const handleNewData = () => {
    if (!apikey | temp  ){
        return alert('No values to update it.')
    }
    sessionStorage.setItem('API_KEY', apikey);
  }

  const handleSettings = () => {
    return (
        <div className="settings">
            <h3>Settings</h3>
            <label htmlFor="">Temperature</label>
            <input type="range" min='0' max='1' step='0.1' onChange={(e) => setTemp(e.target.value)} />

            <label htmlFor="">New API Key</label>
            <input type="password" placeholder="Update API key"   />

            <button className="save-btn" onClick={handleNewData} >Save</button>
        </div>
    )
  }

  return (
    <div className="chat-layout">
        {/* left sidebar */}
        <div className="sidebar">
            <div className='top-section' >
                <div className="sidebar-header">
                    <h2>Sections</h2>
                </div>
                <div className="sessio-list">
                    <div className="session-item active">Chat 1</div>
                    <div className="session-item">Chat 2</div>
                </div>
            </div>

            <button onClick={handleSettings} className='settings-btn' >Settings</button>
            
        </div>

        {/* Right side Chatting layout */}
        <div className="chat-area">
            <div className="messages">
                <div className="message user">
                    Hello
                </div>
                <div className="message bot">
                    Hi Raja! How can I help you? {temp}
                </div>
            </div>
            <div className="chat-input-area">
                <input type="text" placeholder="Type your message..." onChange={(e) => setApikey(e.target.value)} />
                <button>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Chat;