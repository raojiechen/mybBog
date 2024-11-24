"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3177],{6262:(s,i)=>{i.A=(s,i)=>{const a=s.__vccOpts||s;for(const[s,h]of i)a[s]=h;return a}},3575:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>t,data:()=>e});var h=a(641);const n={},t=(0,a(6262).A)(n,[["render",function(s,i){return(0,h.uX)(),(0,h.CE)("div",null,i[0]||(i[0]=[(0,h.Fv)('<h1 id="_1-4-1-equals、hashcode" tabindex="-1"><a class="header-anchor" href="#_1-4-1-equals、hashcode"><span>1.4.1 equals、hashcode</span></a></h1><h2 id="一、概念" tabindex="-1"><a class="header-anchor" href="#一、概念"><span>一、概念</span></a></h2><p>equals方法和hashCode方法Object类中的两个基础方法，它们共同协作来判断两个对象是否相等。——原因在于性能。</p><p>使用过 HashMap 我们就知道，通过 hash 计算之后，我们就可以直接定位出某个值存储的位置了，那么试想一下，如果你现在要查询某个值是否在集合中？如果不通过 hash 方式直接定位元素（的存储位置），那么就只能按照集合的前后顺序，一个一个的询问比对了，而这种依次比对的效率明显低于 hash 定位的方式。这就是 hash 以及 hashCode 存在的价值。</p><p>当我们对比两个对象是否相等时，我们就可以先使用 hashCode 进行比较，如果比较的结果是 true，那么就可以使用 equals 再次确认两个对象是否相等，如果比较的结果是 true，那么这两个对象就是相等的，否则其他情况就认为两个对象不相等。这样就大大的提升了对象比较的效率，这也是为什么 Java 设计使用 hashCode 和 equals 协同的方式，来确认两个对象是否相等的原因。</p><p>那为什么不直接使用 hashCode 就确定两个对象是否相等呢？——这是因为<strong>不同对象的 hashCode 可能相同；但 hashCode 不同的对象一定不相等</strong>，所以使用 hashCode 可以起到快速初次判断对象是否相等的作用。</p><p>所以：</p><ul><li>如果两个对象的hashCode不相同，那么这两个对象肯定不同</li><li>如果两个对象的hashCode相同，不代表着两个对象是同一个对象，也可能是两个对象</li><li>如果两个对象相等，那么他们的hashCode就一定相同。</li></ul><p>注意：<strong>判断两个对象是否相等一定要重写equals()方法，注意重写hashCode()方法</strong>。</p><p>判断两个对象是否相等，为什么重写equals方法，为什么重写equals方法时再重写hashCode方法？</p><h2 id="二、重写equals方法" tabindex="-1"><a class="header-anchor" href="#二、重写equals方法"><span>二、重写equals方法</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] args) {</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stu1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;李华&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 25</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stu2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;李华&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 25</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">stu1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stu2));</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逻辑上可以根据学生的姓名和学号是否相等来判断是不是同一个人，那么这时stu1和stu2就应该是一个人，即stu1.equals(stu2)打印的结果是true才符合逻辑，看看结果</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>为什么打印的结果却为false？我们查看一下Student类的equals方法</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> equals</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> obj) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> obj)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到Student类的equals方法是继承的Object类，即stu1.equals(stu2)实际上是返回的stu1==stu2的值，==运算符是比较两个对象的内存地址值，stu1和stu2是指向的两个不同的对象，所以他们的内存地址值肯定不一样</p><p>这种情况下，需要自己重写Student中的equals方法才能判断出stu1和stu2是否相等 通过idea的自动生成equals方法（IDEA会将equals方法和hashcode方法一起生成），再看看现在的Student类</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> equals</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> o) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> o) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (o </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> o</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> student </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (Student) o</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Objects</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(name, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Objects</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stuId, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">student</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">stuId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hashCode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Objects</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(name, stuId);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>equals首先判断两个对象的内存地址是否相同，再判断是否是同一地址，最后再判断里面的属性值是否相等，所以这时再执行stu1.equals(stu2)，结果就是true了，在以后逻辑中就可以通过姓名和学号判断是否是同一个学生了。</p><p>再次执行程序，输出结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>因此<strong>通常情况下，我们要判断两个对象是否相等，一定要重写 equals 方法</strong>，这就是为什么要重写 equals 方法的原因。</p><h2 id="三、重写hashcode" tabindex="-1"><a class="header-anchor" href="#三、重写hashcode"><span>三、重写hashCode</span></a></h2><p>我们知道，在HashMap里面，如果key重复的话，就会覆盖以前的值，我们重写equals方法，但是没有重写hashCode方法，那么看下面代码简单测试一下</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] args) {</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stu1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;张三&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stu2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;张三&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Map</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Student</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> map </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HashMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stu1, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stu2, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(map);</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码stu1.equals(stu2)相等，也是我们认为的逻辑上相等，那么打印的结果，也应该是下面的操作把上面的值覆盖了才合理，看看打印结果</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{com.Student@610455d6=1, com.Student@511d50c0=2}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里竟然打印了两个值， 不合理啊，为什么不合理呢？ 因为在HashMap中，是根据key的hashcode值确定数组下标位置的，如果数组下标位置相同，先比较key的hashcode值，如果相同，再用equals方法对比，如果相等，则覆盖，所以刚刚map.put(1,2)能够覆盖第一个操作，是因为他们的key都是1，所以他们的hashcode是相等，同样hashmap计算他们的数组下标位置也是相同的 所以我们看看我们的stu1和stu2的hashcode值是否相等</p><p>发现他们的值并不一样，我们看看hashcode方法源码</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> native</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hashCode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这是一个本地方法，它的实现与本地机器有关，这里我们暂且认为他返回的是对象存储的物理位置。 stu1和stu2本来就是在堆内存中的两个不同的对象，他们的物理地址值肯定不相同了，但是他们的name属性和stuId相等，在我们的逻辑里相等的，我们需要他们equals相等，重写了equals方法，现在需要他们hashcode也相等，是不是应该也重写他们的hashcode方法？</p><p>重写了hashCode方法后</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] args) {</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stu1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;张三&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stu2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;张三&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Map</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Student</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> map </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HashMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stu1, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stu2, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">stu1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hashCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">stu2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hashCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">24022540</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">24022540</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>发现hashcode值相等了，我们再试试map里面能否覆盖</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stu1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;张三&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Student</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stu2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Student</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;张三&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Map</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Student</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> map </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> HashMap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stu1, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stu2, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(map);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{com.Student@16e8e0c=2}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>发现覆盖成功了，所以现在知道为什么重写了equals方法后必须要重写hashcode方法了吧</p><p>在java里面，如果两个对象的hashcode相等，他们equals对比却不一定相等，如果两个对象equals对比相等，他们的hashcode值一定相等 所以不光在HashMap里面是先比较hashcode值再比较equals，在HashTable或HashSet里面也是这样的逻辑，因为先比较hashcode仅为一个int值，比较的效率更高，可以更快速的排除不相等的情况。</p><h2 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结"><span>四、总结</span></a></h2><p>hashCode 和 equals 两个方法是用来协同判断两个对象是否相等的，采用这种方式的原因是可以提高程序插入和查询的速度，如果在重写 equals 时，不重写 hashCode，就会导致在某些场景下，例如将两个相等的自定义<a href="https://cloud.tencent.com/product/cos?from_column=20065&amp;from=20065" target="_blank" rel="noopener noreferrer">对象存储</a>在 Set 集合时，就会出现程序执行的异常，为了保证程序的正常执行，所以我们就需要在重写 equals 时，也一并重写 hashCode 方法才行。</p>',44)]))}]]),e=JSON.parse('{"path":"/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/1.4%20%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B/1.4.1%20equals%E3%80%81hashcode.html","title":"1.4.1 equals、hashcode","lang":"zh-CN","frontmatter":{"\x3c!--cover":"/assets/images/cover2.jpg--\x3e","icon":"pen-to-square","date":"2024-11-20T00:00:00.000Z","category":["面向对象编程"],"tag":["equals","hashcode"],"star":true,"ticky":true,"description":"1.4.1 equals、hashcode 一、概念 equals方法和hashCode方法Object类中的两个基础方法，它们共同协作来判断两个对象是否相等。——原因在于性能。 使用过 HashMap 我们就知道，通过 hash 计算之后，我们就可以直接定位出某个值存储的位置了，那么试想一下，如果你现在要查询某个值是否在集合中？如果不通过 hash ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/1.4%20%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B/1.4.1%20equals%E3%80%81hashcode.html"}],["meta",{"property":"og:site_name","content":"Java笔记"}],["meta",{"property":"og:title","content":"1.4.1 equals、hashcode"}],["meta",{"property":"og:description","content":"1.4.1 equals、hashcode 一、概念 equals方法和hashCode方法Object类中的两个基础方法，它们共同协作来判断两个对象是否相等。——原因在于性能。 使用过 HashMap 我们就知道，通过 hash 计算之后，我们就可以直接定位出某个值存储的位置了，那么试想一下，如果你现在要查询某个值是否在集合中？如果不通过 hash ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T13:27:06.000Z"}],["meta",{"property":"article:tag","content":"equals"}],["meta",{"property":"article:tag","content":"hashcode"}],["meta",{"property":"article:published_time","content":"2024-11-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-24T13:27:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.4.1 equals、hashcode\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-24T13:27:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"冉庆\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、概念","slug":"一、概念","link":"#一、概念","children":[]},{"level":2,"title":"二、重写equals方法","slug":"二、重写equals方法","link":"#二、重写equals方法","children":[]},{"level":2,"title":"三、重写hashCode","slug":"三、重写hashcode","link":"#三、重写hashcode","children":[]},{"level":2,"title":"四、总结","slug":"四、总结","link":"#四、总结","children":[]}],"git":{"createdTime":1732091069000,"updatedTime":1732454826000,"contributors":[{"name":"ranqing","email":"2516488782@qq.com","commits":1}]},"readingTime":{"minutes":6.11,"words":1834},"filePathRelative":"一、Java基础/1.4 面向对象编程/1.4.1 equals、hashcode.md","localizedDate":"2024年11月20日","excerpt":"\\n<h2>一、概念</h2>\\n<p>equals方法和hashCode方法Object类中的两个基础方法，它们共同协作来判断两个对象是否相等。——原因在于性能。</p>\\n<p>使用过 HashMap 我们就知道，通过 hash 计算之后，我们就可以直接定位出某个值存储的位置了，那么试想一下，如果你现在要查询某个值是否在集合中？如果不通过 hash 方式直接定位元素（的存储位置），那么就只能按照集合的前后顺序，一个一个的询问比对了，而这种依次比对的效率明显低于 hash 定位的方式。这就是 hash 以及 hashCode 存在的价值。</p>\\n<p>当我们对比两个对象是否相等时，我们就可以先使用 hashCode 进行比较，如果比较的结果是 true，那么就可以使用 equals 再次确认两个对象是否相等，如果比较的结果是 true，那么这两个对象就是相等的，否则其他情况就认为两个对象不相等。这样就大大的提升了对象比较的效率，这也是为什么 Java 设计使用 hashCode 和 equals 协同的方式，来确认两个对象是否相等的原因。</p>","autoDesc":true}')}}]);