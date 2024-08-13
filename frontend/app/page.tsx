import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

<div className="main">
                <div className="header">
                    <span>My Project - index.html</span>
                    <span>Connected to: Localhost</span>
                </div>

                <div className="editor">
                    <div className="file-explorer">
                        <h3>Files</h3>
                        <ul>
                            <li>index.html</li>
                            <li>styles.css</li>
                            <li>script.js</li>
                        </ul>
                    </div>

                    <div className="code-area">
                        <div className="line-numbers">
                            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10
                        </div>
                        <div className="code-content">
                            &lt;!DOCTYPE html&gt;<br />
                            &lt;html lang="en"&gt;<br />
                            &lt;head&gt;<br />
                            &nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;<br />
                            &nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br />
                            &nbsp;&nbsp;&lt;title&gt;My IDE&lt;/title&gt;<br />
                            &lt;/head&gt;<br />
                            &lt;body&gt;<br />
                            &nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;/h1&gt;<br />
                            &lt;/body&gt;<br />
                            &lt;/html&gt;
                        </div>
                    </div>
                </div>

                <div className="status-bar">
                    <span>Spaces: 4</span>
                    <span>UTF-8</span>
                    <span>LF</span>
                    <span>JavaScript</span>
                </div>
            </div>
    );
};
