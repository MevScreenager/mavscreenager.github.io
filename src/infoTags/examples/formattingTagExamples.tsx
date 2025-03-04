export const Address = <div><p><address>Moscow, Russia</address></p></div>

export const Blockquote = <div>
        <blockquote>
            <p>Кто думает, что постиг всё, тот ничего не знает.</p>
        </blockquote>
        <p>— Лао Цзы, <cite>Tao Te Ching</cite></p>
    </div>

export const BlockquoteCode = <div>
    <details>
        <summary><b><code>Code</code></b></summary>
        <p>
            <code>
                &lt;blockquote&gt;<br/>
                &nbsp;&nbsp;&nbsp;&lt;p&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Кто думает, что постиг всё, тот ничего не знает.<br/>
                &nbsp;&nbsp;&nbsp;&lt;/p&gt;<br/>
                &lt;/blockquote&gt;<br/>
                &lt;p&gt;<br/>
                &nbsp;&nbsp;&nbsp;— Лао Цзы,<br/>
                &nbsp;&nbsp;&nbsp;&lt;cite&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tao Te Ching<br/>
                &nbsp;&nbsp;&nbsp;&lt;/cite&gt;<br/>
                &lt;/p&gt;
            </code>
        </p>
    </details>
</div>

export const Q = <div>
    <p><ins><b>Конфуций</b></ins> - древний мыслитель и философ Китая:<br/>
        <q>Выбери себе работу по душе, и тебе не придётся работать ни одного дня в своей жизни</q>
    </p>
</div>

export const QCode = <div>
    <details>
        <summary><b><code>Code</code></b></summary>
        <p>
            <code>
                &lt;p&gt;<br/>
                &nbsp;&nbsp;&nbsp;Конфуций - древний мыслитель и философ Китая:<br/>
                &nbsp;&nbsp;&nbsp;&lt;q lang='язык цитаты'&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Выбери ...<br/>
                &nbsp;&nbsp;&nbsp;&lt;/q&gt;<br/>
                &lt;/p&gt;
            </code>
        </p>
    </details>
</div>

export const Br = <div>
    <p>
        Перенос&lt;br/&gt;<br/>строки
    </p>
</div>

export const Wbr = <div>
    <p>
        Место где можно сделать &lt;wbr/&gt; <wbr/>перенос
    </p>
</div>

export const Hr = <div>
    <p><hr/></p>
</div>

export const B = <div>
    <p><b>Полужирный текст</b>; ключевое слово, без особой важности</p>
</div>

export const I = <div>
    <p><i>Интонационное выделение, без семантического значения</i></p>
</div>

export const S = <div>
    <p><s>Перечеркнутый текст</s></p>
</div>

export const U = <div>
    <p><u>Шол</u> (шел)</p>
</div>

export const Bdo = <div>
    <p>Направление текста<br/>
        <bdo dir="rtl">Направление текста</bdo>
    </p>
</div>

export const Bdi = <div>
    <p>
        <bdo dir="rtl">
            <bdi lang="ar">سيزونينكو ايليا</bdi> - автор<br/>
        </bdo>
    </p>
</div>

export const Small = <div>
    <p>
        <small>Не является публичной офертой. &copy; 2025 HiPe</small>
    </p>
</div>

export const Pre = <div>
    <p>
<pre aria-label="Изображение кота, собранное из текстовых символов.">
  &nbsp;./\„„./\.<br/>
  &nbsp;(='•'= ) .<br/>
  &nbsp;(") „. (").<br/>
  &nbsp; \,\„„/,/<br/>
  &nbsp; │„„. „│<br/>
  &nbsp; /„/„ \„\<br/>
  &nbsp;(„)''l l''(„)<br/>
  &nbsp; .. ((..<br/>
  &nbsp;&nbsp;&nbsp; . )).<br/>
  &nbsp;&nbsp;&nbsp; .((.<br/>
</pre>

    </p>
</div>

export const Code = <div>
    <p>
        <code>const app:FC&lt;IApp&gt; = ...</code>
    </p>
</div>