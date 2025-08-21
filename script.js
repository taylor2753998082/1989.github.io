const content = document.getElementById("content");

// 首页打字机文字
const introLines = [
  "欢迎来到《少年游·浮世绘》",
  "这是一个班级纪传体断代史",
  "请选择一个章节 开始探索吧"
];

// 选项数据
let options = [
  {
    title: "培优史序",
    text: `史传，忆往事以谏来者。
述人经历，作二本纪、二书、三表、四世家、五列传、二十三沉默。
学业之成，非勤与慧而已，亦需劳逸结合。
唯劳逸有度，学方能成。`
  },
  {
    title: "本纪篇",
    text: `壬寅年秋，诸君初会，开班而会。
癸卯年春，师更替频繁，然终齐聚一堂。
帝京游学，感慨万千。
至秋，班风渐正，以学为重。`
  },
  {
    title: "书篇",
    text: `书写文字，以存其迹。
记事立言，见证同窗岁月。`
  },
  {
    title: "表篇",
    text: `正时表记：壬寅年至癸卯年。
师生更替，学业起伏。
至秋，班风渐正，学业为重。`
  },
  {
    title: "世家篇",
    text: `世家四类，犹言教育之理。
或师长，或学子，各有家风。
以群体精神，见班级风貌。`
  },
  {
    title: "列传篇",
    children: [
      { title: "程宇洋", text: `稳重持重，学习认真。` },
      { title: "苏武森", text: `班长，人称453。语慢深思，谦谦如君子。文武兼备，常成笑典。` },
      { title: "韩乐", text: `小名乐乐。性纯良，立定跳远拔萃。逆来顺受，稚气可爱。` },
      { title: "葛佳豪", text: `号尤里，性儒雅。物理课代表，责任心强。思索勤而粗心。` },
      { title: "贺自豪", text: `号猴王。性谦和而略疏朗。物理课代表，学优谦恭。` },
      { title: "李浩", text: `字浩子，号海王。作文“李五十四”。由羞怯渐展才华。` },
      { title: "刘士海", text: `字四海。文辞优美，擅工句。宣传委员，责任心强。` },
      { title: "李鑫", text: `小名三金。卫生委员，幽默风趣。成绩后劲强，科研之才。` },
      { title: "马慧敏", text: `号撞羽，字朝颜。乐观好笑，兴趣广泛。英语课代表。` },
      { title: "牛玲群", text: `性淑均，兴趣广泛。字迹优美，任语文课代表。` },
      { title: "孙佳慧", text: `称佳慧。快人快语，责任心强。化学课代表，成绩优。` },
      { title: "王俊宇", text: `号型男。腿长鹤立鸡群。数学见长，性内敛。` },
      { title: "王梦慧", text: `质朴自乐。生物课代表。成绩稳健，中庸平和。` },
      { title: "王旭", text: `（人物小传暂无详细内容）` },
      { title: "辛嘉诚", text: `字佳橙。性随和，爱游。性坚韧如竹，成绩波动。` },
      { title: "熊启平", text: `字子牙，号飞熊。乐观开朗，英语课代表，副班长。` },
      { title: "殷贝贝", text: `抱朴守淳，少言。文采优美，兴趣广泛。学习刻苦。` },
      { title: "于成真", text: `字鸟哥，号云中君。性内敛，言少。成绩中庸。` },
      { title: "于松", text: `字松子，号青松子。擅唱rap，性坚挺如松。` },
      { title: "于依航", text: `号小王子。性狂放稚气。数学突出，洒脱自在。` },
      { title: "姚志恒", text: `号姚老师。好动张扬，篮球健将。成绩起伏不定。` },
      { title: "闫钊志", text: `（人物小传暂无详细内容）` },
      { title: "张奥宇", text: `（人物小传暂无详细内容）` },
      { title: "张方言", text: `（人物小传暂无详细内容）` },
      { title: "王丹", text: `个性鲜明。乒乓球夺魁，直言不讳。学习平常，特立独行。` }
    ]
  },
  {
    title: "沉默篇",
    children: [
      { title: "沉默之一", text: `平时寡言少语，逸事不多。` },
      { title: "沉默之二", text: `沉默如金，偶有笑谈。` },
      { title: "沉默之三", text: `性格安静，鲜有传闻。` },
      { title: "沉默之四", text: `性情低调，言少而实诚。` },
      { title: "沉默之五", text: `多不言事，偶有趣语。` },
      { title: "沉默之六", text: `少显锋芒，却自有风骨。` },
      { title: "沉默之七", text: `安静从容，笑语稀少。` },
      { title: "沉默之八", text: `略显内敛，行为简洁。` },
      { title: "沉默之九", text: `少露锋芒，常处幕后。` },
      { title: "沉默之十", text: `沉默而坚定。` },
      { title: "沉默之十一", text: `不显山水，却自有坚持。` },
      { title: "沉默之十二", text: `逸事稀少，常淡然。` },
      { title: "沉默之十三", text: `性情温和，少言多思。` },
      { title: "沉默之十四", text: `沉默寡言，却有内涵。` },
      { title: "沉默之十五", text: `平淡无奇，却真实可爱。` },
      { title: "沉默之十六", text: `安静若水。` },
      { title: "沉默之十七", text: `不爱张扬，常默默。` },
      { title: "沉默之十八", text: `沉默守拙，偶有趣事。` },
      { title: "沉默之十九", text: `少语，却为班级一份子。` },
      { title: "沉默之二十", text: `低调安然，少见逸事。` },
      { title: "沉默之二十一", text: `稀言少语，心境自宁。` },
      { title: "沉默之二十二", text: `沉默，是另一种存在。` },
      { title: "沉默之二十三", text: `寡言，亦是特色。` }
    ]
  },
  {
    title: "致谢",
    text: `感谢王旭提供素材。
感谢王梦慧、刘士海、于成真、韩乐协助修订。
此书若有未尽之处，恳请包涵并赐教。`
  }
];

// 打字机效果
function typeWriter(lines, callback) {
  let lineIndex = 0;
  function showLine() {
    if (lineIndex >= lines.length) {
      setTimeout(() => { callback && callback(); }, 2000);
      return;
    }
    let text = lines[lineIndex];
    let el = document.createElement("div");
    el.className = "typewriter";
    content.appendChild(el);
    let i = 0;
    let interval = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          el.style.opacity = 0;
          setTimeout(() => {
            el.remove();
            lineIndex++;
            showLine();
          }, 800);
        }, 1500);
      }
    }, 80);
  }
  showLine();
}

// 渲染一级菜单
function renderOptions() {
  content.innerHTML = "";
  const grid = document.createElement("div");
  grid.className = "options-grid";
  options.forEach((opt, index) => {
    let btn = document.createElement("button");
    btn.textContent = opt.title;
    btn.className = `option-btn option-btn-${index}`;
    btn.onclick = () => {
      if (opt.children) renderSubOptions(opt);
      else renderPage(opt);
    };
    grid.appendChild(btn);
  });
  content.appendChild(grid);
}

// 渲染二级菜单（子选项）
function renderSubOptions(parentOption) {
  content.innerHTML = "";
  const grid = document.createElement("div");
  grid.className = "options-grid";

  // 去掉已看过的
  parentOption.children
    .filter(child => !viewedChildren.has(child.title))
    .forEach((child, index) => {
      let btn = document.createElement("button");
      btn.textContent = child.title;
      btn.className = `option-btn option-btn-${index}`;
      btn.onclick = () => renderPage(child, parentOption);
      grid.appendChild(btn);
    });

  // 增加返回按钮
  let backBtn = document.createElement("button");
  backBtn.textContent = "返回上一级";
  backBtn.className = "back-btn glow";
  backBtn.onclick = () => renderOptions();
  grid.appendChild(backBtn);

  content.appendChild(grid);
}

// 渲染页面
function renderPage(option, parentOption = null) {
  content.innerHTML = "";
  let title = document.createElement("div");
  title.className = "page-title fancy-text";
  title.textContent = option.title;

  let textContainer = document.createElement("div");
  textContainer.className = "page-text fancy-text";
  let sentences = option.text.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  content.appendChild(title);
  content.appendChild(textContainer);

  typeWriter(sentences, () => {
    let btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    let backBtn = document.createElement("button");
    backBtn.textContent = "返回上一级";
    backBtn.className = "back-btn glow";
    backBtn.onclick = () => {
      if (parentOption) renderSubOptions(parentOption);
      else renderOptions();
    };
    btnContainer.appendChild(backBtn);

    let nextBtn = document.createElement("button");
    nextBtn.textContent = parentOption ? "返回人物列表" : "继续探索";
    nextBtn.className = "next-btn glow";
    nextBtn.onclick = () => {
      if (parentOption) {
        // 记录已浏览人物
        viewedChildren.add(option.title);
        renderSubOptions(parentOption);
      } else {
        options = options.filter(opt => opt.title !== option.title);
        if (options.length > 0) renderOptions();
        else renderEnd();
      }
    };
    btnContainer.appendChild(nextBtn);

    content.appendChild(btnContainer);
  });
}

// 结束页
function renderEnd() {
  content.innerHTML = "";
  typeWriter(["感谢探索 《少年游·浮世绘》", "期待再次相遇"]);
}

// 初始化
let viewedChildren = new Set();
typeWriter(introLines, renderOptions);
