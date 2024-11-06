export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"博客主页","i":"home"} }],
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"v":"/assets/images/cover3.jpg","e":"\n<p>将你的个人介绍和档案放置在此处。</p>\n","r":{"minutes":0.08,"words":23},"t":"介绍页","i":"circle-info","y":"a"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"c":["使用指南"],"r":{"minutes":0.07,"words":22},"t":"主要功能与配置演示","i":"laptop-code","y":"a"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"c":["使用指南"],"g":["禁用"],"e":"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n","r":{"minutes":0.43,"words":128},"t":"布局与功能禁用","i":"gears","O":4,"y":"a"} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"c":["使用指南"],"g":["加密"],"n":true,"r":{"minutes":0.51,"words":154},"t":"密码加密的文章","i":"lock","y":"a"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"c":["指南"],"g":["布局"],"e":"<p>布局包括:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">导航栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">侧边栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">页脚</a></li>\n</ul>","r":{"minutes":0.53,"words":159},"t":"布局","i":"object-group","O":2,"y":"a"} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"c":["使用指南"],"g":["Markdown"],"e":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n","r":{"minutes":3.47,"words":1041},"t":"Markdown 展示","i":"fab fa-markdown","O":2,"y":"a"} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"a":"Ms.Hope","d":1577836800000,"l":"2020年1月1日","c":["使用指南"],"g":["页面配置","使用指南"],"u":true,"v":"/assets/images/cover1.jpg","e":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","r":{"minutes":1.76,"words":529},"t":"页面配置","i":"file","O":3,"y":"a"} }],
  ["/posts/cherry.html", { loader: () => import(/* webpackChunkName: "posts_cherry.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/cherry.html.js"), meta: {"d":1641686400000,"l":"2022年1月9日","c":["樱桃"],"g":["红","小","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.11,"words":33},"t":"樱桃","i":"pen-to-square","y":"a"} }],
  ["/posts/dragonfruit.html", { loader: () => import(/* webpackChunkName: "posts_dragonfruit.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/dragonfruit.html.js"), meta: {"d":1641772800000,"l":"2022年1月10日","c":["火龙果","水果"],"g":["红","大"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.12,"words":36},"t":"火龙果","i":"pen-to-square","y":"a"} }],
  ["/posts/strawberry.html", { loader: () => import(/* webpackChunkName: "posts_strawberry.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/strawberry.html.js"), meta: {"d":1641859200000,"l":"2022年1月11日","c":["水果","草莓"],"g":["红","小"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.11,"words":34},"t":"草莓","i":"pen-to-square","y":"a"} }],
  ["/posts/tomato.html", { loader: () => import(/* webpackChunkName: "posts_tomato.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/tomato.html.js"), meta: {"d":1641945600000,"l":"2022年1月12日","c":["蔬菜"],"g":["红","圆"],"u":true,"v":"/assets/images/cover2.jpg","e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.13,"words":38},"t":"番茄","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/1.html", { loader: () => import(/* webpackChunkName: "posts_apple_1.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/apple/1.html.js"), meta: {"d":1640995200000,"l":"2022年1月1日","c":["苹果"],"g":["红","大","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.11,"words":34},"t":"苹果 1","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/2.html", { loader: () => import(/* webpackChunkName: "posts_apple_2.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/apple/2.html.js"), meta: {"d":1641081600000,"l":"2022年1月2日","c":["苹果"],"g":["红","大","圆"],"e":"\n<p>一个被星标了的苹果文章。</p>\n","r":{"minutes":0.16,"words":48},"t":"苹果 2","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/3.html", { loader: () => import(/* webpackChunkName: "posts_apple_3.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/apple/3.html.js"), meta: {"d":1641168000000,"l":"2022年1月3日","c":["苹果","水果"],"g":["红","大","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.12,"words":36},"t":"苹果 3","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/4.html", { loader: () => import(/* webpackChunkName: "posts_apple_4.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/apple/4.html.js"), meta: {"d":1641254400000,"l":"2022年1月4日","c":["苹果","水果"],"g":["红","大","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.12,"words":36},"t":"苹果 4","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/1.html", { loader: () => import(/* webpackChunkName: "posts_banana_1.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/banana/1.html.js"), meta: {"d":1641340800000,"l":"2022年1月5日","c":["香蕉","水果"],"g":["黄","弯曲的","长"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.13,"words":38},"t":"香蕉 1","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/2.html", { loader: () => import(/* webpackChunkName: "posts_banana_2.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/banana/2.html.js"), meta: {"d":1641427200000,"l":"2022年1月6日","c":["香蕉","水果"],"g":["黄","弯曲的","长"],"e":"\n<p>一个被数字 <code>10</code> 星标了的香蕉文章。</p>\n","r":{"minutes":0.18,"words":55},"t":"香蕉 2","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/3.html", { loader: () => import(/* webpackChunkName: "posts_banana_3.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/banana/3.html.js"), meta: {"d":1641513600000,"l":"2022年1月7日","c":["香蕉"],"g":["黄","弯曲的","长"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.12,"words":36},"t":"香蕉 3","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/4.html", { loader: () => import(/* webpackChunkName: "posts_banana_4.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/banana/4.html.js"), meta: {"d":1641600000000,"l":"2022年1月8日","c":["香蕉"],"g":["黄","弯曲的","长"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.12,"words":36},"t":"香蕉 4","i":"pen-to-square","y":"a"} }],
  ["/posts/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B9%8B%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F.html", { loader: () => import(/* webpackChunkName: "posts_设计模式_设计模式之代理模式.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/设计模式/设计模式之代理模式.html.js"), meta: {"d":1730419200000,"l":"2024年11月1日","c":["设计模式"],"g":["代理模式","静态代理","JDK动态代理","cglib动态代理"],"v":"/assets/images/cover2.jpg","e":"\n<h2>介绍</h2>\n<p>代理模式提供了对目标对象额外的访问方式，即通过代理对象访问目标对象，这样可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。</p>\n<p>简言之，代理模式就是设置一个中间代理来控制访问原目标对象，以达到增强原对象的功能和简化访问方式。</p>\n<figure><figcaption>ae</figcaption></figure>\n<p><strong>UML理解</strong></p>\n<div class=\"language- line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"\" data-title=\"\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span>代理对象实现真实对象的同一个接口，然后代理对象引用真实对象，代理对象给真实对象的方法增强</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div></div></div>","r":{"minutes":6.49,"words":1947},"t":"设计模式之代理模式","i":"pen-to-square","y":"a"} }],
  ["/posts/Java%E5%9F%BA%E7%A1%80/JDK8%E6%96%B0%E7%89%B9%E6%80%A7/%E6%8E%A5%E5%8F%A3%E7%9A%84%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95%E5%92%8C%E9%BB%98%E8%AE%A4%E6%96%B9%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "posts_Java基础_JDK8新特性_接口的静态方法和默认方法.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/Java基础/JDK8新特性/接口的静态方法和默认方法.html.js"), meta: {"d":1730419200000,"l":"2024年11月1日","c":["JDK8新特性"],"g":["default关键字","static关键字"],"v":"/assets/images/cover2.jpg","e":"\n<p>JDK8前interface</p>\n<div class=\"language- line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"\" data-title=\"\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span>变量修饰符：public、static、final</span></span>\n<span class=\"line\"><span>方法：public、abstract</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","r":{"minutes":2.01,"words":603},"t":"接口的静态方法和默认方法","i":"pen-to-square","y":"a"} }],
  ["/posts/JVM/final%E5%85%B3%E9%94%AE%E5%AD%97%E5%AF%B9%E7%90%86%E8%A7%A3.html", { loader: () => import(/* webpackChunkName: "posts_JVM_final关键字对理解.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/JVM/final关键字对理解.html.js"), meta: {"d":1730332800000,"l":"2024年10月31日","c":["JVM"],"g":["final关键字","final内存语义"],"v":"/assets/images/cover2.jpg","e":"\n<h2>一、修饰基本数据类型</h2>\n<p>当final修饰的是一个基本数据类型数据时, 这个数据的值在初始化后将不能被改变。final修饰基本数据类型时的内存示意图：</p>\n<figure><figcaption>image</figcaption></figure>\n<p>变量a在初始化后将永远指向003这块内存, 而这块内存在初始化后将永远保存数值100。</p>\n<div class=\"language-java line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"java\" data-title=\"java\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span style=\"--shiki-light:#A626A4;--shiki-dark:#C678DD\">final</span><span style=\"--shiki-light:#A626A4;--shiki-dark:#C678DD\"> int</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\"> a</span><span style=\"--shiki-light:#383A42;--shiki-dark:#56B6C2\">=</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\">100</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">a</span><span style=\"--shiki-light:#383A42;--shiki-dark:#56B6C2\">=</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\">30</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">;</span><span style=\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\">//编译器会报错提示无法将值赋给final变量a</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","r":{"minutes":3.79,"words":1138},"t":"final关键字的理解","i":"pen-to-square","y":"a"} }],
  ["/posts/JVM/%E4%B8%83%E3%80%81%E5%89%8D%E7%AB%AF%E7%BC%96%E8%AF%91%E4%B8%8E%E4%BC%98%E5%8C%96/1%E3%80%81%E8%AF%AD%E6%B3%95%E7%B3%96.html", { loader: () => import(/* webpackChunkName: "posts_JVM_七、前端编译与优化_1、语法糖.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/JVM/七、前端编译与优化/1、语法糖.html.js"), meta: {"d":1730678400000,"l":"2024年11月4日","c":["JVM","前端编译与优化"],"g":["final关键字","泛型","装箱拆箱"],"v":"/assets/images/cover2.jpg","e":"\n<p>指的是在计算机语言中添加的某种语法，这种语法对语言的编译结果和功能并没有实际影响，但是却能更方便程序员使用该语言。</p>\n<p>常见的语法糖：泛型、自动装箱拆箱、条件编译等。</p>\n<p>**解语法糖：**Java虚拟机运行时并不支持这些语法，它们在编译阶段会还原回原始的基础语法结构，这个过程叫解语法糖。</p>\n","r":{"minutes":0.53,"words":159},"t":"7.1 语法糖","i":"pen-to-square","y":"a"} }],
  ["/posts/JVM/%E4%B8%83%E3%80%81%E5%89%8D%E7%AB%AF%E7%BC%96%E8%AF%91%E4%B8%8E%E4%BC%98%E5%8C%96/2%E3%80%81%E6%B3%9B%E5%9E%8B.html", { loader: () => import(/* webpackChunkName: "posts_JVM_七、前端编译与优化_2、泛型.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/JVM/七、前端编译与优化/2、泛型.html.js"), meta: {"d":1730678400000,"l":"2024年11月4日","c":["JVM","前端编译与优化"],"g":["泛型","类型擦除"],"v":"/assets/images/cover2.jpg","e":"\n<p>泛型的本质是参数化类型或者参数化多态的应用。</p>\n<h2>概念</h2>\n<p>Java语言中的泛型只在程序源码中存在，在编译之后的字节码文件中，全部泛型都被替换为原来的裸类型，并在相应的地方插入了强制转型代码。因此对于Java来说，<code>ArrayList&lt;Integer&gt;</code>与<code>ArrayList&lt;String&gt;</code>其实是同一个类型。</p>\n<p><strong>优缺点</strong></p>\n<div class=\"language-java line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"java\" data-title=\"java\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">缺点：性能低，需要不断的拆箱和装箱</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">优点：擦除式泛型的实现只需要在Javac编译器上做出改进即可，不需要改动字节码、不需要改动虚拟机，保证了和之前版本的兼容性。</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","r":{"minutes":3.24,"words":973},"t":"7.2 泛型","i":"pen-to-square","y":"a"} }],
  ["/posts/JVM/%E4%B8%83%E3%80%81%E5%89%8D%E7%AB%AF%E7%BC%96%E8%AF%91%E4%B8%8E%E4%BC%98%E5%8C%96/3%E3%80%81%E8%87%AA%E5%8A%A8%E8%A3%85%E7%AE%B1%E3%80%81%E6%8B%86%E7%AE%B1.html", { loader: () => import(/* webpackChunkName: "posts_JVM_七、前端编译与优化_3、自动装箱、拆箱.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/JVM/七、前端编译与优化/3、自动装箱、拆箱.html.js"), meta: {"d":1730678400000,"l":"2024年11月4日","c":["JVM","前端编译与优化"],"g":["装箱、拆箱","语法糖"],"v":"/assets/images/cover2.jpg","e":"\n<h2>一、什么是装箱</h2>\n<p>为什么要装箱？——让基本类型具备对象的特征，实现更多的功能。</p>\n<div class=\"language-java line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"java\" data-title=\"java\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span style=\"--shiki-light:#C18401;--shiki-dark:#E5C07B\">Integer</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\"> i</span><span style=\"--shiki-light:#383A42;--shiki-dark:#56B6C2\">=</span><span style=\"--shiki-light:#A626A4;--shiki-dark:#C678DD\">new</span><span style=\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\"> Integer</span><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">(</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\">10</span><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">)</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">;</span><span style=\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\">//JDK5前必须new</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#C18401;--shiki-dark:#E5C07B\">Integer</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\"> i</span><span style=\"--shiki-light:#383A42;--shiki-dark:#56B6C2\">=</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\">10</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">;</span><span style=\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\">//JDK5后自动装箱</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","r":{"minutes":2.14,"words":642},"t":"7.3 自动装箱、拆箱","i":"pen-to-square","y":"a"} }],
  ["/posts/JVM/%E5%85%AB%E3%80%81Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/1%E3%80%81%E8%A1%A1%E9%87%8F%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%80%A7%E8%83%BD.html", { loader: () => import(/* webpackChunkName: "posts_JVM_八、Java内存模型与线程_1、衡量服务器性能.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/JVM/八、Java内存模型与线程/1、衡量服务器性能.html.js"), meta: {"d":1730678400000,"l":"2024年11月4日","c":["JVM","Java内存模型与线程"],"g":["QPS","TPS","PV","UV","RT","最佳线程数"],"v":"/assets/images/cover2.jpg","e":"\n<blockquote>\n<p>QPS</p>\n</blockquote>\n<p>QPS表示系统/接口每秒能够处理的查询请求次数</p>\n<blockquote>\n<p>TPS</p>\n</blockquote>\n<p>TPS表示系统每秒能响应的请求次数（事务数），可以衡量一个服务器性能的高低好坏。</p>\n<p>TPS和QPS区别：一个事务指客户端向服务器发送请求然后服务器作出反应的过程。而在TPS中，为处理1次请求可能会引发后续多次对服务器端的访问才能完成这次工作。每次访问都算1次QPS，所以一次TPS可能包含多个QPS。</p>\n<p>如：访问一个页面会请求服务器3次，产生了1个T，3个Q。</p>","r":{"minutes":1.26,"words":379},"t":"8.1 衡量服务器性能","i":"pen-to-square","y":"a"} }],
  ["/posts/JVM/%E5%85%AB%E3%80%81Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/2%E3%80%81Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.html", { loader: () => import(/* webpackChunkName: "posts_JVM_八、Java内存模型与线程_2、Java内存模型.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/JVM/八、Java内存模型与线程/2、Java内存模型.html.js"), meta: {"d":1730851200000,"l":"2024年11月6日","c":["JVM","Java内存模型与线程"],"g":["主内存与工作内存","volatile关键字","Java内存模型特征","happens-before"],"v":"/assets/images/cover2.jpg","e":"\n<h2>一、主内存与工作内存</h2>\n<p>Java内存模型规定了所有的变量都存储在主内存中，每条线程还有自己的工作内存，线程的工作内存保存了被该线程使用的变量的主内存副本，线程对变量的所有操作（读取、赋值等）都必须在工作内存中进行，而不能直接读写主内存中的数据。不同的线程之间也无法直接访问对方工作内存中的变量，线程间变量值的传递均需要通过主内存来完成。</p>\n<h2>二、volatile型变量特殊规则</h2>\n<p>一个变量被定义成volatile后，它将具备两项特性：</p>\n<h3>1、可见性</h3>\n<p>保证此变量对所有线程的可见性，这里的“可见性”是指一条线程修改了这个变量的值，新值对于其他线程来说是立即可知的</p>","r":{"minutes":7.98,"words":2394},"t":"8.2 Java内存模型","i":"pen-to-square","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/posts/apple/", { loader: () => import(/* webpackChunkName: "posts_apple_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/apple/index.html.js"), meta: {"t":"Apple"} }],
  ["/posts/banana/", { loader: () => import(/* webpackChunkName: "posts_banana_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/banana/index.html.js"), meta: {"t":"Banana"} }],
  ["/posts/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/", { loader: () => import(/* webpackChunkName: "posts_设计模式_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/设计模式/index.html.js"), meta: {"t":"设计模式"} }],
  ["/posts/Java%E5%9F%BA%E7%A1%80/JDK8%E6%96%B0%E7%89%B9%E6%80%A7/", { loader: () => import(/* webpackChunkName: "posts_Java基础_JDK8新特性_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/Java基础/JDK8新特性/index.html.js"), meta: {"t":"JDK8新特性"} }],
  ["/posts/Java%E5%9F%BA%E7%A1%80/", { loader: () => import(/* webpackChunkName: "posts_Java基础_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/Java基础/index.html.js"), meta: {"t":"Java基础"} }],
  ["/posts/JVM/", { loader: () => import(/* webpackChunkName: "posts_JVM_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/JVM/index.html.js"), meta: {"t":"JVM"} }],
  ["/posts/JVM/%E4%B8%83%E3%80%81%E5%89%8D%E7%AB%AF%E7%BC%96%E8%AF%91%E4%B8%8E%E4%BC%98%E5%8C%96/", { loader: () => import(/* webpackChunkName: "posts_JVM_七、前端编译与优化_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/JVM/七、前端编译与优化/index.html.js"), meta: {"t":"七、前端编译与优化"} }],
  ["/posts/JVM/%E5%85%AB%E3%80%81Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "posts_JVM_八、Java内存模型与线程_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/posts/JVM/八、Java内存模型与线程/index.html.js"), meta: {"t":"八、 Java内存模型与线程"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "category_使用指南_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/使用指南/index.html.js"), meta: {"t":"使用指南 分类","I":false} }],
  ["/category/%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "category_指南_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/指南/index.html.js"), meta: {"t":"指南 分类","I":false} }],
  ["/category/%E6%A8%B1%E6%A1%83/", { loader: () => import(/* webpackChunkName: "category_樱桃_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/樱桃/index.html.js"), meta: {"t":"樱桃 分类","I":false} }],
  ["/category/%E7%81%AB%E9%BE%99%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "category_火龙果_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/火龙果/index.html.js"), meta: {"t":"火龙果 分类","I":false} }],
  ["/category/%E6%B0%B4%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "category_水果_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/水果/index.html.js"), meta: {"t":"水果 分类","I":false} }],
  ["/category/%E8%8D%89%E8%8E%93/", { loader: () => import(/* webpackChunkName: "category_草莓_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/草莓/index.html.js"), meta: {"t":"草莓 分类","I":false} }],
  ["/category/%E8%94%AC%E8%8F%9C/", { loader: () => import(/* webpackChunkName: "category_蔬菜_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/蔬菜/index.html.js"), meta: {"t":"蔬菜 分类","I":false} }],
  ["/category/%E8%8B%B9%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "category_苹果_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/苹果/index.html.js"), meta: {"t":"苹果 分类","I":false} }],
  ["/category/%E9%A6%99%E8%95%89/", { loader: () => import(/* webpackChunkName: "category_香蕉_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/香蕉/index.html.js"), meta: {"t":"香蕉 分类","I":false} }],
  ["/category/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/", { loader: () => import(/* webpackChunkName: "category_设计模式_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/设计模式/index.html.js"), meta: {"t":"设计模式 分类","I":false} }],
  ["/category/jdk8%E6%96%B0%E7%89%B9%E6%80%A7/", { loader: () => import(/* webpackChunkName: "category_jdk8新特性_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/jdk8新特性/index.html.js"), meta: {"t":"JDK8新特性 分类","I":false} }],
  ["/category/jvm/", { loader: () => import(/* webpackChunkName: "category_jvm_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/jvm/index.html.js"), meta: {"t":"JVM 分类","I":false} }],
  ["/category/%E5%89%8D%E7%AB%AF%E7%BC%96%E8%AF%91%E4%B8%8E%E4%BC%98%E5%8C%96/", { loader: () => import(/* webpackChunkName: "category_前端编译与优化_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/前端编译与优化/index.html.js"), meta: {"t":"前端编译与优化 分类","I":false} }],
  ["/category/java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "category_java内存模型与线程_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/category/java内存模型与线程/index.html.js"), meta: {"t":"Java内存模型与线程 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(/* webpackChunkName: "tag_禁用_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/禁用/index.html.js"), meta: {"t":"标签: 禁用","I":false} }],
  ["/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(/* webpackChunkName: "tag_加密_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/加密/index.html.js"), meta: {"t":"标签: 加密","I":false} }],
  ["/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "tag_布局_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/布局/index.html.js"), meta: {"t":"标签: 布局","I":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "tag_markdown_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/markdown/index.html.js"), meta: {"t":"标签: Markdown","I":false} }],
  ["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "tag_页面配置_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/页面配置/index.html.js"), meta: {"t":"标签: 页面配置","I":false} }],
  ["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "tag_使用指南_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/使用指南/index.html.js"), meta: {"t":"标签: 使用指南","I":false} }],
  ["/tag/%E7%BA%A2/", { loader: () => import(/* webpackChunkName: "tag_红_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/红/index.html.js"), meta: {"t":"标签: 红","I":false} }],
  ["/tag/%E5%B0%8F/", { loader: () => import(/* webpackChunkName: "tag_小_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/小/index.html.js"), meta: {"t":"标签: 小","I":false} }],
  ["/tag/%E5%9C%86/", { loader: () => import(/* webpackChunkName: "tag_圆_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/圆/index.html.js"), meta: {"t":"标签: 圆","I":false} }],
  ["/tag/%E5%A4%A7/", { loader: () => import(/* webpackChunkName: "tag_大_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/大/index.html.js"), meta: {"t":"标签: 大","I":false} }],
  ["/tag/%E9%BB%84/", { loader: () => import(/* webpackChunkName: "tag_黄_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/黄/index.html.js"), meta: {"t":"标签: 黄","I":false} }],
  ["/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/", { loader: () => import(/* webpackChunkName: "tag_弯曲的_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/弯曲的/index.html.js"), meta: {"t":"标签: 弯曲的","I":false} }],
  ["/tag/%E9%95%BF/", { loader: () => import(/* webpackChunkName: "tag_长_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/长/index.html.js"), meta: {"t":"标签: 长","I":false} }],
  ["/tag/%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F/", { loader: () => import(/* webpackChunkName: "tag_代理模式_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/代理模式/index.html.js"), meta: {"t":"标签: 代理模式","I":false} }],
  ["/tag/%E9%9D%99%E6%80%81%E4%BB%A3%E7%90%86/", { loader: () => import(/* webpackChunkName: "tag_静态代理_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/静态代理/index.html.js"), meta: {"t":"标签: 静态代理","I":false} }],
  ["/tag/jdk%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86/", { loader: () => import(/* webpackChunkName: "tag_jdk动态代理_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/jdk动态代理/index.html.js"), meta: {"t":"标签: JDK动态代理","I":false} }],
  ["/tag/cglib%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86/", { loader: () => import(/* webpackChunkName: "tag_cglib动态代理_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/cglib动态代理/index.html.js"), meta: {"t":"标签: cglib动态代理","I":false} }],
  ["/tag/default%E5%85%B3%E9%94%AE%E5%AD%97/", { loader: () => import(/* webpackChunkName: "tag_default关键字_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/default关键字/index.html.js"), meta: {"t":"标签: default关键字","I":false} }],
  ["/tag/static%E5%85%B3%E9%94%AE%E5%AD%97/", { loader: () => import(/* webpackChunkName: "tag_static关键字_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/static关键字/index.html.js"), meta: {"t":"标签: static关键字","I":false} }],
  ["/tag/final%E5%85%B3%E9%94%AE%E5%AD%97/", { loader: () => import(/* webpackChunkName: "tag_final关键字_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/final关键字/index.html.js"), meta: {"t":"标签: final关键字","I":false} }],
  ["/tag/final%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89/", { loader: () => import(/* webpackChunkName: "tag_final内存语义_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/final内存语义/index.html.js"), meta: {"t":"标签: final内存语义","I":false} }],
  ["/tag/%E6%B3%9B%E5%9E%8B/", { loader: () => import(/* webpackChunkName: "tag_泛型_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/泛型/index.html.js"), meta: {"t":"标签: 泛型","I":false} }],
  ["/tag/%E8%A3%85%E7%AE%B1%E6%8B%86%E7%AE%B1/", { loader: () => import(/* webpackChunkName: "tag_装箱拆箱_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/装箱拆箱/index.html.js"), meta: {"t":"标签: 装箱拆箱","I":false} }],
  ["/tag/%E7%B1%BB%E5%9E%8B%E6%93%A6%E9%99%A4/", { loader: () => import(/* webpackChunkName: "tag_类型擦除_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/类型擦除/index.html.js"), meta: {"t":"标签: 类型擦除","I":false} }],
  ["/tag/%E8%A3%85%E7%AE%B1%E3%80%81%E6%8B%86%E7%AE%B1/", { loader: () => import(/* webpackChunkName: "tag_装箱、拆箱_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/装箱、拆箱/index.html.js"), meta: {"t":"标签: 装箱、拆箱","I":false} }],
  ["/tag/%E8%AF%AD%E6%B3%95%E7%B3%96/", { loader: () => import(/* webpackChunkName: "tag_语法糖_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/语法糖/index.html.js"), meta: {"t":"标签: 语法糖","I":false} }],
  ["/tag/qps/", { loader: () => import(/* webpackChunkName: "tag_qps_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/qps/index.html.js"), meta: {"t":"标签: QPS","I":false} }],
  ["/tag/tps/", { loader: () => import(/* webpackChunkName: "tag_tps_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/tps/index.html.js"), meta: {"t":"标签: TPS","I":false} }],
  ["/tag/pv/", { loader: () => import(/* webpackChunkName: "tag_pv_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/pv/index.html.js"), meta: {"t":"标签: PV","I":false} }],
  ["/tag/uv/", { loader: () => import(/* webpackChunkName: "tag_uv_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/uv/index.html.js"), meta: {"t":"标签: UV","I":false} }],
  ["/tag/rt/", { loader: () => import(/* webpackChunkName: "tag_rt_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/rt/index.html.js"), meta: {"t":"标签: RT","I":false} }],
  ["/tag/%E6%9C%80%E4%BD%B3%E7%BA%BF%E7%A8%8B%E6%95%B0/", { loader: () => import(/* webpackChunkName: "tag_最佳线程数_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/最佳线程数/index.html.js"), meta: {"t":"标签: 最佳线程数","I":false} }],
  ["/tag/%E4%B8%BB%E5%86%85%E5%AD%98%E4%B8%8E%E5%B7%A5%E4%BD%9C%E5%86%85%E5%AD%98/", { loader: () => import(/* webpackChunkName: "tag_主内存与工作内存_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/主内存与工作内存/index.html.js"), meta: {"t":"标签: 主内存与工作内存","I":false} }],
  ["/tag/volatile%E5%85%B3%E9%94%AE%E5%AD%97/", { loader: () => import(/* webpackChunkName: "tag_volatile关键字_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/volatile关键字/index.html.js"), meta: {"t":"标签: volatile关键字","I":false} }],
  ["/tag/java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E7%89%B9%E5%BE%81/", { loader: () => import(/* webpackChunkName: "tag_java内存模型特征_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/java内存模型特征/index.html.js"), meta: {"t":"标签: Java内存模型特征","I":false} }],
  ["/tag/happens-before/", { loader: () => import(/* webpackChunkName: "tag_happens-before_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/tag/happens-before/index.html.js"), meta: {"t":"标签: happens-before","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/qingran/Desktop/jdtm/myBlog/myBlog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
