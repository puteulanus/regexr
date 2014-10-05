(function() {
var library = {
	id:"Library",

	kids: [
		{
		label: "帮助",
		icon: "&#xE195;",
		desc: "RegExr程序的帮助信息。 如欲了解正则表达式的信息请浏览 <b>参考文档</b> 。",
		kids: [

			{
			label:"视频介绍",
			desc:"观看简略介绍正则表达式特性的3分钟视频。"+
				"<p><a href='javascript:regexr.showVideo();'>点击这里</a> 观看视频。</p>"
			},
			{
			label:"关于",
			desc:"由 <a href='http://twitter.com/gskinner/' target='_blank'>Grant Skinner</a> 和 <a href='http://gskinner.com/' target='_blank'>gskinner</a> 团队创建, 使用了 <a href='http://createjs.com/' target='_blank'>CreateJS</a> 和 <a href='http://codemirror.net/' target='_blank'>CodeMirror</a> 库。"+
				"<p>你可以在 <a href='http://github.com/gskinner/regexr/' target='_blank'>GitHub</a> 上查看RegExr的源代码，还可以提交反馈信息和错误日志。</p>"+
				// "Want to support RegExr updates, or buy us a beer as thanks? Feel free to <a href='#' target='_blank'>donate</a>."+ // TODO: link.
				"<p>RegExr v1 依然在 <a href='http://regexr.com/v1/' target='_blank'>regexr.com/v1/</a> 这里运行着。</p>"
			},
			{
			label:"正则引擎",
			desc:"虽然正则式的语法是一致的，但在不同的执行环境 (比如 Perl 和 Java) 中可能存在不同的规则 (比如前瞻断言) 。"+
				"<p>RegExr 使用您浏览器的正则表达式引擎进行匹配，它的语法高亮与文档均参照 Javascript 的正则表达式标准。</p>"
			},
			{
			id:"infinite",
			label:"'死循环' 错误",
			desc:"这个正则表达式可以匹配空文本，使用它可能造成死循环。",
			ext:" <h1>比如:</h1><code>.*</code> 可以匹配 <code>0</code> 个字符的空文本，使用这样的表达式可能造成ack等工具陷入死循环。"
			},
			{
			id:"timeout",
			label:"'超时' 错误",
			desc:"执行这个表达式使用了超过 250ms 的时间",
			ext:"对于一些表示数量的元字符嵌套的表达式，执行时间可能呈指数级增长。 <h1>比如:</h1> 当表达式 <code>(a+)+Z</code> 处理文本 <code>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</code> 时，匹配器在输入的末尾并没有检测到”Z”。外侧的限定符后退一次，内存的则前进一次，依然无法得到结果，如此重复。因此，匹配器逐步回退，并尝试所有的组合以找出匹配符号。它最终将返回(没有匹配的结果)，但是该过程的复杂性是指数型的(输入中添加一个字符加倍了运行时间)。"
			},
			{
			label:"开始使用",
			desc:"RegExr 提供实时的效果展示、语法高亮、提示以及撤销、重做功能 ({{getCtrlKey()}}-Z / Y) ，使用它探索正则表达式是一件容易而愉快的事。"+
				"<p>浏览 <b>参考文档</b> 并尝试不同的元字符，学习他们的作用；查看 <b>示例</b> 学习怎样把元字符组合成表达式。 </p>"
			},
			{
			label:"表达式面板",
			desc:"这儿是您输入正则表达式的地方。在您输入的过程中， <b>文本</b> 面板的匹配结果将实时更新。鼠标在表达式上悬停可以看到当前所指的元字符的相关信息。"+
				"<p>通过右边的按钮你可以保存、分享你的成果，编辑表达式的flag。保存的内容在24小时内可以更新。</p>"+
				"<p>按钮下边的 结果 气泡会显示匹配的数量，或者在出现错误时显示错误的原因。</p>"
			},
			{
			label:"文本面板",
			desc:"这儿是您输入需要正则表达式处理的文本的地方。您可以拖拽一个文本文件到这里以载入它所包含的文本内容。"+
				"<p>匹配成功的文本将会高亮显示，鼠标悬停在上面可以查看它的相关信息和捕获组。</p>"+
				"<p>如果匹配文本无法用一行显示，自动折行处会用浅色标记。</p>"
			},
			{
			label:"替换面板",
			desc:"点击 <b>文本</b> 栏下方的 <b>替换</b> 栏来展开或者收起 <b>替换</b> 面板。"+
				"<p><b>文本</b> 面板中的匹配文本会在替换面板中被你输入的替换表达式所替换。</p>"+
				"<p>转义字符与JS兼容，比如 <code>\\n</code> 、 <code>\\t</code> 和 <code>\\u0009</code>等</p>"+
				"<p>鼠标在替换表达式上悬停可以查看当前指向的元字符的相关信息。</p>"
			},
			{
			label:"资料库面板",
			desc:"<b>资料库</b> 面板中包含了帮助文档和完整的正则表达式元字符与flag的参考文档。"+
				"<p>点击参考文档中一个已被选中的元字符可以将它插入 <b>表达式</b> 面板的表达式中。 点击示例右边的 <span class='icon'>&#xE212;</span> 按钮将示例导入表达式面板中。</p>"+
				"<p>资料库中还包含了完整的示例、社区意见搜索和您的收藏夹。</p>"
			}
		]
		},

		{
		label: "参考文档",
		id: "reference",
		icon: "&#xE072;",
		desc: "这里有所有用于构建正则表达式的元字符的相关信息。"
			+"<p>再次点击一个已被选中的元字符可以将它插入您的表达式中。</p>"
			+"<p>点击示例右边的 <span class='icon'>&#xE212;</span> 按钮将示例导入表达式面板中。</p>",
		target:"expr",
		kids: [
			{
			label: "字符类",
			id: "charclasses",
			desc: "字符类的元字符可以匹配一组特定的字符。有一些预定义的元字符可以使用，或者你也可以自己定义特定字符的范围。",
			kids: [
				{
				id:"dot",
				desc:"匹配任何字符，除了换行符。",
				ext:"与 <code>[^\\n\\r]</code> 等价。",
				example:[".", "glib jocks vex dwarves!"],
				token:"."
				},
				{
				label:"match any",
				desc:"可以匹配任何字符，包括换行符。"+
					"<p>它的另一种写法是 <code>[^]</code> ，不过不是所有浏览器都支持。</p>",
				example:["[\\s\\S]", "glib jocks vex dwarves!"],
				token:"[\\s\\S]"
				},
				{
				id:"word",
				desc:"可以匹配任何单词的组成字符 (字母、数字以及下划线).",
				ext:"只会匹配 low-ascii 字符 (无重音符号和非罗马的字符)。 等价于 <code>[A-Za-z0-9_]</code>",
				example:["\\w","bonjour, mon fr\u00E8re"],
				token:"\\w"
				},
				{
				id:"notword",
				label: "not word",
				desc:"匹配不是单词组成部分 (字母、数字以及下划线)的字符。",
				ext:" 等价于 <code>[^A-Za-z0-9_]</code>",
				example:["\\W","bonjour, mon fr\u00E8re"],
				token:"\\W"
				},
				{
				id:"digit",
				desc:"匹配任意数字 (0-9)。",
				ext:"等价于 <code>[0-9]</code>。",
				example:["\\d","+1-(444)-555-1234"],
				token:"\\d"
				},
				{
				id:"notdigit",
				label: "not digit",
				desc:"匹配任意不是数字(0-9)的字符。",
				ext:"等价于 <code>[^0-9]</code>。",
				example:["\\D","+1-(444)-555-1234"],
				token:"\\D"
				},
				{
				id:"whitespace",
				desc:"匹配任意空白符 (空格, tab, 换行符)。",
				example:["\\s", "glib jocks vex dwarves!"],
				token:"\\s"
				},
				{
				id:"notwhitespace",
				label: "not whitespace",
				desc:"匹配任何非空白符 (空格, tab, 换行符)的字符。",
				example:["\\S", "glib jocks vex dwarves!"],
				token:"\\S"
				},
				{
				id:"set",
				label: "character set",
				desc:"匹配设定的特定字符包含的任意字符。",
				example:["[aeiou]","glib jocks vex dwarves!"],
				token:"[ABC]"
				},
				{
				id:"setnot",
				label: "negated set",
				desc:"匹配设定的特定字符不包含的任意字符。",
				example:["[^aeiou]","glib jocks vex dwarves!"],
				token:"[^ABC]"
				},
				{
				id:"range",
				tip:"Matches a character in the range {{getChar(prev)}} to {{getChar(next)}} (char code {{prev.code}} to {{next.code}}).",
				example:["[g-s]","abcdefghijklmnopqrstuvwxyz"],
				desc: "匹配设定的特定字符范围所包含的任意字符。",
				token:"[A-Z]"
				}
			]
			},

			{
			label:"锚",
			id:"anchors",
			desc:"锚匹配的是字符串中的位置，而不是某个特定的字符。",
			kids:[
				{
				id:"bof",
				label:"beginning",
				desc:"匹配字符串的开始位置，或者当multiline flag (<code>m</code>) 开启时匹配行的开始位置。",
				ext:"它匹配的是一个位置，而不是一个字符。",
				 example:["^\\w+","she sells seashells"],
				token:"^"
				},
				{
				id:"eof",
				label:"end",
				desc:"匹配字符串的结束位置，或者当multiline flag (<code>m</code>) 开启时匹配行的结束位置。",
				ext:"它匹配的是一个位置，而不是一个字符。",
				example:["\\w+$","she sells seashells"],
				token:"$"
				},
				{
				id:"wordboundary",
				label:"word boundary",
				desc:"匹配一个单词边界的位置，如空格、标点符号或字符串的开始和结束。",
				ext:"它匹配的是一个位置，而不是一个字符。",
				example:["s\\b","she sells seashells"],
				token:"\\b"
				},
				{
				id:"notwordboundary",
				label: "not word boundary",
				desc:"匹配一个不是单词边界的位置。",
				ext:"它匹配的是一个位置，而不是一个字符。",
				example:["s\\B","she sells seashells"],
				token:"\\B"
				}
			]
			},
			{
			label: "转义字符",
			id:"escchars",
			desc: "有一些字符在正则表达式中拥有特殊含义，想匹配他们必须转义。所有转义字符以 <code>\\</code> 字符开头。<br/><br/> 在 character set 中，只有 <code>\\</code> 、 <code>-</code> 、和 <code>]</code> 需要转义。",
			kids: [
				{
				id:"escoctal",
				label:"octal escape",
				desc:"类似 <code>\\000</code> 形式的是八进制转义字符。",
				ext:"其中数字的十进制值必须小于255 (<code>\\377</code>).",
				example:["\\251","RegExr is \u00A92014"],
				token:"\\000"
				},
				{
				id:"eschexadecimal",
				label:"hexadecimal escape",
				desc:"类似 <code>\\xFF</code> 形式的是八进制转义字符。",
				example:["\\xA9","RegExr is \u00A92014"],
				token:"\\xFF"
				},
				{
				id:"escunicode",
				label:"unicode escape",
				desc:"类似 <code>\\uFFFF</code> 形式的是Unicode转义字符。",
				example:["\\u00A9","RegExr is \u00A92014"],
				token:"\\uFFFF"
				},
				{
				id:"esccontrolchar",
				label:"control character escape",
				desc:"类似 <code>\\cZ</code> 形式的是转义控制字符。",
				ext:"您可以使用 <code>\\cA</code> (NULL, 字符代码为 0) 到 <code>\\cZ</code> (EM, 字符代码为 25). <h1>Example:</h1><code>\\cI</code> 匹配 TAB (字符代码为 9).",
				token:"\\cI"
				}
			]
			},
			{
			label: "捕获组和零宽断言",
			id:"groups",
			desc: "捕获组可以顺序标记元字符，通过 backreference 可以使用捕获组中元字符匹配到的文本。"+
				 "<hr/>零宽断言可以匹配一个位置，但匹配的内容不作为匹配结果输出。",
			kids: [
				{
				id:"group",
				label: "capturing group",
				desc: "将多个元字符组合成一个捕获组，用于提取一个特定文本或者使用 backreference 引用捕获内容。",
				example:["(ha)+","hahaha haa hah!"],
				token:"(ABC)"
				},
				{
				id:"backref",
				label:"backreference",
				tip:"Matches the results of capture group #{{group.num}}.",
				desc:"匹配相应的捕获组捕获到的内容。 比如 <code>\\1</code> 匹配第一个捕获组所匹配的内容， <code>\\3</code> 匹配第三个捕获组所匹配的",
				example:["(\\w)a\\1","hah dad bad dab gag gab"],
				token:"\\1"
				},
				{
				id:"noncapgroup",
				label: "non-capturing group",
				desc:"不捕获匹配的文本，也不给此分组分配组号。",
				example:["(?:ha)+","hahaha haa hah!"],
				token:"(?:ABC)"
				},
				{
				id:"poslookahead",
				label: "positive lookahead",
				desc:"断言自身出现的位置的后面能匹配表达式，不输出匹配内容。",
				example:["\\d(?=px)","1pt 2px 3em 4px"],
				token:"(?=ABC)"
				},
				{
				id:"neglookahead",
				label: "negative lookahead",
				desc:"断言自身出现的位置的后面能匹配表达式 (如果它匹配成功，则这个文本不是匹配结果).",
				example:["\\d(?!px)","1pt 2px 3em 4px"],
				token:"(?!ABC)"
				},
				{
				id:"poslookbehind",
				label: "positive lookbehind*",
				desc:"<b>*在 JavaScript 中不被允许。</b> 断言自身出现的位置的前面能匹配表达式，不输出匹配内容。在一些执行环境中，长度不定的回顾断言是不被允许的。",
				token:"(?<=ABC)"
				},
				{
				id:"neglookbehind",
				label: "negative lookbehind*",
				desc:"<b>*在 JavaScript 中不被允许。</b> 断言此位置的前面不能匹配表达式 (如果它匹配成功，则这个文本不是匹配结果)。在一些执行环境中，长度不定的回顾断言是不被允许的。",
				token:"(?&lt;!ABC)"
				}
			]
			},
			{
			label: "Quantifiers & Alternation",
			id:"quants",
			desc: "量词限定它前面的元字符或捕获组的重复次数，默认情况下量词是贪婪的，会尽可能匹配多的字符。"+
				"<hr/>Alternation 的作用类似布尔体系中的 OR, 匹配它两边的任意一个或全部表达式。",
			kids: [
				{
				id:"plus",
				desc:"限定元字符或捕获组可以重复1次或多次。",
				example:["b\\w+","b be bee beer beers"],
				token:"+"
				},
				{
				id:"star",
				desc:"限定元字符或捕获组可以重复任意次，包括0次。",
				example:["b\\w*","b be bee beer beers"],
				token:"*"
				},
				{
				id:"quant",
				label:"quantifier",
				desc:"限定元字符或捕获组可以重复范围内的次数。"+
					"<code>{1,3}</code> 限定可以重复1到3次。 "+
					"<code>{3}</code> 限定可以重复3次。 "+
					"<code>{3,}</code> 限定可以重复3次或以上。",
				example:["b\\w{2,3}","b be bee beer beers"],
				token:"{1,3}"
				},
				{
				id:"opt",
				label:"optional",
				desc:"限定元字符或捕获组可以重复0次或1次，即它所限定的内容是可选的。",
				example: ["colou?r", "color colour"],
				token:"?"
				},
				{
				id:"lazy",
				desc:"使前面的量词转为懒惰模式，使其匹配尽可能少的字符。",
				ext:"默认情况下量词是贪婪的，会尽可能匹配多的字符。",
				example:["b\\w+?","b be bee beer beers"],
				token:"?"
				},
				{
				id:"alt",
				label:"alternation",
				desc:"作用类似布尔体系中的 OR, 匹配 <code>|</code> 两边的任意一个或全部表达式。",
				ext:"<p>它可以在捕获组内被使用，也可以用于整个表达式。位于它两侧的表达式将按顺序进行匹配尝试。</p>",
				example:["b(a|e|i)d","bad bud bod bed bid"],
				token:"|"
				}
			]
			},

			{
			label: "Substitution",
			desc: "这些元字符用于在替换表达式中对匹配的文本插入不同的内容。",
			target:"subst",
			kids: [
				{
				id:"subst_match",
				label: "match",
				desc:"插入匹配的文本自身。",
				token:"$$&"
				},
				{
				id:"subst_num",
				label: "capture group",
				tip:"Inserts the results of capture group #{{group.num}}.",
				desc:"插入指定捕获组的内容 (比如 $3 会插入第三捕获组捕获的内容)。",
				token:"$1"
				},
				{
				id:"subst_pre",
				label: "before match",
				desc:"插入源字符串中位于匹配内容前的文本。",
				token:"$$`"
				},
				{
				id:"subst_post",
				label: "after match",
				desc:"插入源字符串中位于匹配内容后的文本。",
				token:"$$'"
				},
				{
				id:"subst_$",
				label: "escaped $",
				desc:"插入一个美元符号 ($) 。",
				token:"$$$$"
				},
				{
				label: "escaped characters",
				token: "\\n",
				desc: "转义字符与JS兼容，比如 <code>\\n</code>, <code>\\t</code>, <code>\\x09</code>, & <code>\\u0009</code>  等都可以在替换表达式中使用。"
				}
			]
			},
			{
			id:"flags",
			label:"Flags",
			tooltip:"Expression flags change how the expression is interpreted. Click to edit.",
			desc:"修改表达式的标志可以改变表达式的解析方式。JS中有3个标志：i、g和m。标志位于反斜杠定界符的后边 (比如 <code>/.+/igm</code> ) 。",
			target:"flags",
			kids: [
				{
				id:"flag_i",
				label: "ignore case",
				desc:"让整个表达式对大小写不敏感。",
				ext:" 比如， <code>/aBc/i</code> 会与 <code>AbC</code> 匹配。",
				token:"i"
				},
				{
				id:"flag_g",
				label: "global search",
				tip: "Retain the index of the last match, allowing iterative searches.",
				desc:"Retain the index of the last match, allowing subsequent searches to start from the end of the previous match."+
					"<p>Without the global flag, subsequent searches will return the same match.</p><hr/>"+
					"RegExr only searches for a single match when the global flag is disabled to avoid infinite match errors.",
				token:"g"
				},
				{
				id:"flag_m",
				label:"multiline",
				tip:"Beginning/end anchors (<b>^</b>/<b>$</b>) will match the start/end of a line.",
				desc:"When the multiline flag is enabled, beginning and end anchors (<code>^</code> and <code>$</code>) will match the start and end of a line, instead of the start and end of the whole string."+
					"<p>Note that patterns such as <code>/^[\\s\\S]+$/m</code> may return matches that span multiple lines because the anchors will match the start/end of <b>any</b> line.</p>",
				token:"m"
				}
			]
			}
		]

		},
		{
		id:"cheatsheet",
		label: "Cheatsheet",
		max:true,
		kids:[],
		icon: "&#xE603;",
		desc:"pulled from html"
		},
		{
		label: "Examples",
		id:"examples",
		icon: "&#xE065;",
		desc: "Example patterns to get you started with Regular Expressions."
			+"<p>Click the <span class='icon'>&#xE212;</span> beside an example to load it.</p>",
		kids: [
			{
			label:"integer & decimal numbers",
			desc:"Matches integer and decimal numbers.",
			example:["(?:\\d*\\.)?\\d+", "10rats + .36geese = 3.14cows"]
			},
			{
			label:"test testing",
			desc:"Pay attention. There will be a test.",
			example:["\\btest(er|ing|ed|s)?\\b", "that tested test is testing the tester's tests"]
			},
			{
			label:"phone number",
			desc:"North American phone number matching. Highly simplified!",
			example:["\\b\\d{3}[-.]?\\d{3}[-.]?\\d{4}\\b", "p:444-555-1234 f:246.555.8888 m:1235554567"]
			},
			{
			label:"words",
			desc:"Simple example matching words in text. In this case, only considering low ascii characters (a-z).",
			example:["[a-zA-Z]+", "RegEx is tough, but useful."]
			},
			{
			label:"24 or 32 bit colors",
			desc:"Matches a 24 or 32 bit hex color, with an optional leading # or 0x.",
			example:["(?:#|0x)?(?:[0-9A-F]{2}){3,4}", "#FF006C 99AAB7FF 0xF0F73611"]
			},
			{
			label:"4 letter words",
			desc:"Four letter words are bad right? This finds them.",
			example:["\\b\\w{4}\\b", "drink beer, it's very nice!"]
			},
			{
			label:"2-5 letter palindromes",
			desc:"Using backreferences to matches 2 to 5 letter palindromes (words that read the same forward and backward).",
			example:["\\b(\\w)?(\\w)\\w?\\2\\1", "my dad sees a kayak at noon"]
			}
		]
		},
		{
		label: "Community",
		icon: "&#xE044;",
		id: "community",
		kids: [],
		desc: ""
		},
		{
		label: "Favourites",
		icon: "&#xE013;",
		id:"favorites",
		kids:[],
		desc: ""
		}
	]

};

var misc = {
	// stuff that doesn't fit in the library.
	kids:[
		{
		id:"char",
		label:"character",
		tip:"Matches a {{getChar()}} character (char code {{code}})."
		},
		{
		id:"js_char",
		label: "character",
		tip:"Inserts a {{getChar()}} character (char code {{code}})."
		},
		{
		id:"quant",
		label: "quantifier",
		tip:"Match {{getQuant()}} of the preceding token."
		},
		{
		id:"open",
		tip:"Indicates the start of a regular expression."
		},
		{
		id:"close",
		tip:"Indicates the end of a regular expression and the start of expression flags."
		},
		{
		id:"ERROR",
		tip:"Errors in the expression are underlined in red. Roll over errors for more info."
		}
	]
};

var errors = {
	groupopen:"Unmatched opening parenthesis.",
	groupclose:"Unmatched closing parenthesis.",
	quanttarg:"Invalid target for quantifier.",
	setopen:"Unmatched opening square bracket.",
	esccharopen:"Dangling backslash.",
	quantrev:"Quantifier minimum is greater than maximum.",
	rangerev:"Range values reversed. Start char is greater than end char.",
	lookbehind:"Lookbehind is not supported in Javascript.",
	fwdslash:"Unescaped forward slash.",
	esccharbad:"Invalid escape sequence."

	// infinite is handled in the Help section.
};

/*
// add the "All" reference section. This is kind of fragile at the moment.
kids = reference.kids;
kids.unshift({
	label: "All",
	desc: "All RegEx tokens supported in JS. Does not include Substitution or Flags.",
	kids: []
	});
var all = kids[0].kids;
for (i=0; i<kids.length; i++) {
	if (kids[i].target) { continue; }
	var entries = kids[i].kids;
	for (var j=0; j<entries.length; j++) {
		var entry = entries[j];
		var o = {};
		for (var n in entry) { o[n] = entry[n]; }
		o.label = o.label||o.id;
		delete(o.id);
		all.push(o);
	}
}
//*/

window.documentation = {library:library, misc:misc, errors:errors};

})();
