"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2314],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,e]of s)a[i]=e;return a}},6593:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>c,data:()=>m});var e=a(641);const t=a.p+"assets/img/7.5a94496a.png",n=a.p+"assets/img/8.c042096b.png",l=a.p+"assets/img/9.db3ce8c2.png",h=a.p+"assets/img/10.eb2f97e2.png",p=a.p+"assets/img/11.cffd1ff7.png",r=a.p+"assets/img/12.932e98fe.png",k=a.p+"assets/img/13.ace0afb2.png",d=a.p+"assets/img/14.cf227a58.png",g=a.p+"assets/img/15.c63f23c4.png",A=a.p+"assets/img/16.811ed5a8.png",o={},c=(0,a(6262).A)(o,[["render",function(i,s){return(0,e.uX)(),(0,e.CE)("div",null,s[0]||(s[0]=[(0,e.Fv)('<h1 id="_5-1-2-事务的四大隔离级别" tabindex="-1"><a class="header-anchor" href="#_5-1-2-事务的四大隔离级别"><span>5.1.2 事务的四大隔离级别</span></a></h1><p>导语：在看这文章的时候，脑海先想到平时代码里是如何用事务的，用的什么注解～</p><p>既然并发事务存在<strong>脏读、不可重复、幻读</strong>等问题，InnoDB实现了哪几种事务的隔离级别应对呢？</p><ul><li>读未提交（Read Uncommitted）</li><li>读已提交（Read Committed）</li><li>可重复读（Repeatable Read）（mysql默认隔离级别）</li><li>串行化（Serializable）</li></ul><h2 id="一、读未提交-read-uncommitted" tabindex="-1"><a class="header-anchor" href="#一、读未提交-read-uncommitted"><span>一、读未提交（Read Uncommitted）</span></a></h2><p>我们去数据库给它设置<strong>读未提交</strong>隔离级别，实践一下吧~</p><figure><img src="'+t+'" alt="读未提交" tabindex="0" loading="lazy"><figcaption>读未提交</figcaption></figure><p>先把事务隔离级别设置为read uncommitted，开启事务A，查询id=1的数据</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> session</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> transaction</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> isolation</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> level</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> read</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> uncommitted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> account </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这时候，另开一个窗口打开mysql，也把当前事务隔离级别设置为read uncommitted，开启事务B，执行更新操作</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> session</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> transaction</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> isolation</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> level</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> read</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> uncommitted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> account </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> balance</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">balance+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着回事务A的窗口，再查account表id=1的数据，结果如下：</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以发现，在<strong>读未提交（Read Uncommitted）</strong> 隔离级别下，一个事务会读到其他事务未提交的数据的，即存在<strong>脏读</strong>问题。事务B都还没commit到数据库呢，事务A就读到了，感觉都乱套了。。。实际上，读未提交是隔离级别最低的一种。</p><h2 id="二、读已提交-read-committed" tabindex="-1"><a class="header-anchor" href="#二、读已提交-read-committed"><span>二、读已提交（Read Committed）</span></a></h2><p>为了避免脏读，数据库有了比<strong>读未提交</strong>更高的隔离级别，即<strong>读已提交</strong>。</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>把当前事务隔离级别设置为读已提交（READ COMMITTED），开启事务A，查询account中id=1的数据</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> session</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> transaction</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> isolation</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> level</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> read</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> committed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> account </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另开一个窗口打开mysql，也把事务隔离级别设置为read committed，开启事务B，执行以下操作</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> session</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> transaction</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> isolation</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> level</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> read</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> committed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> account </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> balance</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">balance+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着回事务A的窗口，再查account数据，发现数据没变：</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们再去到事务B的窗口执行commit操作：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">commit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>最后回到事务A窗口查询，发现数据变了：</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由此可以得出结论，隔离级别设置为<strong>已提交读（READ COMMITTED）</strong> 时，已经不会出现脏读问题了，当前事务只能读取到其他事务提交的数据。但是，你站在事务A的角度想想，存在其他问题吗？</p><p><strong>读已提交的隔离级别会有什么问题呢？</strong></p><p>在同一个事务A里，相同的查询sql，读取同一条记录（id=1），读到的结果是不一样的，即<strong>不可重复读</strong>。所以，隔离级别设置为read committed的时候，还会存在<strong>不可重复读</strong>的并发问题。</p><h2 id="三、可重复读-repeatable-read" tabindex="-1"><a class="header-anchor" href="#三、可重复读-repeatable-read"><span>三、可重复读（Repeatable Read）</span></a></h2><p>可重复读级别又称为<strong>RR级别</strong></p><p>如果你的老板要求，在同个事务中，查询结果必须是一致的，即老板要求你解决不可重复的并发问题，怎么办呢？老板，臣妾办不到？来实践一下<strong>可重复读（Repeatable Read）</strong> 这个隔离级别吧~</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>哈哈，步骤1、2、6的查询结果都是一样的，即<strong>repeatable read解决了不可重复读问题</strong>，是不是心里美滋滋的呢，终于解决老板的难题了~</p><h3 id="_1、rr级别是否解决了幻读问题" tabindex="-1"><a class="header-anchor" href="#_1、rr级别是否解决了幻读问题"><span>1、RR级别是否解决了幻读问题</span></a></h3><p>再来看看网上的一个热点问题，有关于RR级别下，是否解决了幻读问题？我们来实践一下：</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由图可得，步骤2和步骤6查询结果集没有变化，看起来RR级别是已经解决幻读问题了~ 但是呢，<strong>RR级别还是存在这种现象</strong>：</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其实，上图如果事务A中，没有 <code>update accountsetbalance=200 whereid=5;</code>这步操作， <code>select*from account where id&gt;2</code>查询到的结果集确实是不变，这种情况没有<strong>幻读</strong>问题。但是，有了update这个骚操作，同一个事务，相同的sql，查出的结果集不同，这个是符合了<strong>幻读</strong>的定义~</p><p>这个问题，亲爱的朋友，你觉得它算幻读问题吗？</p><h2 id="四、串行化-serializable" tabindex="-1"><a class="header-anchor" href="#四、串行化-serializable"><span>四、串行化（Serializable）</span></a></h2><p>前面三种数据库隔离级别，都有一定的并发问题，现在放大招吧，实践SERIALIZABLE隔离级别。</p><p>把事务隔离级别设置为Serializable，开启事务A，查询account表数据</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> session</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> transaction</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> isolation</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> level</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> serializable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @@tx_isolation;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> account;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另开一个窗口打开mysql，也把事务隔离级别设置为Serializable，开启事务B，执行插入一条数据：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> session</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> transaction</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> isolation</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> level</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> serializable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @@tx_isolation;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">insert into</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> account(id,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,balance) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Li&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由图可得，当数据库隔离级别设置为serializable的时候，事务B对表的写操作，在等事务A的读操作。其实，这是隔离级别中最严格的，读写都不允许并发。它保证了最好的安全性，性能却是个问题~</p><p>参考文章：https://cloud.tencent.com/developer/article/1614863</p>',53)]))}]]),m=JSON.parse('{"path":"/%E4%BA%94%E3%80%81MySQL/5.1%20%E4%BA%8B%E5%8A%A1/5.1.2%20%E4%BA%8B%E5%8A%A1%E7%9A%84%E5%9B%9B%E5%A4%A7%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html","title":"5.1.2 事务的四大隔离级别","lang":"zh-CN","frontmatter":{"\x3c!--cover":"/assets/images/cover2.jpg--\x3e","icon":"pen-to-square","date":"2024-11-12T00:00:00.000Z","category":["MySQL","事务"],"tag":["读未提交","读已提交","可重复读","串行化"],"star":true,"ticky":true,"description":"5.1.2 事务的四大隔离级别 导语：在看这文章的时候，脑海先想到平时代码里是如何用事务的，用的什么注解～ 既然并发事务存在脏读、不可重复、幻读等问题，InnoDB实现了哪几种事务的隔离级别应对呢？ 读未提交（Read Uncommitted） 读已提交（Read Committed） 可重复读（Repeatable Read）（mysql默认隔离级别...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/%E4%BA%94%E3%80%81MySQL/5.1%20%E4%BA%8B%E5%8A%A1/5.1.2%20%E4%BA%8B%E5%8A%A1%E7%9A%84%E5%9B%9B%E5%A4%A7%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"Java笔记"}],["meta",{"property":"og:title","content":"5.1.2 事务的四大隔离级别"}],["meta",{"property":"og:description","content":"5.1.2 事务的四大隔离级别 导语：在看这文章的时候，脑海先想到平时代码里是如何用事务的，用的什么注解～ 既然并发事务存在脏读、不可重复、幻读等问题，InnoDB实现了哪几种事务的隔离级别应对呢？ 读未提交（Read Uncommitted） 读已提交（Read Committed） 可重复读（Repeatable Read）（mysql默认隔离级别..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-12T08:38:44.000Z"}],["meta",{"property":"article:tag","content":"读未提交"}],["meta",{"property":"article:tag","content":"读已提交"}],["meta",{"property":"article:tag","content":"可重复读"}],["meta",{"property":"article:tag","content":"串行化"}],["meta",{"property":"article:published_time","content":"2024-11-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-12T08:38:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.1.2 事务的四大隔离级别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-12T08:38:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"冉庆\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、读未提交（Read Uncommitted）","slug":"一、读未提交-read-uncommitted","link":"#一、读未提交-read-uncommitted","children":[]},{"level":2,"title":"二、读已提交（Read Committed）","slug":"二、读已提交-read-committed","link":"#二、读已提交-read-committed","children":[]},{"level":2,"title":"三、可重复读（Repeatable Read）","slug":"三、可重复读-repeatable-read","link":"#三、可重复读-repeatable-read","children":[{"level":3,"title":"1、RR级别是否解决了幻读问题","slug":"_1、rr级别是否解决了幻读问题","link":"#_1、rr级别是否解决了幻读问题","children":[]}]},{"level":2,"title":"四、串行化（Serializable）","slug":"四、串行化-serializable","link":"#四、串行化-serializable","children":[]}],"git":{"createdTime":1731323279000,"updatedTime":1731400724000,"contributors":[{"name":"ranqing","email":"2516488782@qq.com","commits":3}]},"readingTime":{"minutes":4.28,"words":1285},"filePathRelative":"五、MySQL/5.1 事务/5.1.2 事务的四大隔离级别.md","localizedDate":"2024年11月12日","excerpt":"\\n<p>导语：在看这文章的时候，脑海先想到平时代码里是如何用事务的，用的什么注解～</p>\\n<p>既然并发事务存在<strong>脏读、不可重复、幻读</strong>等问题，InnoDB实现了哪几种事务的隔离级别应对呢？</p>\\n<ul>\\n<li>读未提交（Read Uncommitted）</li>\\n<li>读已提交（Read Committed）</li>\\n<li>可重复读（Repeatable Read）（mysql默认隔离级别）</li>\\n<li>串行化（Serializable）</li>\\n</ul>\\n<h2>一、读未提交（Read Uncommitted）</h2>\\n<p>我们去数据库给它设置<strong>读未提交</strong>隔离级别，实践一下吧~</p>","autoDesc":true}')}}]);