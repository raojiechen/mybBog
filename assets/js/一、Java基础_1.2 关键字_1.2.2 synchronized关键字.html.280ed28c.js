"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2719],{6262:(e,n)=>{n.A=(e,n)=>{const t=e.__vccOpts||e;for(const[e,o]of n)t[e]=o;return t}},1659:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>i,data:()=>s});var o=t(641);const r={},i=(0,t(6262).A)(r,[["render",function(e,n){return(0,o.uX)(),(0,o.CE)("div",null,n[0]||(n[0]=[(0,o.Fv)('<h1 id="_1-2-2-synchronized关键字的理解" tabindex="-1"><a class="header-anchor" href="#_1-2-2-synchronized关键字的理解"><span>1.2.2 synchronized关键字的理解</span></a></h1><p>Java里synchronized关键字保障互斥同步，这是一种块结构的同步语法。</p><p>synchronized具体表现为以下三种形式：</p><ul><li>对于普通同步方法，锁是当前实例对象</li><li>对于静态同步方法，锁是当前类的Class对象</li><li>对于同步方法块，锁是synchronized括号里配置的对象</li></ul><p><strong>synchronized原理</strong>：synchronized关键字经过Javac编译之后，会在同步块前后分别形成monitorenter和monitorexit两个字节码指令。在执行monitorenter指令时，首先要去尝试获取对象的锁。如果这个对象没有被锁定，或者当前线程已经持有了那个对象的锁，就把锁的计数器的值增加一，而在执行monitorexit指令时会将锁计数器的值减一。一旦计数器的值为零，锁随即就被释放了。如果获取对象锁失败，那当前线程就应当被阻塞等待，直到请求锁定的对象被持有它的线程释放为止。</p><p><strong>需要注意</strong>：</p><ul><li>被synchronized修饰的同步块对同一条线程来说是可重入的。这意味着同一条线程反复进入同步块也不会出现把自己锁死的情况。</li><li>被synchronized修饰的同步块在持有锁的线程执行完毕并释放锁之前，会无条件的阻塞后面其它线程的进入。意味着无法强制已获取锁的线程释放锁，也无法强制正在等待锁的线程中断等待或超时退出。</li><li>synchronized是非公平锁</li></ul><p><strong>为什么说synchronized是重量级锁</strong>：Java线程是映射到操作系统内核线程上的，如果阻塞或唤醒一条线程，则需要操作系统来帮忙完成，不可避免的陷入用户态和核心态的转换中。所以虚拟机本身会进行一些优化，比如通知操作系统阻塞线程之前加入一段自旋等待的过程，以避免频繁地切入核心态之中。</p>',8)]))}]]),s=JSON.parse('{"path":"/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/1.2%20%E5%85%B3%E9%94%AE%E5%AD%97/1.2.2%20synchronized%E5%85%B3%E9%94%AE%E5%AD%97.html","title":"1.2.2 synchronized关键字的理解","lang":"zh-CN","frontmatter":{"\x3c!--cover":"/assets/images/cover2.jpg--\x3e","icon":"pen-to-square","date":"2024-11-08T00:00:00.000Z","category":["关键字","并发编程"],"tag":["synchronized关键字"],"star":true,"ticky":true,"description":"1.2.2 synchronized关键字的理解 Java里synchronized关键字保障互斥同步，这是一种块结构的同步语法。 synchronized具体表现为以下三种形式： 对于普通同步方法，锁是当前实例对象 对于静态同步方法，锁是当前类的Class对象 对于同步方法块，锁是synchronized括号里配置的对象 synchronized原理...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/1.2%20%E5%85%B3%E9%94%AE%E5%AD%97/1.2.2%20synchronized%E5%85%B3%E9%94%AE%E5%AD%97.html"}],["meta",{"property":"og:site_name","content":"Java笔记"}],["meta",{"property":"og:title","content":"1.2.2 synchronized关键字的理解"}],["meta",{"property":"og:description","content":"1.2.2 synchronized关键字的理解 Java里synchronized关键字保障互斥同步，这是一种块结构的同步语法。 synchronized具体表现为以下三种形式： 对于普通同步方法，锁是当前实例对象 对于静态同步方法，锁是当前类的Class对象 对于同步方法块，锁是synchronized括号里配置的对象 synchronized原理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-09T01:32:00.000Z"}],["meta",{"property":"article:tag","content":"synchronized关键字"}],["meta",{"property":"article:published_time","content":"2024-11-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T01:32:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.2.2 synchronized关键字的理解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-09T01:32:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"冉庆\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1731047565000,"updatedTime":1731115920000,"contributors":[{"name":"ranqing","email":"2516488782@qq.com","commits":2}]},"readingTime":{"minutes":1.84,"words":553},"filePathRelative":"一、Java基础/1.2 关键字/1.2.2 synchronized关键字.md","localizedDate":"2024年11月8日","excerpt":"\\n<p>Java里synchronized关键字保障互斥同步，这是一种块结构的同步语法。</p>\\n<p>synchronized具体表现为以下三种形式：</p>\\n<ul>\\n<li>对于普通同步方法，锁是当前实例对象</li>\\n<li>对于静态同步方法，锁是当前类的Class对象</li>\\n<li>对于同步方法块，锁是synchronized括号里配置的对象</li>\\n</ul>\\n<p><strong>synchronized原理</strong>：synchronized关键字经过Javac编译之后，会在同步块前后分别形成monitorenter和monitorexit两个字节码指令。在执行monitorenter指令时，首先要去尝试获取对象的锁。如果这个对象没有被锁定，或者当前线程已经持有了那个对象的锁，就把锁的计数器的值增加一，而在执行monitorexit指令时会将锁计数器的值减一。一旦计数器的值为零，锁随即就被释放了。如果获取对象锁失败，那当前线程就应当被阻塞等待，直到请求锁定的对象被持有它的线程释放为止。</p>","autoDesc":true}')}}]);