/* MindBridge — Understanding Autism (knowledge series) */
window.MB_SERIES = window.MB_SERIES || {};
window.MB_SERIES.knowledge = {
  title: { zh: "自闭症知识", en: "Understanding Autism" },
  intro: {
    zh: [
      "了解自闭症需要可靠信息，也需要倾听自闭症人士及家庭的经验。本栏目介绍基础概念、常见支持方式、教育与生活资源，并说明每项资料的来源和适用范围。",
      "这些内容不能用于自行诊断。对发育、沟通或行为有疑问时，请联系儿科医生、家庭医生、学校评估团队或具有相应资质的专业人员。"
    ],
    en: [
      "Understanding autism takes reliable information — and it takes listening to the experiences of autistic people and their families. This section introduces core concepts, common forms of support, and education and daily-life resources, and explains where each piece of information comes from and what it applies to.",
      "This content is not meant for self-diagnosis. If you have questions about development, communication, or behavior, please reach out to a pediatrician, family doctor, school evaluation team, or another appropriately qualified professional."
    ]
  }
};

window.MB_ARTICLES = window.MB_ARTICLES || [];

(function () {
  var NOTE = {
    zh: "本文为公众科普，不用于自行诊断，也不替代专业医疗或教育建议。",
    en: "This article is for public education. It is not a tool for self-diagnosis and does not replace professional medical or educational advice."
  };

  /* ---------- k01 ---------- */
  window.MB_ARTICLES.push({
    id: "k01",
    series: "knowledge",
    num: "01",
    img: "assets/k01.jpg",
    imgAlt: {
      zh: "社区图书馆里，不同青年以阅读、创作、平板沟通和交谈等方式参与活动。",
      en: "In a community library, young people take part in different ways — reading, making things, communicating with a tablet, and chatting."
    },
    date: "2026-09",
    tag: { zh: "基础认识", en: "Foundations" },
    title: {
      zh: "认识自闭症谱系：不是一种固定模样",
      en: "Understanding the Autism Spectrum: There Is No Single Way to Be Autistic"
    },
    dek: {
      zh: "自闭症描述的是一组与大脑发育相关的特征，但它从不等于一个人的全部。理解谱系，第一步是看见差异，也看见每个人独特的能力、偏好与支持需要。",
      en: "Autism describes a set of characteristics related to how the brain develops — but it is never the whole of who a person is. Understanding the spectrum starts with seeing differences, and with seeing each person's own abilities, preferences, and support needs."
    },
    summary: {
      zh: "自闭症是一种神经发育差异。所谓谱系，不是从“轻”到“重”的单一刻度，而是不同特征与支持需要的多种组合。",
      en: "Autism is a neurodevelopmental difference. The “spectrum” is not a single scale running from “mild” to “severe” — it is many different combinations of characteristics and support needs."
    },
    keywords: {
      zh: ["基础认识", "神经多样性", "尊重语言"],
      en: ["Foundations", "Neurodiversity", "Respectful language"]
    },
    body: {
      zh: [
        { h: "为什么叫谱系" },
        { p: "世界卫生组织把自闭症描述为一组与大脑发育相关的多样化状况。常见特征涉及社会互动与沟通方式，以及较为固定或重复的行为、兴趣与活动模式；有些人还会在声音、光线、气味、触感或身体感受方面表现出明显差异。" },
        { p: "“谱系”并不是一条从“轻”到“重”的直线。一个人可能语言表达很流畅，却在处理变化、理解暗示或调节感官负荷时需要大量支持；另一个人可能很少使用口语，却能通过文字、图片、手势或辅助沟通设备清晰表达观点。能力与困难往往同时存在，并且会随着环境、健康、压力和人生阶段而改变。" },
        { h: "数字需要放回背景里理解" },
        { p: "2025 年发布的世界卫生组织资料估计，2021 年全球约每 127 人中有 1 人为自闭症人士。美国疾病控制与预防中心则报告，在其 16 个监测社区的 2022 年样本中，约每 31 名 8 岁儿童中有 1 名被识别为自闭症。两个数字来自不同地区、年龄和统计方法，不能直接横向比较，也不能简单推断为某个地方“更容易导致自闭症”。" },
        {
          stat: [
            { value: "1 / 127", label: "世界卫生组织全球估计（2021 年）", sub: "全年龄段，全球范围" },
            { value: "1 / 31", label: "美国疾控中心 ADDM 监测（2022 年）", sub: "美国 16 个监测社区的 8 岁儿童" }
          ],
          note: "两个数字来自不同人群和统计方法，不能直接比较。"
        },
        { p: "识别率受到筛查覆盖、专业服务可及性、学校记录和社会认知等多重因素影响。数字上升并不自动等于某一种单一原因增加，更重要的意义是：社区需要准备更公平的识别渠道和更充分的教育、医疗与生活支持。" },
        { h: "看见支持需要，也看见优势" },
        { p: "自闭症人士可能在细节观察、长期专注、记忆、模式识别、诚实直接或特定领域知识方面展现优势，也可能面对沟通误解、感官过载、执行功能困难、焦虑或日常生活安排方面的挑战。优势不能用来否认困难，困难也不应遮住能力。" },
        { p: "合适的支持不是把每个人训练成同一种样子，而是减少不必要的障碍，让当事人能以更舒适、安全和自主的方式学习、工作、沟通与参与社群。支持可能包括清晰说明、视觉信息、安静空间、可预测流程、辅助沟通、任务拆分或更灵活的时间安排。" },
        { h: "我们可以怎样说和怎样做" },
        { ul: [
          "先询问当事人偏好的称呼。有些人使用“自闭症人士”，有些人更喜欢“患有或有自闭症的人”；没有一种表达能代表所有人。",
          "不要从是否眼神接触、是否能说话或学习成绩，推断一个人的理解力、情感或未来。",
          "把“他为什么这样”换成“现在有什么让他不舒服”“怎样的环境更容易参与”“他更习惯用什么方式沟通”。",
          "做决定时邀请当事人参与。与自闭症有关的服务、活动和内容，应尽可能与自闭症人士共同设计。"
        ] },
        { quote: "理解自闭症不是背下一套标签，而是学会在每一次真实互动中观察、询问与调整。一个更包容的社群，不要求所有人用同一种方式出现。" }
      ],
      en: [
        { h: "Why it's called a spectrum" },
        { p: "The World Health Organization describes autism as a diverse group of conditions related to brain development. Common characteristics involve how a person interacts and communicates socially, along with more fixed or repetitive patterns of behavior, interests, and activities. Some people also experience marked differences in how they respond to sound, light, smell, touch, or sensations in their own bodies." },
        { p: "The “spectrum” is not a straight line from “mild” to “severe.” One person may speak very fluently yet need a lot of support with handling change, picking up on hints, or managing sensory load; another may rarely use spoken language yet express their views clearly through writing, pictures, gestures, or an assistive communication device. Strengths and challenges usually exist side by side, and both can shift with a person's environment, health, stress, and stage of life." },
        { h: "Numbers need context" },
        { p: "WHO information published in 2025 estimates that in 2021, about 1 in 127 people worldwide were autistic. The US Centers for Disease Control and Prevention (CDC) reports that in its 2022 sample from 16 monitoring communities, about 1 in 31 eight-year-olds had been identified as autistic. These two figures come from different places, age groups, and methods, so they can't be compared side by side — nor do they mean that any one place “makes autism more likely.”" },
        {
          stat: [
            { value: "1 / 127", label: "WHO global estimate (2021)", sub: "All ages, worldwide" },
            { value: "1 / 31", label: "CDC ADDM Network (2022)", sub: "8-year-olds in 16 US communities" }
          ],
          note: "The two figures use different populations and methods and cannot be compared directly."
        },
        { p: "Identification rates are shaped by many factors, including how widely screening reaches, access to professional services, school records, and public awareness. A rising number does not automatically mean that any single cause is increasing. What matters more is this: communities need fairer pathways to identification and fuller educational, medical, and everyday support." },
        { h: "Seeing support needs — and strengths" },
        { p: "Autistic people may show strengths in noticing detail, sustained focus, memory, pattern recognition, honesty and directness, or deep knowledge of particular subjects. They may also face challenges such as being misunderstood, sensory overload, executive-function difficulties, anxiety, or organizing daily life. Strengths should never be used to deny difficulties, and difficulties should never hide a person's abilities." },
        { p: "Good support isn't about training everyone to look the same. It's about removing unnecessary barriers so a person can learn, work, communicate, and take part in community life in ways that feel more comfortable, safe, and self-directed. Support might include clear explanations, visual information, quiet spaces, predictable routines, assistive communication, breaking tasks into steps, or more flexible timing." },
        { h: "What we can say and do" },
        { ul: [
          "Ask the person how they'd like to be described first. Some people say “autistic person,” while others prefer “person with autism.” No single term speaks for everyone.",
          "Don't judge someone's understanding, feelings, or future by whether they make eye contact, whether they speak, or how they do in school.",
          "Swap “Why is he doing that?” for “What's making him uncomfortable right now?”, “What kind of setting makes it easier to join in?”, and “How does he prefer to communicate?”",
          "Include the person in decisions. Services, activities, and content related to autism should be co-designed with autistic people whenever possible."
        ] },
        { quote: "Understanding autism isn't about memorizing a set of labels — it's about learning to notice, ask, and adjust in every real interaction. A more inclusive community doesn't require everyone to show up in the same way." }
      ]
    },
    sources: [
      { label: "世界卫生组织 Autism 2025", url: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" },
      { label: "美国国家精神卫生研究所 Autism Spectrum Disorder", url: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd" },
      { label: "美国疾控中心 Autism Prevalence Varies Across US Communities 2025", url: "https://www.cdc.gov/autism/data-research/index.html" }
    ],
    note: NOTE
  });

  /* ---------- k02 ---------- */
  window.MB_ARTICLES.push({
    id: "k02",
    series: "knowledge",
    num: "02",
    img: "assets/k02.jpg",
    imgAlt: {
      zh: "发展咨询室里，专业人员与家长交谈，一名儿童在旁边自然地搭积木。",
      en: "In a child development consultation room, a professional talks with a parent while a child builds with blocks nearby."
    },
    date: "2026-09",
    tag: { zh: "筛查与诊断", en: "Screening & diagnosis" },
    title: {
      zh: "从观察差异到获得支持：筛查与诊断该知道什么",
      en: "From Noticing Differences to Getting Support: What to Know About Screening and Diagnosis"
    },
    dek: {
      zh: "观察、筛查和诊断是三个不同步骤。它们的共同目标不是给孩子贴标签，而是更早理解发展特点，并连接真正需要的支持。",
      en: "Observation, screening, and diagnosis are three different steps. Their shared goal isn't to label a child — it's to understand a child's development earlier and connect them with the support they actually need."
    },
    summary: {
      zh: "筛查提示是否需要进一步评估，不能单独作出诊断；正式诊断通常结合发展史、照护者信息和专业观察。",
      en: "Screening shows whether further evaluation may be needed; it cannot make a diagnosis on its own. A formal diagnosis usually draws on developmental history, information from caregivers, and professional observation."
    },
    keywords: {
      zh: ["发展观察", "筛查", "专业评估"],
      en: ["Developmental monitoring", "Screening", "Professional evaluation"]
    },
    body: {
      zh: [
        { h: "先分清三个概念" },
        { ul: [
          "发展观察是持续留意孩子在玩耍、学习、说话、行动和社交方面的变化。父母、祖辈、教师和照护者都可以参与。",
          "发展筛查通常使用标准化问卷或工具，判断孩子是否需要进一步评估。筛查结果阳性不等于已经确诊。",
          "诊断评估由有资质的专业人员进行，综合发展史、照护者描述、现场观察及其他必要信息，判断是否符合诊断标准并了解支持需要。"
        ] },
        { p: "美国儿科学会建议在常规儿童保健中进行发展筛查，并在 18 月龄和 24 月龄进行自闭症专项筛查。不同国家和地区的流程可能不同，但共同原则是：出现担忧时不要只等待下一次固定筛查，可以主动向儿科、家庭医生或当地发展服务机构咨询。" },
        { h: "哪些表现值得进一步了解" },
        { p: "可能引起关注的表现包括：很少用手势或语言分享兴趣、对名字反应不稳定、互动游戏较少、反复使用某些动作或语言、对变化非常困难、兴趣高度集中，或对声音、气味、触感与光线反应明显不同。有些青少年和成年人早年没有被识别，后来在社交要求、学习压力或独立生活任务增加时才意识到长期存在的差异。" },
        { p: "单个表现不能说明一个人就是自闭症。非自闭症儿童也可能出现其中一些特征，自闭症儿童也不一定具有清单中的每一项。真正需要关注的是这些特点如何组合、持续多久、是否影响日常参与，以及当事人需要哪些帮助。" },
        { h: "诊断不是一次抽血或一张量表" },
        { p: "目前没有一项血液检查、脑扫描或单独问卷可以确诊自闭症。美国疾控中心指出，评估通常依赖两类核心信息：照护者对发展过程的描述，以及专业人员对行为和互动的观察。必要时，评估团队还可能了解语言、认知、适应能力、听力、运动、情绪或其他健康状况。" },
        { p: "量表可以帮助收集信息，但任何单一工具都不应独立承担诊断。一次负面筛查也不代表以后不需要关注；如果家长、教师或本人持续感到困难，应继续与专业人员沟通。" },
        { h: "去评估前可以准备什么" },
        { ul: [
          "记录具体情境，而不是只写“表现不好”。例如：什么时候容易退出活动，什么变化会引发强烈反应，怎样提示最有效。",
          "整理既往健康、语言、学习和成长记录，包括教师观察和已有评估。",
          "列出当事人的兴趣、优势和有效支持方式，避免评估只剩下困难清单。",
          "准备想问的问题：评估包含哪些环节、谁会参与、结果如何解释、下一步支持在哪里。"
        ] },
        { callout: "若出现已经掌握的语言或其他技能明显倒退，应尽快联系医疗专业人员。" },
        { quote: "获得诊断可以帮助一些人理解自己并取得服务，但支持不应等到所有手续完成才开始。清晰指令、稳定流程、沟通工具和感官调整等合理支持，可以在等待评估期间根据实际需要先行尝试。" }
      ],
      en: [
        { h: "First, three different ideas" },
        { ul: [
          "Developmental monitoring means paying ongoing attention to how a child plays, learns, speaks, moves, and interacts with others. Parents, grandparents, teachers, and caregivers can all take part.",
          "Developmental screening usually uses a standardized questionnaire or tool to decide whether a child needs further evaluation. A positive screening result is not a diagnosis.",
          "A diagnostic evaluation is carried out by qualified professionals. They bring together developmental history, caregiver accounts, direct observation, and other necessary information to decide whether diagnostic criteria are met and to understand the person's support needs."
        ] },
        { p: "The American Academy of Pediatrics recommends developmental screening as part of routine well-child care, with autism-specific screening at 18 and 24 months. Processes vary between countries and regions, but the shared principle is this: if you have concerns, don't just wait for the next scheduled screening — you can reach out to a pediatrician, family doctor, or local developmental services yourself." },
        { h: "Signs worth looking into" },
        { p: "Things that may raise questions include: rarely using gestures or words to share interests, responding inconsistently to their name, little back-and-forth play, repeating certain movements or phrases, great difficulty with change, very focused interests, or noticeably different reactions to sound, smell, touch, and light. Some teens and adults weren't identified early on, and only later — as social demands, academic pressure, or independent-living tasks grew — realized that these differences had been there all along." },
        { p: "No single sign means a person is autistic. Non-autistic children may show some of these traits, and autistic children won't necessarily show every item on a list. What really matters is how these traits combine, how long they last, whether they affect everyday participation, and what kind of help the person needs." },
        { h: "Diagnosis isn't a blood test or a single questionnaire" },
        { p: "There is currently no blood test, brain scan, or stand-alone questionnaire that can diagnose autism. The CDC notes that evaluation usually relies on two core kinds of information: caregivers' descriptions of the child's development, and professionals' observation of behavior and interaction. When needed, the evaluation team may also look at language, thinking skills, adaptive skills, hearing, movement, emotions, or other health conditions." },
        { p: "Rating scales can help gather information, but no single tool should carry a diagnosis on its own. A negative screening also doesn't mean no further attention is needed; if parents, teachers, or the person themselves keep noticing difficulties, they should keep talking with professionals." },
        { h: "How to prepare for an evaluation" },
        { ul: [
          "Write down specific situations instead of just “behaves badly.” For example: when they tend to withdraw from activities, which changes trigger strong reactions, and which prompts work best.",
          "Gather past health, language, learning, and developmental records, including teachers' observations and any earlier evaluations.",
          "List the person's interests, strengths, and the supports that work for them, so the evaluation isn't only a list of difficulties.",
          "Prepare your questions: what the evaluation involves, who will take part, how results will be explained, and where to find support next."
        ] },
        { callout: "If a child clearly loses language or other skills they had already gained, contact a medical professional as soon as possible." },
        { quote: "A diagnosis can help some people understand themselves and access services — but support shouldn't wait until every step of the process is done. Reasonable supports such as clear instructions, steady routines, communication tools, and sensory adjustments can be tried while waiting for an evaluation, based on real needs." }
      ]
    },
    sources: [
      { label: "美国疾控中心 Screening for Autism Spectrum Disorder 2025", url: "https://www.cdc.gov/autism/screening-diagnosis/index.html" },
      { label: "美国疾控中心 Clinical Screening for Autism Spectrum Disorder 2025", url: "https://www.cdc.gov/autism/hcp/diagnosis/screening.html" },
      { label: "美国疾控中心 Clinical Testing and Diagnosis for Autism Spectrum Disorder 2025", url: "https://www.cdc.gov/autism/index.html" },
      { label: "美国疾控中心 Signs and Symptoms of Autism Spectrum Disorder", url: "https://www.cdc.gov/autism/signs-symptoms/index.html" }
    ],
    note: NOTE
  });

  /* ---------- k03 ---------- */
  window.MB_ARTICLES.push({
    id: "k03",
    series: "knowledge",
    num: "03",
    img: "assets/k03.jpg",
    imgAlt: {
      zh: "感官友好教室里，学生可以选择耳机、安静座位、柔和灯光和不同工作区域。",
      en: "In a sensory-friendly classroom, students can choose headphones, quiet seating, soft lighting, and different work areas."
    },
    date: "2026-09",
    tag: { zh: "感官差异", en: "Sensory differences" },
    title: {
      zh: "当声音光线和触感变得太强：理解自闭症感官差异",
      en: "When Sound, Light, and Touch Become Too Much: Understanding Sensory Differences in Autism"
    },
    dek: {
      zh: "同一个教室、商场或聚会，对不同人的感官负荷可能完全不同。很多看似“挑剔”或“突然失控”的反应，背后其实是身体在努力保护自己。",
      en: "The same classroom, mall, or party can place completely different sensory demands on different people. Many reactions that look “picky” or like a “sudden loss of control” are really the body working hard to protect itself."
    },
    summary: {
      zh: "自闭症人士可能对感官刺激过度敏感，也可能反应不足或主动寻求刺激；最有效的调整来自观察、询问与个体化选择。",
      en: "Autistic people may be over-sensitive to sensory input, under-responsive to it, or actively seek it out. The most effective adjustments come from observing, asking, and offering individual choices."
    },
    keywords: {
      zh: ["感官差异", "环境调整", "自我调节"],
      en: ["Sensory differences", "Environmental adjustments", "Self-regulation"]
    },
    body: {
      zh: [
        { h: "感官差异可能是什么样" },
        { p: "人会通过视觉、听觉、嗅觉、味觉和触觉接收信息，也会感受平衡、身体位置、运动以及饥饿、疼痛、心跳等内部信号。自闭症人士可能对某些输入特别敏感，也可能不容易察觉，或需要主动寻找更强的刺激。一个人还可能在不同时间出现不同反应。" },
        { p: "例如，普通的荧光灯可能显得刺眼，背景聊天声可能和老师的声音一样突出，衣服标签可能持续刮痛皮肤；另一方面，有人可能喜欢来回走动、摇摆、按压或重复触摸某种材质，以帮助身体获得稳定感。这些反应并不是故意捣乱，也不等同于视力、听力或皮肤本身出现疾病。" },
        { h: "行为有时是在传递感官信息" },
        { p: "捂耳、眯眼、逃离、僵住、反复动作、拒绝某种食物或难以回应问题，都可能与感官负荷有关。当刺激持续累积，语言和执行功能会变得更难调用，有些人会出现崩溃，有些人则会变得非常安静、退缩或像“断线”一样无法行动。" },
        { p: "因此，看到强烈反应时，先降低要求和刺激，比立刻讲道理更有效。问自己：这里是不是太亮、太响、太拥挤？对方是否已经疲惫、疼痛或没有预期接下来会发生什么？" },
        { h: "从环境而不是意志力开始调整" },
        { ul: [
          "提前说明流程、时长和可能出现的声音或变化，让当事人有准备和选择。",
          "提供安静区域、可调光线、耳罩或耳机、帽子、舒适座位和短暂离开的机会，但不要强迫使用。",
          "减少同时说话的人数，把口头说明配上文字、图片或示范。",
          "允许安全的自我调节动作，例如踱步、摇摆、捏握物品或使用脚踏带。",
          "在饮食、服装和个人护理上区分偏好与健康风险，先理解质地、温度、气味和疼痛等具体因素。",
          "记录什么场景容易过载、哪些调整有效，并由本人参与更新方案。"
        ] },
        { p: "目标不是让一个人对所有刺激“忍耐到习惯”，而是帮助其识别身体信号、获得可用工具，并逐步扩大安全参与的范围。任何调整都应保留选择权，避免把安静空间变成惩罚或隔离。" },
        { h: "什么时候需要专业帮助" },
        { callout: "如果感官困难明显影响进食、睡眠、学习、出行、安全或医疗护理，可以向了解自闭症的职业治疗师、医生或相关专业人员咨询。若出现突然的感官变化、持续疼痛、听力或视力问题，也应先排除身体疾病。" },
        { quote: "好的支持会结合个人目标、环境条件和实际功能，而不是追求表面上“看起来正常”。当一个人能够在更少痛苦的情况下参与生活，调整就有了意义。" }
      ],
      en: [
        { h: "What sensory differences can look like" },
        { p: "We take in information through sight, hearing, smell, taste, and touch, and we also sense balance, body position, movement, and internal signals such as hunger, pain, and heartbeat. Autistic people may be especially sensitive to some kinds of input, may barely notice others, or may actively seek out stronger sensations. The same person can also react differently at different times." },
        { p: "For example, ordinary fluorescent lights may feel glaring, background chatter may stand out as much as the teacher's voice, and a clothing tag may keep scratching painfully against the skin. On the other hand, some people may like pacing, rocking, pressing, or repeatedly touching a certain texture to help their body feel steady. These responses aren't deliberate misbehavior, and they don't mean there is a problem with a person's eyes, ears, or skin." },
        { h: "Behavior can carry sensory information" },
        { p: "Covering ears, squinting, running away, freezing, repetitive movements, refusing certain foods, or struggling to answer questions can all be linked to sensory load. As input keeps building up, language and executive function become harder to reach. Some people have a meltdown; others become very quiet, withdrawn, or “switched off,” unable to act." },
        { p: "So when you see a strong reaction, lowering demands and stimulation first works better than reasoning with someone right away. Ask yourself: Is it too bright, too loud, or too crowded here? Is the person already tired, in pain, or unsure about what's going to happen next?" },
        { h: "Start with the environment, not willpower" },
        { ul: [
          "Explain the plan, how long it will take, and any sounds or changes that might happen, so the person can prepare and make choices.",
          "Offer quiet areas, adjustable lighting, earmuffs or headphones, hats, comfortable seating, and chances to step away briefly — but never force anyone to use them.",
          "Reduce how many people talk at once, and pair spoken instructions with text, pictures, or demonstrations.",
          "Allow safe self-regulating movements such as pacing, rocking, squeezing an object, or using a foot band.",
          "With food, clothing, and personal care, tell preferences apart from health risks, and first understand specific factors such as texture, temperature, smell, and pain.",
          "Keep notes on which situations tend to cause overload and which adjustments help, and update the plan together with the person."
        ] },
        { p: "The goal isn't to make someone “tough it out until they get used to” every kind of input. It's to help them recognize their body's signals, have tools they can use, and gradually widen the range of situations where they can take part safely. Every adjustment should keep the person's right to choose — a quiet space should never become a punishment or a way to isolate someone." },
        { h: "When to seek professional help" },
        { callout: "If sensory difficulties are clearly affecting eating, sleep, learning, getting around, safety, or medical care, consider consulting an occupational therapist, doctor, or other professional who understands autism. If there are sudden sensory changes, ongoing pain, or hearing or vision problems, physical health causes should be ruled out first." },
        { quote: "Good support weaves together a person's own goals, their environment, and how they actually function day to day — rather than chasing a surface-level “looking normal.” When someone can take part in life with less distress, the adjustment has done its job." }
      ]
    },
    sources: [
      { label: "英国国家自闭症协会 Autism and sensory processing", url: "https://www.autism.org.uk/advice-and-guidance/topics/sensory-differences/sensory-differences/all-audiences" },
      { label: "NICE Autism spectrum disorder in adults Recommendations", url: "https://www.nice.org.uk/guidance/cg142" },
      { label: "美国疾控中心 Signs and Symptoms of Autism Spectrum Disorder", url: "https://www.cdc.gov/autism/signs-symptoms/index.html" }
    ],
    note: NOTE
  });

  /* ---------- k04 ---------- */
  window.MB_ARTICLES.push({
    id: "k04",
    series: "knowledge",
    num: "04",
    img: "assets/k04.jpg",
    imgAlt: {
      zh: "圆桌交流中，青年分别使用平板图标、手势和口语表达，沟通伙伴耐心倾听。",
      en: "At a round-table conversation, young people express themselves with tablet symbols, gestures, and speech while communication partners listen patiently."
    },
    date: "2026-09",
    tag: { zh: "沟通支持", en: "Communication" },
    title: {
      zh: "沟通不只有说话：让每一种表达方式都被听见",
      en: "Communication Is More Than Speech: Making Sure Every Way of Expressing Yourself Is Heard"
    },
    dek: {
      zh: "口语只是沟通的一种形式。文字、手势、图片、设备、重复语言和行为都可能承载真实信息。好的沟通伙伴会为表达留出时间，也会认真回应。",
      en: "Speech is just one form of communication. Writing, gestures, pictures, devices, repeated phrases, and behavior can all carry real messages. A good communication partner makes time for expression — and responds to it seriously."
    },
    summary: {
      zh: "能否流利说话不能代表理解力。辅助与替代沟通可以补充或替代口语，并应在生活中的真实场景持续可用。",
      en: "Whether someone speaks fluently says nothing about how much they understand. Augmentative and alternative communication (AAC) can supplement or replace speech, and it should be available all the time in real-life settings."
    },
    keywords: {
      zh: ["沟通支持", "AAC", "尊重互动"],
      en: ["Communication support", "AAC", "Respectful interaction"]
    },
    body: {
      zh: [
        { h: "表达方式不同，不等于没有内容" },
        { p: "自闭症人士可能使用口语、打字、手势、眼神方向、表情、图片、书写、手语或语音输出设备沟通。有些人会重复听过的词句，也就是常说的回声式语言；这些词句可能用于请求、拒绝、调节情绪、维持互动或表达熟悉的意义，需要结合情境理解。" },
        { p: "一个人在安静环境里能够说话，不代表在拥挤、焦虑、疲劳或需要快速反应时仍能依赖口语。流利表达也不代表能够轻松理解暗示、反讽或复杂指令。判断沟通能力时，应关注对方是否能表达选择、需求、感受和观点，而不是只看说了多少字。" },
        { h: "什么是辅助与替代沟通" },
        { p: "辅助与替代沟通通常简称 AAC，范围从手势、手语和面部表情，到图片沟通板、字母板、纸本沟通册、平板应用和语音输出设备。它既可以替代口语，也可以在口语不够可靠时补充表达。" },
        { p: "美国言语语言听力协会指出，开始使用 AAC 不需要先达到某个年龄、认知、语言或运动门槛。已经会说话的人也可能需要 AAC，尤其是在高压力或复杂场景中。合适的系统应根据个人的视听、运动、语言、读写、感官和使用环境动态调整。" },
        { h: "成为更好的沟通伙伴" },
        { ul: [
          "先确认对方常用的沟通方式，并确保设备、沟通板或纸笔始终够得到、能充电、能带走。",
          "一次只给出一个主要问题或任务，使用具体、直接的语言，必要时配上文字或示范。",
          "提问后留出足够处理时间，不连续追问，也不要替对方把答案说完。",
          "不要强迫眼神接触。看向别处可能帮助一些人更好地听和组织语言。",
          "把拒绝当作有效沟通。无论“不要”是通过口语、推开、图标还是离开表达，都应先停下来理解。",
          "回应信息本身，而不是反复测试表达形式。若不确定，可以用尊重的方式复述并确认。"
        ] },
        { h: "一个日常场景可以怎样改变" },
        { p: "假设活动主持人问：“你现在想先画画还是先休息？”对方没有立即回答。低效做法是重复催促、要求看着自己，或直接替对方决定。更好的做法是把两个选项写下或给出图片，减少背景说话声，等待对方指、写、说或用设备选择，并接受“都不要”作为可能答案。" },
        { p: "AAC 不应该只在训练时间出现，也不应因为使用者暂时没有回应就被收走。沟通工具属于使用者，是参与教育、医疗、家庭和公共生活的基本条件。真正的目标不是让表达看起来更接近某一种标准，而是让信息能够被理解，让人能够影响与自己有关的决定。" }
      ],
      en: [
        { h: "A different way of expressing isn't an absence of meaning" },
        { p: "Autistic people may communicate through speech, typing, gestures, where they look, facial expressions, pictures, writing, sign language, or speech-generating devices. Some repeat words and phrases they've heard — often called echolalia. These phrases may be used to make a request, say no, regulate emotions, keep an interaction going, or express a familiar meaning, and they need to be understood in context." },
        { p: "Being able to speak in a quiet setting doesn't mean a person can still rely on speech when it's crowded, when they're anxious or tired, or when they need to respond quickly. Fluent speech also doesn't mean someone easily understands hints, sarcasm, or complex instructions. When thinking about someone's communication, focus on whether they can express choices, needs, feelings, and opinions — not on how many words they say." },
        { h: "What is augmentative and alternative communication?" },
        { p: "Augmentative and alternative communication, usually shortened to AAC, ranges from gestures, sign language, and facial expressions to picture boards, letter boards, paper communication books, tablet apps, and speech-generating devices. It can replace speech, or add to it when speech isn't reliable enough." },
        { p: "The American Speech-Language-Hearing Association (ASHA) notes that there is no age, cognitive, language, or motor threshold a person must reach before starting AAC. People who already speak may also need AAC, especially in high-pressure or complex situations. The right system should keep adapting to the person's vision and hearing, movement, language, literacy, sensory needs, and the settings where they use it." },
        { h: "Becoming a better communication partner" },
        { ul: [
          "Start by finding out how the person usually communicates, and make sure their device, communication board, or pen and paper is always within reach, charged, and able to go with them.",
          "Give one main question or task at a time, using concrete, direct language, with text or a demonstration when helpful.",
          "After asking a question, allow plenty of processing time. Don't keep pressing, and don't finish the answer for them.",
          "Don't insist on eye contact. Looking away can help some people listen and organize their words better.",
          "Treat refusal as valid communication. Whether “no” comes through speech, pushing something away, a symbol, or walking off, stop first and try to understand.",
          "Respond to the message itself instead of repeatedly testing how it was expressed. If you're not sure, respectfully repeat it back and check."
        ] },
        { h: "How an everyday moment can change" },
        { p: "Imagine an activity leader asks, “Would you like to draw first, or take a break first?” and the person doesn't answer right away. Unhelpful responses are to keep pushing, to demand they look at you, or to simply decide for them. A better approach is to write down the two options or show pictures, cut down background talk, wait for the person to point, write, speak, or choose with their device — and accept “neither” as a possible answer." },
        { p: "AAC shouldn't appear only during practice sessions, and it should never be taken away because the person doesn't respond for a moment. A communication tool belongs to its user; it is a basic condition for taking part in education, healthcare, family, and public life. The real goal isn't to make someone's expression look closer to one particular standard — it's to make sure their message is understood and that they can shape the decisions that affect them." }
      ]
    },
    sources: [
      { label: "美国言语语言听力协会 Autism and Autism Spectrum Disorder", url: "https://www.asha.org/public/speech/disorders/autism/" },
      { label: "美国言语语言听力协会 Augmentative and Alternative Communication", url: "https://www.asha.org/public/speech/disorders/aac/" },
      { label: "美国国家耳聋及其他沟通障碍研究所 Autism Spectrum Disorder Communication Problems in Children", url: "https://www.nidcd.nih.gov/health/autism-spectrum-disorder-communication-problems-children" }
    ],
    note: NOTE
  });

  /* ---------- k05 ---------- */
  window.MB_ARTICLES.push({
    id: "k05",
    series: "knowledge",
    num: "05",
    img: "assets/k05.jpg",
    imgAlt: {
      zh: "高中生在过渡规划会议中展示自己的大学、工作与生活选择，教师和家人认真倾听。",
      en: "At a transition planning meeting, a high school student presents their own college, work, and life choices while teachers and family listen closely."
    },
    date: "2026-09",
    tag: { zh: "过渡规划", en: "Transition planning" },
    title: {
      zh: "从高中走向大学与工作：过渡规划要从本人目标出发",
      en: "From High School to College and Work: Transition Planning Starts With the Student's Own Goals"
    },
    dek: {
      zh: "成年不是服务突然结束的分界线。越早把兴趣、能力、支持需要和真实体验放进规划，青少年越有机会为自己的下一阶段作出知情选择。",
      en: "Adulthood shouldn't be a cliff where services suddenly stop. The earlier interests, abilities, support needs, and real-world experiences become part of the plan, the better the chance young people have to make informed choices about their next stage."
    },
    summary: {
      zh: "有效的过渡规划由学生主动参与，覆盖继续教育、就业、独立生活和社区参与，并把目标拆成可练习的小步骤。",
      en: "Effective transition planning actively involves the student, covers further education, employment, independent living, and community participation, and breaks goals into small steps that can be practiced."
    },
    keywords: {
      zh: ["青少年", "过渡规划", "自我倡导"],
      en: ["Teens", "Transition planning", "Self-advocacy"]
    },
    body: {
      zh: [
        { h: "过渡规划不只是选大学或找工作" },
        { p: "从高中走向成年生活，会同时出现课程、工作、交通、金钱、医疗、居住、社交和日常安排等变化。对依赖熟悉流程、需要更多处理时间或感官调整的青少年来说，变化集中发生可能带来很大压力。规划的价值，是把未来变成可以理解、体验和逐步修正的具体任务。" },
        { p: "美国疾控中心建议尽早思考成年过渡，并在中学阶段建立教育过渡计划。在美国公立学校体系中，联邦 IDEA 要求最迟从学生满 16 岁时生效的个别化教育计划开始纳入可衡量的中学后目标和过渡服务；一些州会要求更早开始。其他国家和地区的制度不同，但“提前、持续、由本人参与”是可以通用的原则。" },
        { h: "让学生坐在计划的中心" },
        { p: "美国教育部的过渡指南强调，目标应建立在学生的优势、偏好、兴趣和实际需要上，学生应积极参与自己的计划。成年人可以提供信息、体验和安全支持，但不应仅凭“比较现实”替学生缩小选择。" },
        { p: "学生主导不等于把所有责任交给学生。有人需要图片选项、提前收到议程、用文字表达、分几次讨论，或由信任的人协助理解后果。支持性决策的重点，是提供足够帮助，让本人仍然能够表达偏好、设定目标并改变主意。" },
        { h: "把远期愿望变成真实经验" },
        { ul: [
          "教育：参观不同类型的大学、社区学院或职业项目，了解课程节奏、住宿、无障碍服务和申请要求。",
          "就业：从兴趣访谈、岗位观察、短期志愿服务、实习或带教任务开始，记录什么环境和任务更合适。",
          "自我倡导：练习介绍自己的优势、困难和有效支持，参与 IEP 或其他计划会议，学习提出合理调整。",
          "生活技能：在真实情境中练习交通、预约、购物、做饭、时间安排、休息和求助，而不是一次性考试。",
          "健康与安全：逐步建立自己的健康资料、药物清单、紧急联系人和就诊沟通方式。"
        ] },
        { p: "美国职业康复体系的过渡前服务包括职业探索咨询、工作本位学习、高等教育机会咨询、职场准备和自我倡导训练。好的体验应发生在尽可能融合的真实环境中，并在事后询问学生：什么有效、什么太难、下次需要怎样调整。" },
        { h: "高中之后，支持方式会变化" },
        { p: "在美国，高中阶段的 IDEA 权利不会原样延伸到大学。进入高等教育后，学生通常需要主动联系无障碍或残障支持部门，提供所需材料并申请调整；学校也不一定会自动联系家长。提前练习解释自己的需要、保存评估和支持记录、了解隐私与披露选择，会让转换更平稳。" },
        { p: "工作场景同样需要具体化。比起笼统写“社交能力不足”，更有帮助的表述可能是：书面任务说明比临时口头变更更有效；开放办公区噪声会显著降低专注；提前知道会议主题能提高参与质量。合理调整应围绕岗位核心任务与个人需要讨论。" },
        { h: "现在就能开始的五件小事" },
        { ol: [
          "由学生选一个未来六个月最想尝试的目标。",
          "安排一次真实参观、岗位体验或与在读学生的交流。",
          "写一页“我如何学习和沟通最有效”的个人说明。",
          "列出现有支持、负责人、申请期限和高中毕业后可能中断的服务。",
          "每次体验后由学生决定保留、调整或放弃什么。"
        ] },
        { quote: "过渡规划不是替一个人设计标准答案，而是帮助其拥有更多可行选择。高期待与现实支持并不矛盾：我们既要相信青少年能够成长，也要诚实准备其实现目标所需的工具、时间和伙伴。" }
      ],
      en: [
        { h: "Transition planning is more than picking a college or finding a job" },
        { p: "Moving from high school into adult life brings changes all at once — in classes, work, transportation, money, healthcare, housing, social life, and daily routines. For teens who rely on familiar routines, need more processing time, or need sensory adjustments, so much change at the same time can be very stressful. The value of planning is that it turns the future into concrete tasks that can be understood, tried out, and adjusted step by step." },
        { p: "The CDC recommends thinking about the transition to adulthood early and building an educational transition plan during the secondary-school years. In US public schools, the federal Individuals with Disabilities Education Act (IDEA) requires measurable postsecondary goals and transition services to be included no later than the first Individualized Education Program (IEP) in effect when the student turns 16; some states require this to start earlier. Systems differ in other countries and regions, but “start early, keep it going, and involve the person” is a principle that applies everywhere." },
        { h: "Put the student at the center of the plan" },
        { p: "The US Department of Education's transition guide emphasizes that goals should be built on the student's strengths, preferences, interests, and real needs, and that students should take an active part in their own plans. Adults can offer information, experiences, and safe support, but they shouldn't narrow a student's options just because something seems “more realistic.”" },
        { p: "Student-led doesn't mean handing all the responsibility to the student. Some people need picture-based options, the agenda in advance, a chance to respond in writing, several shorter discussions, or a trusted person to help them understand the consequences. The heart of supported decision-making is giving enough help that the person can still express preferences, set goals, and change their mind." },
        { h: "Turn long-term hopes into real experiences" },
        { ul: [
          "Education: Visit different kinds of colleges, community colleges, or vocational programs to learn about course pace, housing, disability services, and application requirements.",
          "Employment: Start with informational interviews, job shadowing, short-term volunteering, internships, or mentored tasks, and keep notes on which settings and tasks fit best.",
          "Self-advocacy: Practice describing your strengths, challenges, and the supports that work; take part in IEP or other planning meetings; and learn to ask for reasonable accommodations.",
          "Life skills: Practice getting around, making appointments, shopping, cooking, managing time, resting, and asking for help in real situations — not as a one-time test.",
          "Health and safety: Gradually build your own health records, medication list, emergency contacts, and a way to communicate at medical appointments."
        ] },
        { p: "Pre-employment transition services in the US vocational rehabilitation system include job exploration counseling, work-based learning, counseling on postsecondary education options, workplace readiness training, and self-advocacy instruction. Good experiences should happen in real, inclusive settings as much as possible — and afterward, the student should be asked what worked, what was too hard, and what to adjust next time." },
        { h: "After high school, support works differently" },
        { p: "In the US, IDEA rights from high school don't carry over to college in the same form. In higher education, students usually need to contact the disability or accessibility services office themselves, provide the required documentation, and request accommodations — and the college won't necessarily contact parents. Practicing how to explain your needs ahead of time, keeping evaluation and support records, and understanding your privacy and disclosure options can make the transition smoother." },
        { p: "The workplace needs the same kind of specifics. Instead of a vague note like “poor social skills,” more helpful descriptions might be: written task instructions work better than last-minute verbal changes; noise in an open-plan office seriously reduces focus; knowing the meeting topic in advance improves participation. Reasonable accommodations should be discussed in terms of the job's core tasks and the person's needs." },
        { h: "Five small things you can start now" },
        { ol: [
          "Have the student choose one goal they most want to try in the next six months.",
          "Arrange one real visit, job experience, or conversation with a current student.",
          "Write a one-page personal profile: “How I learn and communicate best.”",
          "List current supports, who is responsible, application deadlines, and services that may stop after high school graduation.",
          "After each experience, let the student decide what to keep, adjust, or drop."
        ] },
        { quote: "Transition planning isn't about designing a standard answer for someone — it's about helping them have more real options. High expectations and practical support aren't in conflict: we can believe that young people will grow, and still honestly prepare the tools, time, and people they need to reach their goals." }
      ]
    },
    sources: [
      { label: "美国疾控中心 Autism Spectrum Disorder in Teenagers and Adults 2025", url: "https://www.cdc.gov/autism/index.html" },
      { label: "美国疾控中心 Living with Autism Spectrum Disorder 2025", url: "https://www.cdc.gov/autism/index.html" },
      { label: "美国教育部 A Transition Guide to Postsecondary Education and Employment 2020", url: "https://www2.ed.gov/about/offices/list/osers/transition/products/postsecondary-transition-guide-2020.pdf" },
      { label: "美国教育部 Coordinating Transition Services and Postsecondary Access 2025", url: "https://www.ed.gov/" }
    ],
    note: NOTE
  });

  /* ---------- k06 ---------- */
  window.MB_ARTICLES.push({
    id: "k06",
    series: "knowledge",
    num: "06",
    img: "assets/k06.jpg", imgAlt: { zh: "自闭症人士在明亮的工作室里各自投入擅长的事：绘画、编程、弹钢琴、照料植物。", en: "Autistic people in a sunny studio, each absorbed in a strength: painting, coding, piano, tending plants." },
    date: "2026-09",
    tag: { zh: "基础认识", en: "Foundations" },
    title: { zh: "认识自闭症", en: "Understanding Autism" },
    summary: {
      zh: "自闭症谱系障碍是一种神经与发育差异。",
      en: "Autism spectrum disorder is a neurological and developmental difference."
    },
    body: {
      zh: [
        { p: "自闭症谱系障碍是一种神经与发育差异。相关特点通常在生命早期出现，但有些人直到年龄较大时才得到识别。自闭症人士可能在社交沟通、感官处理、兴趣和日常规律方面表现出不同特点。" },
        { p: "一些人会使用口语交流，另一些人可能使用图片、文字、手势或辅助沟通设备。有些人能够独立生活，有些人需要持续支持。一个人的沟通方式、学习方式或支持需求不能简单代表其智力、价值或未来潜力。" },
        { callout: "专业评估通常关注一个人的行为和发育情况。单个表现、网络测试或一张清单不能确认诊断。如果家庭对孩子的发育有疑问，应尽早向合格的医疗或教育专业人员咨询。" }
      ],
      en: [
        { p: "Autism spectrum disorder is a neurological and developmental difference. Its characteristics usually appear early in life, though some people aren't identified until they're older. Autistic people may show differences in social communication, sensory processing, interests, and daily routines." },
        { p: "Some people communicate through speech; others may use pictures, writing, gestures, or assistive communication devices. Some live independently, while others need ongoing support. How a person communicates, how they learn, or what support they need cannot simply stand in for their intelligence, their worth, or their future potential." },
        { callout: "A professional evaluation usually looks at a person's behavior and development. A single trait, an online test, or a checklist cannot confirm a diagnosis. If a family has questions about a child's development, they should consult a qualified medical or education professional as early as possible." }
      ]
    },
    sources: [
      { label: "NIMH Autism Spectrum Disorder 基础定义和诊断说明", url: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd" }
    ],
    note: NOTE
  });

  /* ---------- k07 ---------- */
  window.MB_ARTICLES.push({
    id: "k07",
    series: "knowledge",
    num: "07",
    img: "assets/k07.jpg", imgAlt: { zh: "言语治疗师和职业治疗师与一位青少年及家长一起使用图片卡和平衡垫。", en: "A speech therapist and an occupational therapist work with a young person and parent using picture cards and a balance cushion." },
    date: "2026-09",
    tag: { zh: "支持方式", en: "Support approaches" },
    title: { zh: "个体差异与支持", en: "Individual Differences and Support" },
    summary: {
      zh: "没有一种支持方式适合所有自闭症人士。",
      en: "No single kind of support is right for every autistic person."
    },
    body: {
      zh: [
        { p: "没有一种支持方式适合所有自闭症人士。有效支持应根据个人的沟通方式、感官需要、健康状况、生活目标和家庭环境决定，并随着年龄和需要变化进行调整。" },
        { p: "行为、心理、教育、职业、物理和言语语言服务可能帮助部分自闭症人士发展沟通、生活和独立技能。选择服务时，应了解提供者的资质、目标、方法、费用、证据和评估方式。" },
        { quote: "支持的目标不应是把一个人变得“看起来正常”，而应帮助其安全沟通、参与学习与生活、发展优势，并获得符合自身意愿的支持。" }
      ],
      en: [
        { p: "No single kind of support is right for every autistic person. Effective support should be shaped by the individual's way of communicating, sensory needs, health, life goals, and family situation, and should be adjusted as they grow and their needs change." },
        { p: "Behavioral, psychological, educational, vocational, physical, and speech-language services may help some autistic people build communication, daily-living, and independence skills. When choosing a service, find out about the provider's qualifications, goals, methods, costs, evidence, and how progress is evaluated." },
        { quote: "The goal of support shouldn't be to make someone “look normal.” It should be to help them communicate safely, take part in learning and life, build on their strengths, and receive support that matches their own wishes." }
      ]
    },
    sources: [
      { label: "NIMH Autism Spectrum Disorder 服务类型和个体化原则", url: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd" }
    ],
    note: NOTE
  });

  /* ---------- k08 ---------- */
  window.MB_ARTICLES.push({
    id: "k08",
    series: "knowledge",
    num: "08",
    img: "assets/k08.jpg", imgAlt: { zh: "一位家长用放大镜仔细查看产品包装上的宣传，身旁是笔记本电脑和孩子。", en: "A parent checks the claims on a product box with a magnifying glass, beside a laptop and their teenager." },
    date: "2026-09",
    tag: { zh: "事实核验", en: "Fact check" },
    title: { zh: "识别不可靠宣传", en: "Spotting Unreliable Claims" },
    summary: {
      zh: "购买与自闭症相关的产品或服务前，应警惕“治愈自闭症”“快速见效”“人人适用”“无需专业评估”等承诺。",
      en: "Before buying any autism-related product or service, be wary of promises like “cures autism,” “fast results,” “works for everyone,” or “no professional evaluation needed.”"
    },
    body: {
      zh: [
        { callout: "购买与自闭症相关的产品或服务前，应警惕“治愈自闭症”“快速见效”“人人适用”“无需专业评估”等承诺。美国食品药品监督管理局提醒，声称能够治疗或治愈自闭症但未经证实的产品会误导消费者，也可能延误合适的医疗支持。" },
        { p: "个人经历可以帮助人们相互理解，但不能替代科学证据。即使一位顾客真诚描述了自己的体验，商家也不能据此作出未经证实的健康功效宣传。" }
      ],
      en: [
        { callout: "Before buying any autism-related product or service, be wary of promises like “cures autism,” “fast results,” “works for everyone,” or “no professional evaluation needed.” The US Food and Drug Administration (FDA) warns that unproven products claiming to treat or cure autism mislead consumers and may delay appropriate medical support." },
        { p: "Personal stories can help people understand one another, but they can't replace scientific evidence. Even when a customer sincerely describes their own experience, a seller cannot use it to make unproven health claims." }
      ]
    },
    sources: [
      { label: "FDA Medication Health Fraud for Specific Diseases and Conditions 自闭症相关产品警示", url: "https://www.fda.gov/consumers/health-fraud-scams" }
    ],
    note: NOTE
  });
})();
