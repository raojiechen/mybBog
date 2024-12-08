"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6349],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,l]of s)a[i]=l;return a}},232:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>t,data:()=>e});var l=a(641);const n={},t=(0,a(6262).A)(n,[["render",function(i,s){return(0,l.uX)(),(0,l.CE)("div",null,s[0]||(s[0]=[(0,l.Fv)('<h1 id="_2-5-2-类加载的过程" tabindex="-1"><a class="header-anchor" href="#_2-5-2-类加载的过程"><span>2.5.2 类加载的过程</span></a></h1><p>此文说的类型，指的是“类和接口”</p><p><strong>类加载的过程</strong>：加载 验证 准备 解析 初始化</p><h2 id="一、加载" tabindex="-1"><a class="header-anchor" href="#一、加载"><span>一、加载</span></a></h2><hr><p>加载其实可以用一句话来概括，然后对这句话进行解读</p><p><strong>加载</strong>：读一个class文件，将其转化为某种静态数据结构存储在方法区中，并在堆中生成一个便于用户调用的java.lang.Class类型的对象过程。</p><p>解读：</p><ul><li>读一个class文件，没有指定从哪里获取，如何获取，所以就特么很灵活，比如从网络中获取、数据库中获取、加密文件获取等</li><li>加载阶段是开发人员可控性最强的阶段，即可以用内置的引导类加载器完成，又可以用户自定义类加载器完成</li><li>方法区里就是存放类信息，可前面的内容贯通起来了</li><li>在堆中生成一个便于用户调用的java.lang.Class对象，这个对象作为程序访问方法区中的类型数据结构的外部接口。（对象.getClass()获取class对象，然后根据对象获取类的成员变量和方法，具体参考<a href="https://ranqingisfine.github.io/myBlog/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/1.4%20%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B/1.4.2%20%E5%8F%8D%E5%B0%84.html" target="_blank" rel="noopener noreferrer">反射</a>）</li></ul><p>加载阶段和连接阶段是交叉进行，加载阶段尚未完成，连接阶段可能已经开始了，这两个阶段的开始时间仍然保持着固定的先后顺序。</p><h2 id="二、验证" tabindex="-1"><a class="header-anchor" href="#二、验证"><span>二、验证</span></a></h2><hr><p>为什么要验证？避免Java虚拟机被恶意代码攻击。</p><p>验证阶段会完成4个阶段的检验动作：文件格式验证、元数据验证、字节码验证、符号引用验证。</p><p><strong>文件格式验证</strong>：验证字节流是否符合Class文件格式的规范。比如验证是否以魔数开头等。</p><p><strong>元数据验证</strong>：对字节码描述的信息进行分析，确保符合《Java语言规范》要求。</p><p><strong>字节码验证</strong>：确定程序语义是合法的、符合逻辑的。</p><p><strong>符号引用验证</strong>：确保符号引用转化为直接引用（解析阶段）能正常执行。</p><h2 id="三、准备" tabindex="-1"><a class="header-anchor" href="#三、准备"><span>三、准备</span></a></h2><hr><p><strong>准备阶段</strong>：正式为类中定义的变量（即静态变量，被static修饰的变量）分配内存并设置类变量初始值的阶段。</p><p>解读：</p><ul><li>内存分配在哪里？JDK8后类变量随着Class对象被分配在堆里</li><li>准备阶段仅包括类变量，不包括实例变量（实例变量在对象实例化时随着对象分配在堆中）</li><li>通常情况初始值指的是零值，比如<code>public static int value=123</code>准备阶段后初始值是0，而不是123，value赋值123要等类的初始化阶段才执行</li><li>特殊情况静态不可变，比如<code>public static final int value=123</code>，虚拟机准备阶段会给value赋值为123</li></ul><h2 id="四、解析" tabindex="-1"><a class="header-anchor" href="#四、解析"><span>四、解析</span></a></h2><hr><p><strong>解析阶段</strong>：Java虚拟机将常量池内的符号引用替换为直接引用的过程。（结合P49对象的创建过程）</p><p>解读：当一个Java类A被编译成Class文件后，A中引用了B，那么在编译阶段，A是不知道B有没有被编译的，此时B页一定未加载，所以A肯定不知道B的实际地址。此时在A的Class文件中，将使用一个字符串S来代表B的地址，S就是符号引用。</p><p>在运行时，如果A发生了类加载，到了解析阶段会发现B还未被加载，那么会触发B的类加载，将B加载到虚拟机中，此时A中B的符号引用将被替换成B的实际地址，这被称为直接引用。</p><p>解析阶段分为：</p><ul><li>类或接口的解析</li><li>字段解析</li><li>方法解析</li></ul><h2 id="五、初始化" tabindex="-1"><a class="header-anchor" href="#五、初始化"><span>五、初始化</span></a></h2><hr><p>类的初始化是类加载过程的最后一个步骤，初始化阶段Java虚拟机才真正开始执行类中编写的Java程序代码。</p><p>初始化阶段就是执行类构造器<code>&lt;clinit&gt;()</code>方法的过程，<code>&lt;clinit&gt;()</code>并不是程序猿在Java代码中直接编写的方法，而是javac编译器的自动生成物。比如前面讲的准备阶段类变量被赋0值，而在初始化阶段，就可以给变量赋值123。</p><ul><li>简单理解下<code>&lt;clinit&gt;()</code>：由编译器自动收集类中的所有类变量的赋值动作和静态语句块（static{}块）中的语句合并产生的，编译器收集的顺序是由语句在源文件中出现的<strong>顺序</strong>决定的，例如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Clinit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    static</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(i);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//输出i=1</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示调用父类构造但是器<code>&lt;clinit&gt;()</code>不需要，Java虚拟机会保证子类的<code>&lt;clinit&gt;()</code>执行前，父类的<code>&lt;clinit&gt;()</code>方法已经执行完毕。意味着父类的静态语句块要优先于子类的变量赋值操作，例如：</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  \tpublic</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> A</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  \tstatic</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      \tA</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Sub</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  \tpublic</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> B</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] args){</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">  \tSystem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Sub</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">B</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//输出是2</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;clinit&gt;()</code>对于类和接口不是必须的，如果一个类中没有静态语句块，也没有对变量的赋值操作，编译器可以不为这个类生成<code>&lt;clinit&gt;()</code></li><li>接口中不能有静态语句块，但是有变量的初始化赋值，所以还是有<code>&lt;clinit&gt;()</code>的，但和类不一样的是，执行接口的<code>&lt;clinit&gt;()</code>不需要先执行父接口的<code>&lt;clinit&gt;()</code>，此外，接口的实现类在初始化时也不会执行接口的<code>&lt;clinit&gt;()</code></li><li>确保一个类的<code>&lt;clinit&gt;()</code>在多线程环境中能被正确地加锁同步。如果多个线程同时去初始化一个类，那么只会有其中一个线程去执行这个类的<code>&lt;clinit&gt;()</code>，其它线程都需要阻塞等待，直到活动线程<code>&lt;clinit&gt;()</code>执行完毕</li></ul>',39)]))}]]),e=JSON.parse('{"path":"/%E4%BA%8C%E3%80%81JVM/2.5%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%B1%BB%E5%8A%A0%E8%BD%BD%E6%9C%BA%E5%88%B6/2.5.2%20%E7%B1%BB%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%BF%87%E7%A8%8B.html","title":"2.5.2 类加载的过程","lang":"zh-CN","frontmatter":{"\x3c!--cover":"/assets/images/cover2.jpg--\x3e","icon":"pen-to-square","date":"2024-12-08T00:00:00.000Z","category":["JVM","虚拟机类加载机制"],"tag":["类加载的过程"],"star":true,"ticky":true,"description":"2.5.2 类加载的过程 此文说的类型，指的是“类和接口” 类加载的过程：加载 验证 准备 解析 初始化 一、加载 加载其实可以用一句话来概括，然后对这句话进行解读 加载：读一个class文件，将其转化为某种静态数据结构存储在方法区中，并在堆中生成一个便于用户调用的java.lang.Class类型的对象过程。 解读： 读一个class文件，没有指定从...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/%E4%BA%8C%E3%80%81JVM/2.5%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%B1%BB%E5%8A%A0%E8%BD%BD%E6%9C%BA%E5%88%B6/2.5.2%20%E7%B1%BB%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%BF%87%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Java笔记"}],["meta",{"property":"og:title","content":"2.5.2 类加载的过程"}],["meta",{"property":"og:description","content":"2.5.2 类加载的过程 此文说的类型，指的是“类和接口” 类加载的过程：加载 验证 准备 解析 初始化 一、加载 加载其实可以用一句话来概括，然后对这句话进行解读 加载：读一个class文件，将其转化为某种静态数据结构存储在方法区中，并在堆中生成一个便于用户调用的java.lang.Class类型的对象过程。 解读： 读一个class文件，没有指定从..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T09:05:42.000Z"}],["meta",{"property":"article:tag","content":"类加载的过程"}],["meta",{"property":"article:published_time","content":"2024-12-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-08T09:05:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.5.2 类加载的过程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-08T09:05:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"冉庆\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、加载","slug":"一、加载","link":"#一、加载","children":[]},{"level":2,"title":"二、验证","slug":"二、验证","link":"#二、验证","children":[]},{"level":2,"title":"三、准备","slug":"三、准备","link":"#三、准备","children":[]},{"level":2,"title":"四、解析","slug":"四、解析","link":"#四、解析","children":[]},{"level":2,"title":"五、初始化","slug":"五、初始化","link":"#五、初始化","children":[]}],"git":{"createdTime":1733648742000,"updatedTime":1733648742000,"contributors":[{"name":"ranqing","email":"2516488782@qq.com","commits":1}]},"readingTime":{"minutes":5.19,"words":1558},"filePathRelative":"二、JVM/2.5 虚拟机类加载机制/2.5.2 类加载的过程.md","localizedDate":"2024年12月8日","excerpt":"\\n<p>此文说的类型，指的是“类和接口”</p>\\n<p><strong>类加载的过程</strong>：加载\\t验证\\t准备\\t解析\\t初始化</p>\\n<h2>一、加载</h2>\\n<hr>\\n<p>加载其实可以用一句话来概括，然后对这句话进行解读</p>\\n<p><strong>加载</strong>：读一个class文件，将其转化为某种静态数据结构存储在方法区中，并在堆中生成一个便于用户调用的java.lang.Class类型的对象过程。</p>\\n<p>解读：</p>\\n<ul>\\n<li>读一个class文件，没有指定从哪里获取，如何获取，所以就特么很灵活，比如从网络中获取、数据库中获取、加密文件获取等</li>\\n<li>加载阶段是开发人员可控性最强的阶段，即可以用内置的引导类加载器完成，又可以用户自定义类加载器完成</li>\\n<li>方法区里就是存放类信息，可前面的内容贯通起来了</li>\\n<li>在堆中生成一个便于用户调用的java.lang.Class对象，这个对象作为程序访问方法区中的类型数据结构的外部接口。（对象.getClass()获取class对象，然后根据对象获取类的成员变量和方法，具体参考<a href=\\"https://ranqingisfine.github.io/myBlog/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/1.4%20%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B/1.4.2%20%E5%8F%8D%E5%B0%84.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">反射</a>）</li>\\n</ul>","autoDesc":true}')}}]);