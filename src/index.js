import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Contact = (props) => {
  console.log(props);

  return (
    <div className="friend-item">
      <div>
        <h3>{props.name}</h3>
        <h4>{props.email}</h4>
        <h4>{props.phone}</h4>
        {props.isDeletable ? (
          <button>Delete</button>
        ) : (
          <h1>is not displayed</h1>
        )}
      </div>
    </div>
  );
};

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <Contact
        name="Johny"
        email="johny123@gmail.com"
        phone="+1324141241"
        isDeletable="true"
      />
      <Contact
        name="Lukas"
        email="lukas982@gmail.com"
        phone="+2326892191"
        isDeletable="true"
      />
      <Contact
        name="Charly"
        email="charly854@gmail.com"
        phone="+1592839246"
        isDeletable="true"
      />
      <Contact
        name="Jack"
        email="234jack@gmail.com"
        phone="+6987231241"
        isDeletable="true"
      />
      <Contact
        name="Alex"
        email="alex234@gmail.com"
        phone="+1324678120"
        isDeletable="true"
      />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
