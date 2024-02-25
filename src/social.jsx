import React, { useState } from 'react';
import { Application } from '@spLinetool/runtime'; // Assuming Application is exported from the Spline tool runtime
import './style.css'; // Importing external CSS

function Canvas({ id, url }) {
  const [app, setApp] = useState(null);

  useEffect(() => {
    const canvas = document.getElementById(id);
    const newApp = new Application(canvas);
    newApp.Load(url);
    setApp(newApp);
  }, [id, url]);

  return <canvas id={id}></canvas>;
}

function Post({ title, user, content }) {
  return (
    <div className="post">
      <div className="post-header">
        <button className="btn post-title">{title}</button>
        <div className="lines"></div>
        <button className="btn post-user">
          <span>{user}</span>
        </button>
      </div>
      <p className="post-text">{content}</p>
    </div>
  );
}

function Social() {
  const models = [
    { id: 'canvas1', url: 'https://prod.spline.design/ZAMB481XbLJ-mcXU/scene.spLinecode' },
    { id: 'canvas2', url: 'https://prod.spline.design/Rv®Bn6tcfrKW-56l/scene.spLinecode' },
    { id: 'canvas3', url: 'https://prod.spline.design/fn15HDyqwaw28tod/scene.spLinecode' }
  ];

  const [currentModel, setCurrentModel] = useState(models[0]);

  const swapModels = (index) => {
    setCurrentModel(models[index]);
  };

  return (
    <div className="app">
      <div className="terminal">
        <div className="canvases">
          {models.map((model, index) => (
            <Canvas key={index} id={model.id} url={model.url} />
          ))}
        </div>
        <div className="posts column">
          <Post
            title="new trailers"
            user="user54869"
            content="So I ordered my own personal robot a while back, and it arrived today. It's absolutely CRAZY! It's amazing!!! Highly recommend everyone to get one of these for themselves. I rate it 18/10."
          />
          <Post
            title="updates"
            user="SENOON"
            content="Hi guys, just came back from my vacation in the outskirts, what's everyone up to? Hope you're doing great!"
          />
          <Post
            title="cat update"
            user="user54852"
            content="You guys, I bought a new cat today!"
          />
          <Post
            title="Americano recipes"
            user="User 25569"
            content="Any good Americano recipes?"
          />
        </div>
      </div>
    </div>
  );
}

export default Social;
