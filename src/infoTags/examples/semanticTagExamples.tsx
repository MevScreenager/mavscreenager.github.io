import { getMilliseconds, now, nowISO } from "../../scripts/dataNow"

export const Footer = <div>
    <details>
        <summary><code><b>Code</b></code></summary>
        <p>
            <code>
                &lt;footer&gt;<br/>
                &nbsp;&nbsp;&nbsp;&lt;p&gt;Ilya&lt;/p&gt;<br/>
                &nbsp;&nbsp;&nbsp;&lt;p&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tg: @MavScreenager<br/>
                &nbsp;&nbsp;&nbsp;&lt;/p&gt;<br/>
                &lt;/footer&gt;
            </code>
        </p>
    </details>
</div>


export const Nav = <div>
    <p><nav>
        <a href="https://doka.guide/html/" target="_blank">HTML</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://doka.guide/css/" target="_blank">CSS</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://doka.guide/js/" target="_blank">JS</a>
    </nav></p>
</div>

export const Time = <div>
    <p>
        <time dateTime={nowISO().toString()}>{now()}</time>
    </p>
</div>

export const Data = <div>
    <details>
        <summary><code><b>Code</b></code></summary>
        <p>
            <code>
                &lt;p&gt;<br/>
                &nbsp;&nbsp;&nbsp;&lt;data value='2'&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;два<br/>
                &nbsp;&nbsp;&nbsp;&lt;/data&gt;<br/>
                &lt;/p&gt;
            </code>
        </p>
    </details>
</div>

export const Sub = <div>
    <p>H<sub>2</sub>O</p>
</div>

export const Sup = <div>
    <p>c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup></p>
</div>

export const Del = <div>
    <p><pre id="tag-del-pre">
        body {'{'}<br/>
        &nbsp;&nbsp;&nbsp;font-size: 16px;<br/>
        &nbsp;&nbsp;&nbsp;<del>color: black;</del><br/>
        &nbsp;&nbsp;&nbsp;<ins>color: white;</ins><br/>
        {'}'}
    </pre></p>
</div>

export const Kbd = <div>
    <p><kbd>Ctrl</kbd> + <kbd>C</kbd></p>
</div>

export const Mark = <div>
    <p><mark>Выделение маркером</mark></p>
</div>

export const Output = <div>
    <p>атрибут <code>role='status'</code> позволяет автоматически считывать содержимое, когда оно обновляется</p>
</div>

export const Em = <div>
    <p>Я <em>хочу</em> создать Иэна</p>
</div>

export const Var = <div>
    <p>
        <var>E</var> = <var>m</var> × <var>c<sup>2</sup></var>
    </p>
</div>

export const Abbr = <div>
    <p>
        <dfn><abbr>HiPe</abbr></dfn>: Hi People
    </p>
</div>

export const Samp = <div>
    <p>
        <samp>{getMilliseconds()}</samp>
    </p>
</div>