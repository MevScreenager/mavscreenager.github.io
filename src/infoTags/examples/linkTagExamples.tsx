// import image from '../media/image/3.jpg';
const image1 = require('../media/image/3.jpg');
const image2 = require('../media/image/9.png');

export const A = <div>
    <a href="https://vk.com/foxesinourheart" target="_blank">
        <img src={image1} alt="Neil Josten"/>
    </a>
    <p>Блог о Лисьей норе</p>
</div>

export const Link = <div>
    <p>
        <pre>
            &lt;head&gt;<br/>   
            &nbsp;&nbsp;&nbsp;&lt;link&gt;...&lt;/link&gt;<br/>
            &lt;/head&gt;<br/>
        </pre>
    </p>
</div>


export const Map = <div>
    <p><pre>
        &lt;map&gt;<br/>
        &nbsp;&nbsp;&nbsp;&lt;area shape="circle"<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coords="2,2,1"<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;... /&gt;<br/>
        &lt;/map&gt;
    </pre></p>
</div>

export const Area = <div>
        <map name="doka">
            <area shape="rect" coords="47,4,319,64" href="https://doka.guide/html/" target="_blank" alt="HTML"/>
            <area shape="rect" coords="46,69,318,129" href="https://doka.guide/css/" target="_blank" alt="CSS"/>
            <area shape="rect" coords="46,133,318,193" href="https://doka.guide/js/" target="_blank" alt="JS"/>
        </map>
        <img useMap="#doka" src={image2}/>
    </div>