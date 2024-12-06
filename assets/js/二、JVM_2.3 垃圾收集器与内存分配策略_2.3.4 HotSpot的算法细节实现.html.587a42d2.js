"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4259],{6262:(t,e)=>{e.A=(t,e)=>{const o=t.__vccOpts||t;for(const[t,p]of e)o[t]=p;return o}},4558:(t,e,o)=>{o.r(e),o.d(e,{comp:()=>l,data:()=>n});var p=o(641);const i={},l=(0,o(6262).A)(i,[["render",function(t,e){return(0,p.uX)(),(0,p.CE)("div",null,e[0]||(e[0]=[(0,p.Fv)('<h1 id="_2-3-4-hotspot的算法细节实现" tabindex="-1"><a class="header-anchor" href="#_2-3-4-hotspot的算法细节实现"><span>2.3.4 HotSpot的算法细节实现</span></a></h1><p>HotSpot虚拟机如何发起内存回收、如何加速内存回收以及如何保证回收正确性的，看完这篇文章就懂了～</p><ul><li><p>根节点枚举：找到GC Roots，这一步骤必须暂停用户线程。使用OopMap的数据结构得到存放的引用对象</p></li><li><p>安全点：在特定位置记录了GC Roots的信息，这些位置称为安全点，强制要求线程执行到安全点后才能暂停，采用主动式中断线程</p></li><li><p>安全区域：安全点只能保证程序执行时不太长时间进入垃圾收集过程的安全点，但是，程序不执行的时候（处理器没有分配执行时间比如Sleep/Blocked），需要安全区域来解决。 安全区域能够保证某一段代码片段中引用关系不用发生变化，这个区域中任意地方开始垃圾收集都是安全的。</p></li><li><p>记忆集与卡表：解决对象跨代引用所带来的问题，垃圾收集器在新生代中建立了记忆集的数据结构，用以避免把整个老年代加进GC Roots扫描范围。卡表是一种记忆集实现形式</p><ul><li>卡表中每个元素对应着卡页</li><li>卡页中存在跨代指针，则卡表数组表示为1</li><li>筛选卡表中变脏的元素</li></ul></li><li><p>写屏障：维护卡表的元素，比如何时变脏，谁来变脏</p></li></ul><h2 id="三色标记法" tabindex="-1"><a class="header-anchor" href="#三色标记法"><span>三色标记法</span></a></h2><hr><p>三色标记法解决了并发标记的问题，降低了用户线程的停顿，是可达性分析理论的一种高效、准确的实现方式。</p><ul><li>白色：对象尚未被垃圾收集器访问过。刚开始所有对象都是白色的，分析结束后如果还是白色，则为不可达对象</li><li>灰色：对象已经被垃圾收集器访问过，但对象上至少存在一个引用还没有被扫过</li><li>黑色：对象已经被垃圾收集器访问过，且这个对象的所有引用都已经扫描过。<strong>黑色必须经过灰色指向某个白色</strong></li></ul><p>原本黑色对象被误标为白色的情况和解决方案：</p><ul><li>插入了黑色到白色对象的新引用。增量更新解决。</li><li>删除了灰色对象到白色对象的引用。原始快照解决。</li></ul>',9)]))}]]),n=JSON.parse('{"path":"/%E4%BA%8C%E3%80%81JVM/2.3%20%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8%E4%B8%8E%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%E7%AD%96%E7%95%A5/2.3.4%20HotSpot%E7%9A%84%E7%AE%97%E6%B3%95%E7%BB%86%E8%8A%82%E5%AE%9E%E7%8E%B0.html","title":"2.3.4 HotSpot的算法细节实现","lang":"zh-CN","frontmatter":{"\x3c!--cover":"/assets/images/cover2.jpg--\x3e","icon":"pen-to-square","date":"2024-12-06T00:00:00.000Z","category":["JVM","垃圾收集器与内存分配策略"],"tag":["HotSpot"],"star":true,"ticky":true,"description":"2.3.4 HotSpot的算法细节实现 HotSpot虚拟机如何发起内存回收、如何加速内存回收以及如何保证回收正确性的，看完这篇文章就懂了～ 根节点枚举：找到GC Roots，这一步骤必须暂停用户线程。使用OopMap的数据结构得到存放的引用对象 安全点：在特定位置记录了GC Roots的信息，这些位置称为安全点，强制要求线程执行到安全点后才能暂停，...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/myBlog/%E4%BA%8C%E3%80%81JVM/2.3%20%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8%E4%B8%8E%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D%E7%AD%96%E7%95%A5/2.3.4%20HotSpot%E7%9A%84%E7%AE%97%E6%B3%95%E7%BB%86%E8%8A%82%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"Java笔记"}],["meta",{"property":"og:title","content":"2.3.4 HotSpot的算法细节实现"}],["meta",{"property":"og:description","content":"2.3.4 HotSpot的算法细节实现 HotSpot虚拟机如何发起内存回收、如何加速内存回收以及如何保证回收正确性的，看完这篇文章就懂了～ 根节点枚举：找到GC Roots，这一步骤必须暂停用户线程。使用OopMap的数据结构得到存放的引用对象 安全点：在特定位置记录了GC Roots的信息，这些位置称为安全点，强制要求线程执行到安全点后才能暂停，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-06T03:51:36.000Z"}],["meta",{"property":"article:tag","content":"HotSpot"}],["meta",{"property":"article:published_time","content":"2024-12-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-06T03:51:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.3.4 HotSpot的算法细节实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-06T03:51:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"冉庆\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"三色标记法","slug":"三色标记法","link":"#三色标记法","children":[]}],"git":{"createdTime":1733457096000,"updatedTime":1733457096000,"contributors":[{"name":"ranqing","email":"2516488782@qq.com","commits":1}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"二、JVM/2.3 垃圾收集器与内存分配策略/2.3.4 HotSpot的算法细节实现.md","localizedDate":"2024年12月6日","excerpt":"\\n<p>HotSpot虚拟机如何发起内存回收、如何加速内存回收以及如何保证回收正确性的，看完这篇文章就懂了～</p>\\n<ul>\\n<li>\\n<p>根节点枚举：找到GC Roots，这一步骤必须暂停用户线程。使用OopMap的数据结构得到存放的引用对象</p>\\n</li>\\n<li>\\n<p>安全点：在特定位置记录了GC Roots的信息，这些位置称为安全点，强制要求线程执行到安全点后才能暂停，采用主动式中断线程</p>\\n</li>\\n<li>\\n<p>安全区域：安全点只能保证程序执行时不太长时间进入垃圾收集过程的安全点，但是，程序不执行的时候（处理器没有分配执行时间比如Sleep/Blocked），需要安全区域来解决。\\n安全区域能够保证某一段代码片段中引用关系不用发生变化，这个区域中任意地方开始垃圾收集都是安全的。</p>\\n</li>\\n<li>\\n<p>记忆集与卡表：解决对象跨代引用所带来的问题，垃圾收集器在新生代中建立了记忆集的数据结构，用以避免把整个老年代加进GC Roots扫描范围。卡表是一种记忆集实现形式</p>\\n<ul>\\n<li>卡表中每个元素对应着卡页</li>\\n<li>卡页中存在跨代指针，则卡表数组表示为1</li>\\n<li>筛选卡表中变脏的元素</li>\\n</ul>\\n</li>\\n<li>\\n<p>写屏障：维护卡表的元素，比如何时变脏，谁来变脏</p>\\n</li>\\n</ul>","autoDesc":true}')}}]);