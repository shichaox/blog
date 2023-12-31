(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{475:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java常用api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java常用api"}},[t._v("#")]),t._v(" Java常用API")]),t._v(" "),a("h2",{attrs:{id:"一、object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、object"}},[t._v("#")]),t._v(" 一、Object")]),t._v(" "),a("blockquote",[a("p",[t._v("Object类是所有类继承层次的祖先类")])]),t._v(" "),a("h3",{attrs:{id:"_1-public-final-class-getclass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-public-final-class-getclass"}},[t._v("#")]),t._v(" 1. public final Class getClass()")]),t._v(" "),a("blockquote",[a("p",[t._v("提供一种获取Class对象的方式\nClass对象（运行时类对象）：封装了该类的类型信息。比如类的名字、所处包、成员、静态成员、构造器等。是某个类在其类加载时期，由JVM在堆上自动创建生成的一个对象（Class对象）。由于类加载只有一次，所以类的Class对象也是唯一的。")])]),t._v(" "),a("p",[t._v("可以调用getClass()方法通过“==”判断两个对象的类型是否一致。\nClass API实际上是反射的原理。\ngetName(): 获取全限定类名\ngetSimpleName(): 获取简单类名")]),t._v(" "),a("h3",{attrs:{id:"_2-public-string-tostring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-public-string-tostring"}},[t._v("#")]),t._v(" 2. public String toString()")]),t._v(" "),a("p",[t._v("toString()的作用：\n(1) 返回该对象的字符串表示（打印对象属性取值）。\n(2) 建议所有子类重写次方法。\nObject类当中的toString方法默认实现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('return 全限定类名 @ 该对象的十六进制地址值字符串\nreturn this.getClass().getName() + "@" + Integer.toHexString(hasCode());\n')])])]),a("p",[t._v("(3) 可以alt + insert快捷键生成toString()重写。")]),t._v(" "),a("h3",{attrs:{id:"_3-public-boolean-equals-object-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-public-boolean-equals-object-object"}},[t._v("#")]),t._v(" 3. public boolean equals(Object object)")]),t._v(" "),a("p",[t._v("重写equals方法的原则：\n(1) 自反性：自己和自己比较一定返回true。\n(2) 排他性：当对比的不是同种类型的对象或是一个null时，默认返回false\n(3) 对称性：\n(4) 传递性：\n(5) 一致性：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.自反性")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.排他性")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3.属性取值比较")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-public-int-hashcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-public-int-hashcode"}},[t._v("#")]),t._v(" 4. public int hashCode()")]),t._v(" "),a("blockquote",[a("p",[t._v("哈希映射：将一组关键字"),a("strong",[t._v("映射")]),t._v("到一个有限的、连续的地址集（区间）上。\nhashCode()方法：就是一个哈希函数，用于计算哈希值。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("为什么要同时重写equals方法和hashCode方法？为什么equals返回true时hashCode返回值必须一致？\n因为哈希表中key值是唯一的不允许重复，如果插入一个相同的key，那么他会覆盖原来的key，既然是覆盖，那么新的key和旧的key插入的位置应该一致，所以他们的哈希值应该一致。所以，当两个对象“相等”时，他们的插入位置应该一致，哈希值应该一致。")])]),t._v(" "),a("li",[a("p",[t._v("Object类的hashCode方法默认实现会返回该对象的十进制地址值。Object类的默认hashCode方法是一个本地方法，一般是通过将该对象的内部地址转换成一个int整数来实现的。")])])]),t._v(" "),a("h3",{attrs:{id:"_5-pretected-void-finalize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-pretected-void-finalize"}},[t._v("#")]),t._v(" 5. pretected void finalize()")]),t._v(" "),a("h3",{attrs:{id:"_6-pretected-object-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-pretected-object-clone"}},[t._v("#")]),t._v(" 6. pretected Object clone()")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("clone方法使用步骤：\n(1) 重写访问权限\nObject类的访问权限是protected，子类要想在该类的外部调用clone方法，就要在该类中重写clone方法的访问权限。")]),t._v(" "),a("p",[t._v("(2) 重写clone方法的方法体\n一般不需要，")]),t._v(" "),a("p",[t._v("(3) 重写方法的返回值类型，从Object改为自身类型\n(4) 实现接口java.lang.Cloneable，表示该类允许进行克隆。\nCloneable接口是一个空接口，实现了就允许做XX操作，不实现就不允许甚至抛出异常，这样的接口称之为“标记接口”。")])]),t._v(" "),a("li",[a("p",[t._v("克隆操作的两个概念\n(1) 浅克隆/浅拷贝\nObject类中的clone方法的默认实现就是浅克隆/浅拷贝。\n引用数据类型的成员变量拷贝的是原来的引用（对象的地址值），仍然指向原来的对象。\n(2) 深克隆/深拷贝\n无论对象中有无引用数据类型的成员变量，都要确保克隆后得到完全独立的新对象。\n深克隆的一种实现方法：\nI. 深克隆是在浅克隆的基础上实现的，首先要做浅克隆。\nII. 将对象中引用指向的对象再克隆一个新对象\nIII. 将克隆对象的克隆引用指向克隆后的新对象。\n（II、III通过重写原对象的clone方法来实现。在源对象的clone方法中执行引用所指向的对象的clone方法，并赋值给“克隆后的对象”。）")])])]),t._v(" "),a("h2",{attrs:{id:"二、string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、string"}},[t._v("#")]),t._v(" 二、String")]),t._v(" "),a("p",[t._v("String对象时不可变的，为什么不可变？")]),t._v(" "),a("ol",[a("li",[t._v("String类的核心成员char类型数组value是privatefinal修饰的，不能在外部直接访问修改，也禁止继承，避免了继承后被修改。")]),t._v(" "),a("li",[t._v("所有的String方法都很小心的没有去改动value数组里的元素，且没有对外暴露这个数组。")]),t._v(" "),a("li",[t._v("String类所有用数组传参赋值1的构造器，都不会直接用传参的数组给value赋值，而是将该参数拷贝一份，然后将拷贝的数组赋值给value，这样可以防止外部代码通过修改传入的数组来改变String的内容。")])]),t._v(" "),a("h3",{attrs:{id:"字符串常量池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量池"}},[t._v("#")]),t._v(" 字符串常量池")]),t._v(" "),a("blockquote",[a("p",[t._v("字符串常量池用于存储所有的字符串字面值对象（的引用），每当代码中出现一个字符串字面量对象，JVM就会检查字符串常量池，如果已存在相同内容的字符串，则不会创建新的对象，而是返回指向已有对象的引用。如果不存在相同内容的字符串，则创建新的字符串对象并将引用放入字符串常量池。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v('上述过程共创建了两个对象\n(1) 代码中第一次运行到字面值"abc"时，会在堆上创建一个该字面值String对象，然后将引用存入常量池。在该行代码中，此对象没有引用指向它。\n(2) new关键字表示在堆上面创建一个新的对象。\n(1)和(2)中创建的对象共享一个value数组。')]),t._v(" "),a("h3",{attrs:{id:"intern方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intern方法"}},[t._v("#")]),t._v(" intern方法")]),t._v(" "),a("ol",[a("li",[t._v("调用者是一个String对象，使用该方法，首先要判断字符串常量池是否已经存在和调用者String对象内容相同的String对象。\n(1) 如果存在，就直接返回这个对象。\n(2) 如果不存在，就把调用intern方法的String对象的引用存入字符串常量池，这样它就从非拘留字符串变成了拘留字符串，并且将该拘留字符串返回。")])]),t._v(" "),a("h2",{attrs:{id:"三、排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、排序"}},[t._v("#")]),t._v(" 三、排序")]),t._v(" "),a("h3",{attrs:{id:"自然排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自然排序"}},[t._v("#")]),t._v(" 自然排序")]),t._v(" "),a("blockquote",[a("p",[t._v("让某个类实现java.lang.Comparable接口，重写compareTo方法表示排序规则，实现该类对应的对象容器中元素按从小到大的排序方式。称之为“自然排序”。")])]),t._v(" "),a("h3",{attrs:{id:"比较器排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较器排序"}},[t._v("#")]),t._v(" 比较器排序")]),t._v(" "),a("p",[t._v("带比较器的排序方法：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Comparator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Comparator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("通过匿名内部类或lambda表达式创建一个实现了Comparator接口的对象，将该对象作为参数传入Arrays.sort()方法，该匿名类重写了Comparator的compare方法（重写了比较规则）。")])]),t._v(" "),a("h2",{attrs:{id:"四、可变字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、可变字符串"}},[t._v("#")]),t._v(" 四、可变字符串")]),t._v(" "),a("blockquote",[a("p",[t._v("所谓可变字符串，就是指可以在原先字符串的基础上，直接修改字符串内容的字符串对象。这样在需要频繁修改字符串内容的场景中，就不会频繁创建新的对象了，性能就会更加优秀。StringBuffer和StringBuilder都是抽象类AbstractStringBuilder的子类。")])]),t._v(" "),a("p",[t._v("主要成员变量：\n(1) char[] value; 用于存储字符串内容。value数组被称为字符串缓冲区，value数组的长度被称为“字符串缓冲区的容量capacity”\n(2) int count; 记录当前已使用的字符的个数，即可变字符串当前的实际字符串长度。")]),t._v(" "),a("h3",{attrs:{id:"stringbuffer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringbuffer"}},[t._v("#")]),t._v(" StringBuffer")]),t._v(" "),a("p",[a("strong",[t._v("1. StringBuffer构造器")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//无参构造器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定容量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定字符串内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这些构造器都是在创建对象时，指出字符串缓冲区大小\n(1) 无参构造器，字符串缓冲区大小默认是16。\n(2) int单参构造器，字符串缓冲区初始大小为指定的int值。\n(3) String单参构造器，字符串缓冲区大小初始大小为指定字符串长度+16。")]),t._v(" "),a("p",[a("strong",[t._v("2. 字符串缓冲区扩容机制源码解析：")]),t._v("\nStringBuffer对象在执行append方法拼接字符串时，可能会遇到value数组长度（缓冲区大小）不够的情况，所以在拼接之前，要确保value数组长度够用，就要执行ensureCapacityInternal(int minimumCapacity)方法，其中int minimumCapacity = count + len;("),a("strong",[t._v("最小容量minimumCapacity")]),t._v("等于原字符串实际长度加拼接的字符串长度，也就是新字符串长度)")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractStringBuilder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureCapacityInternal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//count为原字符串长度，len为拼接的字符串长度。")]),t._v("\n    str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChars")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当最小容量小于0时，就不用执行扩容机制")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureCapacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" minimumCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimumCapacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureCapacityInternal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimumCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当最小容量大于value数组长度时，才执行扩容机制，执行newCapacity(int minCapacity)方法确定扩容后的数组长度，将原来的字符数组复制到新创建的字符数组中，然后value引用指向这个新数组。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureCapacityInternal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" minimumCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// overflow-conscious code")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimumCapacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCapacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimumCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("将原先value数组长度的两倍+2作为新数组的长度\n如果这个长度小于最小容量，那么就把最小容量作为新数组的长度。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_ARRAY_SIZE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_VALUE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCapacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" minCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// overflow-conscious code")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newCapacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newCapacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" minCapacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            newCapacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" minCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newCapacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_ARRAY_SIZE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" newCapacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hugeCapacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"stringbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringbuilder"}},[t._v("#")]),t._v(" StringBuilder")]),t._v(" "),a("h2",{attrs:{id:"五、包装类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、包装类型"}},[t._v("#")]),t._v(" 五、包装类型")]),t._v(" "),a("blockquote",[a("p",[t._v("所谓包装类型，就是将基本数据类型包装成引用数据类型，进而得到对应的对象。")])]),t._v(" "),a("h2",{attrs:{id:"六、异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、异常"}},[t._v("#")]),t._v(" 六、异常")]),t._v(" "),a("div",{staticClass:"language-mermaid extra-class"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("graph")]),t._v(" TD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nA"),a("span",{pre:!0,attrs:{class:"token text string"}},[t._v("[Throwable]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token text string"}},[t._v("[Error]")]),t._v("\nA "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v(" C"),a("span",{pre:!0,attrs:{class:"token text string"}},[t._v("[Exception]")]),t._v("\nC "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v(" D"),a("span",{pre:!0,attrs:{class:"token text string"}},[t._v("[子类]")]),t._v("\nC "),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v(" E"),a("span",{pre:!0,attrs:{class:"token text string"}},[t._v("[RuntimeException]")]),t._v("\n")])])]),a("ol",[a("li",[a("p",[t._v("在Java中，"),a("strong",[t._v("java.lang.Throwable")]),t._v("类是Java一切错误和异常的祖先类\nThrowable又可以分为两大类：\n"),a("strong",[t._v("(1) java.lang.Error")]),t._v("\nError是严重错误，它描述了Java程序运行时，JVM内部错误和资源耗尽错误。对于Error程序自己是无能为力的，仅靠程序自身是无法恢复和预防，于是程序只能尽量安全的保存数据，然后终止程序，并通知用户去解决。\n"),a("strong",[t._v("(2) java.lang.Exception")]),t._v("\nException是一般异常，它描述的是Java程序运行时可以被程序捕获并处理的问题。\n"),a("strong",[t._v("I.RuntimeException（运行时异常）")]),t._v("\n指的是在程序运行期间，发生的一般问题。运行时异常有以下特点：\n1）运行时异常所描述的问题，程序无法在编译时期检查和预料，必须等到程序运行后才可能会出现这个问题，\n2）表现在代码上就是，即便程序中有可能抛出运行时异常，但不做任何处理程序也能正常编译和启动。\n典型的运行时异常有：空指针异常、除0异常、数组下标越界等。")]),t._v(" "),a("p",[a("strong",[t._v("II.CheckedException（编译时异常/受检查的异常）")]),t._v("\nException的非RuntimeException子类，都属于编译时异常，或受检查的异常（CheckedException）。编译时异常有以下特点：\n1）编译时异常所描述的问题，需要在程序编译时检查和预判。但异常肯定是要等到程序运行时期才可能被抛出，编译时异常，相当于需要提前预判和处理的异常。\n2）表现在代码上就是：如果程序中可能出现编译时异常，那么就必须在代码中明确的处理该异常，否则代码不能通过编译。\n典型的编译时异常有：克隆不支持异常（CloneNotSupportedException）以及解析异常（ParseException）等。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);