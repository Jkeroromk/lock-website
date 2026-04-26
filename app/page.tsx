'use client';

import React, { useState, useEffect, useRef } from 'react';

// i18n
const COPY = {
  en: {
    nav: { features: 'Features', screens: 'Screens', social: 'Community', faq: 'FAQ' },
    download: 'Download',
    hero: {
      pill: 'AI-Powered Nutrition Tracking',
      title1: 'Lock in.',
      title2: 'Every meal.',
      sub: 'Snap a photo. Lock gives you instant calorie and macro breakdowns powered by AI — and the social accountability to actually stay consistent.',
      cta: 'Download on the App Store',
      cta2: 'See how it works',
      meta: 'Free · iPhone · No manual logging',
    },
    stats: [
      { num: '1,000+', lbl: 'Active users' },
      { num: '50K+',   lbl: 'Meals analysed' },
      { num: '4.8',    unit: '★', lbl: 'App Store rating' },
      { num: '< 3', unit: 's', lbl: 'Avg. scan time' },
    ],
    showcase: {
      eyebrow: 'Inside the app',
      title: 'Everything in one place. Designed to feel inevitable.',
      sub: 'A focused experience for people who want to stop overthinking food.',
      tabs: [
        { t: 'Today', d: 'Calories, hydration, steps, energy — your day at a glance, calmly composed.', img: '/assets/screen-today.webp' },
        { t: 'Log',   d: 'Photo, label, or barcode. Three taps from food to logged macros.', img: '/assets/screen-log.webp' },
        { t: 'Calendar', d: 'Weekly trends and macro breakdowns, with AI summaries on demand.', img: '/assets/screen-nutrition.webp' },
        { t: 'Social',  d: 'Friends leaderboard. Streaks. Real accountability — not vanity metrics.', img: '/assets/screen-leaderboard.webp' },
        { t: 'Moments', d: 'Share meals and progress with the people who keep you honest.', img: '/assets/screen-moments.webp' },
      ],
    },
    features: {
      eyebrow: 'Features',
      title: 'Built around how you actually eat.',
      list: [
        { title: 'Snap to track', desc: 'Point at any meal. Get calories, protein, carbs, fat — in seconds. No menus, no databases, no guesswork.', span: 6, kind: 'snap' },
        { title: 'Macro intelligence', desc: 'Every entry breaks down into protein, carbs, and fat — with weekly trends and AI-generated summaries.', span: 6, kind: 'macro' },
        { title: 'Streaks that mean something', desc: 'Log daily. Watch the chain build. Lose it once and you start over.', span: 4, kind: 'streak' },
        { title: 'Friends leaderboard', desc: 'Compete on consistency, not calories.', span: 4, kind: 'lb' },
        { title: 'Apple Health sync', desc: 'Steps, energy, workouts — auto-imported.', span: 4, kind: 'health' },
      ],
    },
    social: {
      eyebrow: 'Community',
      title: 'You don\u2019t lock in alone.',
      sub: 'The hardest part of nutrition isn\u2019t the math. It\u2019s showing up on day 47. Lock\u2019s social layer turns consistency into something you do with friends — not against an app.',
      bullets: [
        'Daily streaks across your friend group',
        'Friends leaderboard, refreshed daily',
        'Moments feed for meals and progress',
        'Challenges that make habits stick',
      ],
    },
    testi: {
      eyebrow: 'Reviews',
      title: 'People who locked in.',
      items: [
        { q: 'I\u2019ve tried six calorie apps. Lock is the first one I actually opened on day 30. The photo scan removes every excuse.', n: 'Maya R.', h: '@mayalifts', av: 'M' },
        { q: 'My roommate and I check the leaderboard every morning. Down 8lb in a month and I\u2019m not even mad about it.', n: 'Daniel K.', h: '@dkim_', av: 'D' },
        { q: 'Finally a tracker that doesn\u2019t feel like a spreadsheet. The macro breakdown is genuinely useful.', n: 'Sara L.', h: '@saralifts', av: 'S' },
      ],
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Things people ask.',
      items: [
        { q: 'How accurate is the photo recognition?', a: 'Lock uses a vision model fine-tuned on hundreds of thousands of meal photos. For typical home and restaurant meals it estimates within ~10% of actual macros — and you can always fine-tune any entry by hand.' },
        { q: 'Is Lock free?', a: 'Yes — the core experience is free, including unlimited photo scans, daily logging, streaks, and the social leaderboard. Lock Pro unlocks deeper AI summaries and weekly coaching.' },
        { q: 'Does it work without internet?', a: 'You can log meals offline; photo recognition runs in the cloud, so it syncs when you\u2019re back online.' },
        { q: 'Will my friends see what I eat?', a: 'Only if you choose to share. Streaks and total calories appear on the leaderboard; meal photos only show up in Moments when you post them.' },
        { q: 'What\u2019s on the roadmap?', a: 'Android, Apple Watch logging, restaurant menu scanning, and group challenges with custom rules — in that order.' },
      ],
    },
    cta: { title1: 'Ready to', title2: 'lock in?', sub: 'Free to download. Three taps to your first logged meal.', btn: 'Download on the App Store' },
    footer: {
      tag: 'AI nutrition tracking, built for people who want to stop thinking about food.',
      cols: [
        { h: 'Product', items: [['Features', '#features'], ['Screens', '#screens'], ['Community', '#community'], ['FAQ', '#faq']] },
        { h: 'Company', items: [['Support', '/support'], ['Privacy', '/privacy'], ['Jkeroro.com', 'https://jkeroro.com']] },
        { h: 'Get Lock', items: [['App Store', 'https://apps.apple.com/app/id6762630080']] },
      ],
      rights: '© 2026 Lock. All rights reserved.',
    },
  },
  zh: {
    nav: { features: '功能', screens: '界面', social: '社区', faq: '常见问题' },
    download: '下载',
    hero: {
      pill: 'AI 智能营养追踪',
      title1: 'Lock in.',
      title2: '每一餐。',
      sub: '拍一张照,Lock 就用 AI 给你即时的卡路里和宏量营养拆解 —— 加上让你真的能坚持下来的社交动力。',
      cta: '从 App Store 下载',
      cta2: '看看它怎么用',
      meta: '免费 · iPhone · 告别手动记录',
    },
    stats: [
      { num: '1,000+', lbl: '活跃用户' },
      { num: '50K+',   lbl: '已识别餐食' },
      { num: '4.8',    unit: '★', lbl: 'App Store 评分' },
      { num: '< 3', unit: '秒', lbl: '平均识别时间' },
    ],
    showcase: {
      eyebrow: '走进 App',
      title: '一切刚刚好,不多不少。',
      sub: '专注的体验,献给不想再为吃什么内耗的人。',
      tabs: [
        { t: '今日', d: '卡路里、水、步数、能量 —— 一目了然,平静而克制。', img: '/assets/screen-today.webp' },
        { t: '记录', d: '拍照、营养标签、条形码。三步,从食物到完整记录。', img: '/assets/screen-log.webp' },
        { t: '日历', d: '每周趋势和宏量拆解,随时调用 AI 周报。', img: '/assets/screen-nutrition.webp' },
        { t: '社交', d: '好友排行榜、连胜 streak,真正的他律,不是虚荣指标。', img: '/assets/screen-leaderboard.webp' },
        { t: '动态', d: '把餐食和进度,分享给那些会督促你的人。', img: '/assets/screen-moments.webp' },
      ],
    },
    features: {
      eyebrow: '功能',
      title: '围绕你真实的吃饭习惯而设计。',
      list: [
        { title: '拍照即记录', desc: '对准任意一餐拍下,几秒内得到卡路里、蛋白、碳水、脂肪。没有菜单、没有数据库、不用猜。', span: 6, kind: 'snap' },
        { title: '宏量营养智能', desc: '每一餐都拆解成蛋白 / 碳水 / 脂肪,配合每周趋势和 AI 自动生成的总结。', span: 6, kind: 'macro' },
        { title: '有意义的连胜', desc: '每天打卡,链条不断。断一次,从头开始。', span: 4, kind: 'streak' },
        { title: '好友排行榜', desc: '比的是坚持,不是少吃。', span: 4, kind: 'lb' },
        { title: 'Apple 健康同步', desc: '步数、能量、训练 —— 自动导入。', span: 4, kind: 'health' },
      ],
    },
    social: {
      eyebrow: '社区',
      title: '你不是一个人在 Lock in。',
      sub: '营养管理最难的不是算账,是第 47 天还能打开 App。Lock 的社交层把「坚持」变成你和朋友一起做的事,而不是你和一个 App 较劲。',
      bullets: ['和朋友一起的每日 streak', '每天刷新的好友排行榜', '餐食与进度的 Moments 动态', '能让习惯真正成型的挑战'],
    },
    testi: {
      eyebrow: '用户评价',
      title: '真正 lock in 的人。',
      items: [
        { q: '试过六个卡路里 App,Lock 是第一个我用到第 30 天还在打开的。拍照识别让我没有任何借口。', n: 'Maya R.', h: '@mayalifts', av: 'M' },
        { q: '我和室友每天早上都看一眼排行榜。一个月瘦了 8 磅,而且过程一点也不痛苦。', n: 'Daniel K.', h: '@dkim_', av: 'D' },
        { q: '终于有一个不像 Excel 的记录 App。宏量拆解是真有用,不是装样子。', n: 'Sara L.', h: '@saralifts', av: 'S' },
      ],
    },
    faq: {
      eyebrow: '问题',
      title: '大家常问的。',
      items: [
        { q: '拍照识别有多准?', a: 'Lock 使用了在数十万张餐食图上微调的视觉模型。常见家庭餐和餐厅菜肴的宏量营养误差通常在 10% 以内,你也可以随时手动微调任意一条记录。' },
        { q: 'Lock 收费吗?', a: '核心体验完全免费 —— 拍照识别、每日记录、streak、好友排行榜全部免费。Lock Pro 提供更深度的 AI 周报和教练建议。' },
        { q: '没网能用吗?', a: '可以离线记录,拍照识别需要联网,联网后会自动同步。' },
        { q: '朋友会看到我吃什么吗?', a: '只有你主动分享才会。排行榜上只显示连胜和总卡路里,餐食照片只在你发到 Moments 后才会被看到。' },
        { q: '后续会有什么更新?', a: 'Android、Apple Watch 记录、餐厅菜单扫描、自定义规则的群组挑战 —— 就按这个顺序。' },
      ],
    },
    cta: { title1: '准备好', title2: 'lock in 了吗?', sub: '免费下载。三步完成第一餐记录。', btn: '从 App Store 下载' },
    footer: {
      tag: 'AI 营养追踪,献给不想再为食物内耗的人。',
      cols: [
        { h: '产品', items: [['功能', '#features'], ['界面', '#screens'], ['社区', '#community'], ['常见问题', '#faq']] },
        { h: '公司', items: [['支持', '/support'], ['隐私', '/privacy'], ['Jkeroro.com', 'https://jkeroro.com']] },
        { h: '获取 Lock', items: [['App Store', 'https://apps.apple.com/app/id6762630080']] },
      ],
      rights: '© 2026 Lock. 保留所有权利。',
    },
  },
};

const APPSTORE_URL = 'https://apps.apple.com/app/id6762630080';

// Icon component
const Icon = ({ name, size = 18 }) => {
  const paths = {
    apple: <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />,
    arrow: <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    plus:  <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />,
    cam:   <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8.5A2.5 2.5 0 015.5 6h2L9 4h6l1.5 2h2A2.5 2.5 0 0121 8.5v9A2.5 2.5 0 0118.5 20h-13A2.5 2.5 0 013 17.5z"/><circle cx="12" cy="13" r="3.5"/></g>,
    chart: <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V8M10 20V4M16 20v-8M22 20H2"/></g>,
    flame: <path d="M12 2s-1 4-4 7c-3 3-3 6-3 7a7 7 0 0014 0c0-3-2-5-3-7-1.5-3-4-7-4-7z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />,
    trophy: <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4h8v5a4 4 0 01-8 0z"/><path d="M8 4H5v2a3 3 0 003 3M16 4h3v2a3 3 0 01-3 3M9 14h6l1 5H8z"/></g>,
    heart: <path d="M12 21s-7-4.5-9.5-9A5 5 0 0112 7a5 5 0 019.5 5C19 16.5 12 21 12 21z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />,
    star: <path d="M12 2l3 6.5 7 .9-5 4.7 1.5 7-6.5-3.7L5.5 21 7 14l-5-4.7 7-.9z" fill="currentColor" />,
    chev: <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      {paths[name]}
    </svg>
  );
};

// Phone component
const Phone = ({ src, size = '', children }) => (
  <div className={`phone ${size}`}>
    <div className="phone-screen">
      {src && <img src={src} alt="" />}
      {children}
    </div>
  </div>
);

// CountUp component
const CountUp = ({ value, unit }) => {
  const [shown, setShown] = useState(value);
  const ref = useRef(null);
  useEffect(() => {
    const match = String(value).match(/(\d[\d,.]*)/);
    if (!match) return;
    const finalNum = parseFloat(match[1].replace(/,/g, ''));
    const prefix = String(value).slice(0, match.index);
    const suffix = String(value).slice(match.index + match[1].length);
    const decimals = (match[1].split('.')[1] || '').length;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (now) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          const cur = finalNum * eased;
          const formatted = decimals > 0
            ? cur.toFixed(decimals)
            : Math.round(cur).toLocaleString('en-US');
          setShown(prefix + formatted + suffix);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return (
    <span ref={ref} className="tnum">
      {shown}{unit && <span className="unit">{unit}</span>}
    </span>
  );
};

// FadeUp component
const FadeUp = ({ children, delay = 0, className = '', as = 'div', ...rest }) => {
  const [inView, setInView] = useState(false);
  const ref = React.useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`fade-up ${delay ? 'delay-' + delay : ''} ${inView ? 'in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

// Main App
export default function Home() {
  const [lang, setLang] = useState('en');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('lock-lang');
    if (saved) setLang(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem('lock-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const saved = localStorage.getItem('lock-theme');
    if (saved === 'light') setDark(false);
    else setDark(true);
  }, []);
  useEffect(() => {
    localStorage.setItem('lock-theme', dark ? 'dark' : 'light');
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  const t = COPY[lang];

  return (
    <>
      <Nav lang={lang} setLang={setLang} dark={dark} setDark={setDark} t={t} />
      <Hero t={t} />
      <Stats t={t} />
      <Showcase t={t} />
      <Features t={t} />
      <Social t={t} />
      <Testi t={t} />
      <FAQ t={t} />
      <FinalCTA t={t} />
      <Footer t={t} lang={lang} setLang={setLang} />
    </>
  );
}

// Nav component
const Nav = ({ lang, setLang, dark, setDark, t }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo">
        <span className="nav-logo-mark">L</span>
        Lock
      </a>
      <div className="nav-links">
        <a href="#features">{t.nav.features}</a>
        <a href="#screens">{t.nav.screens}</a>
        <a href="#community">{t.nav.social}</a>
        <a href="#faq">{t.nav.faq}</a>
      </div>
      <div className="nav-actions">
        <button
          className="lang-toggle"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
          style={{width: 32, padding: 0, display: 'inline-flex', justifyContent: 'center'}}
          title={dark ? 'Light mode' : 'Dark mode'}
        >
          {dark ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          aria-label="Toggle language"
        >
          {lang === 'en' ? '中文' : 'EN'}
        </button>
        <a href={APPSTORE_URL} className="btn btn-primary btn-sm">
          <Icon name="apple" size={14} />
          {t.download}
        </a>
      </div>
    </nav>
  );
};

// Hero component
const Hero = ({ t }) => {
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div>
          <FadeUp className="hero-pill">{t.hero.pill}</FadeUp>
          <FadeUp delay={1} as="h1" className="h-display">
            {t.hero.title1}<br />
            <span className="dim">{t.hero.title2}</span>
          </FadeUp>
          <FadeUp delay={2} className="hero-sub body-lg">{t.hero.sub}</FadeUp>
          <FadeUp delay={3} className="hero-cta">
            <a href={APPSTORE_URL} className="btn btn-primary btn-lg">
              <Icon name="apple" size={16} />
              {t.hero.cta}
            </a>
            <a href="#screens" className="btn btn-ghost btn-lg">
              {t.hero.cta2}
              <Icon name="arrow" size={16} />
            </a>
          </FadeUp>
          <FadeUp delay={4} className="hero-meta">
            <span className="rating-stars">
              {[0,1,2,3,4].map(i => <Icon key={i} name="star" size={13} />)}
            </span>
            <span>{t.hero.meta}</span>
          </FadeUp>
        </div>

        <FadeUp delay={2} className="hero-visual">
          <div className="scan-stack">
            <div className="phone phone-lg" style={{position: 'relative'}}>
              <div className="phone-screen">
                <img src="/assets/screen-today.webp" alt="Lock app today screen" />
                <div className="scan-beam" />
              </div>
              <div className="scan-corner tl" />
              <div className="scan-corner tr" />
              <div className="scan-corner bl" />
              <div className="scan-corner br" />
            </div>
            {/* floating macro cards */}
            <div className="scan-card scan-card-1">
              <span className="dot" style={{background: 'var(--c-protein)'}} />
              <span><span className="num tnum">20g</span> <span className="label">Protein</span></span>
            </div>
            <div className="scan-card scan-card-2">
              <span className="dot" style={{background: 'var(--c-carbs)'}} />
              <span><span className="num tnum">95g</span> <span className="label">Carbs</span></span>
            </div>
            <div className="scan-card scan-card-3">
              <span className="dot" style={{background: 'var(--c-fat)'}} />
              <span><span className="num tnum">22g</span> <span className="label">Fat</span></span>
            </div>
            <div className="scan-card scan-card-4">
              <span className="dot" style={{background: '#0a0a0a'}} />
              <span><span className="num tnum">650</span> <span className="label">kcal</span></span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

// Stats component
const Stats = ({ t }) => (
  <div className="divider-row">
    <div className="stats-row">
      {t.stats.map((s, i) => (
        <FadeUp key={i} delay={Math.min(i, 4)} className="stat">
          <div className="num"><CountUp value={s.num} unit={s.unit} /></div>
          <div className="lbl">{s.lbl}</div>
        </FadeUp>
      ))}
    </div>
  </div>
);

// Showcase component
const Showcase = ({ t }) => {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(performance.now());
  const tabs = t.showcase.tabs;

  useEffect(() => {
    let raf;
    const tick = (now) => {
      const elapsed = now - startRef.current;
      const dur = 5200;
      const p = Math.min(100, (elapsed / dur) * 100);
      setProgress(p);
      if (elapsed >= dur) {
        startRef.current = now;
        setIdx(i => (i + 1) % tabs.length);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [tabs.length]);

  const pickTab = (i) => {
    setIdx(i);
    startRef.current = performance.now();
    setProgress(0);
  };

  return (
    <section id="screens" className="section-tight">
      <div className="showcase">
        <FadeUp className="section-head">
          <span className="eyebrow">{t.showcase.eyebrow}</span>
          <h2 className="h1" style={{color: '#fff'}}>{t.showcase.title}</h2>
          <p className="body-lg">{t.showcase.sub}</p>
        </FadeUp>

        <div className="showcase-grid">
          <div className="showcase-tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className="showcase-tab"
                data-active={idx === i}
                onClick={() => pickTab(i)}
              >
                <span className="ix">0{i+1} / 0{tabs.length}</span>
                <div className="t-title">{tab.t}</div>
                <div className="t-desc">{tab.d}</div>
                {idx === i && (
                  <div className="showcase-progress" style={{width: progress + '%'}} />
                )}
              </button>
            ))}
          </div>

          <div className="showcase-phone-wrap">
            <div className="showcase-phone">
              <div className="phone phone-xl">
                <div className="phone-screen">
                  {tabs.map((tab, i) => (
                    <div
                      key={i}
                      className="showcase-screen"
                      data-active={idx === i}
                    >
                      <img src={tab.img} alt={tab.t} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features component
const Features = ({ t }) => (
  <section id="features" className="section">
    <div className="container">
      <FadeUp className="section-head center">
        <span className="eyebrow">{t.features.eyebrow}</span>
        <h2 className="h1">{t.features.title}</h2>
      </FadeUp>
      <div className="features">
        {t.features.list.map((f, i) => (
          <FadeUp key={i} delay={Math.min(i, 4)} className={`feature span-${f.span}`}>
            <div className="f-icon">
              {f.kind === 'snap' && <Icon name="cam" size={24} />}
              {f.kind === 'macro' && <Icon name="chart" size={24} />}
              {f.kind === 'streak' && <Icon name="flame" size={24} />}
              {f.kind === 'lb' && <Icon name="trophy" size={24} />}
              {f.kind === 'health' && <Icon name="heart" size={24} />}
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            {f.kind === 'snap' && <SnapDemo />}
            {f.kind === 'macro' && <MacroDemo />}
            {f.kind === 'streak' && <StreakDemo />}
            {f.kind === 'lb' && <LBDemo />}
            {f.kind === 'health' && <HealthDemo />}
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// Placeholder components for demos
const SnapDemo = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const loop = (now) => {
      const dur = 6000;
      const t = ((now - start) % dur) / dur;
      setTick(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const beam = tick > 0.15 && tick < 0.45 ? (tick - 0.15) / 0.30 : -1;
  const lock = tick > 0.35 ? Math.min(1, (tick - 0.35) / 0.15) : 0;
  const reveal = tick > 0.55 ? Math.min(1, (tick - 0.55) / 0.15) : 0;

  const macros = [
    { key: 'p', label: 'Protein', color: 'var(--c-protein)', val: 20, unit: 'g', delay: 0 },
    { key: 'c', label: 'Carbs',   color: 'var(--c-carbs)',   val: 95, unit: 'g', delay: 0.06 },
    { key: 'f', label: 'Fat',     color: 'var(--c-fat)',     val: 22, unit: 'g', delay: 0.12 },
    { key: 'k', label: 'Kcal',    color: '#0a0a0a',          val: 650, unit: '',  delay: 0.18 },
  ];

  const lerp = (a, b, t) => a + (b - a) * t;

  return (
    <div className="feature-visual" style={{padding: 0, background: '#0a0a0a', minHeight: 320, overflow: 'hidden', position: 'relative'}}>
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 80%)'}} />

      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: `translate(-50%, -50%) scale(${1 + lock * 0.04})`,
        width: 220, height: 220, borderRadius: '50%',
        background: '#f5f3ee',
        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6), inset 0 0 0 8px #fff',
      }}>
        <div style={{
          position: 'absolute', inset: 18, borderRadius: '50%',
          background: 'repeating-linear-gradient(45deg, #e8e1d2 0 10px, #ddd2bc 10px 20px)',
          display: 'grid', placeItems: 'center',
        }}>
          <div style={{fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.12em', background: 'rgba(255,255,255,0.7)', padding: '4px 8px', borderRadius: 999}}>MEAL</div>
        </div>
      </div>

      {['tl','tr','bl','br'].map(c => {
        const inset = lerp(60, 28, lock);
        const opacity = lock * 0.85 * (1 - reveal);
        const style = { position: 'absolute', width: 26, height: 26, borderColor: 'var(--c-protein)', borderStyle: 'solid', borderWidth: 0, opacity, transition: 'opacity 0.2s' };
        if (c.includes('t')) { style.top = inset; style.borderTopWidth = 2; }
        if (c.includes('b')) { style.bottom = inset; style.borderBottomWidth = 2; }
        if (c.includes('l')) { style.left = inset + 30; style.borderLeftWidth = 2; }
        if (c.includes('r')) { style.right = inset + 30; style.borderRightWidth = 2; }
        if (c === 'tl') style.borderTopLeftRadius = 8;
        if (c === 'tr') style.borderTopRightRadius = 8;
        if (c === 'bl') style.borderBottomLeftRadius = 8;
        if (c === 'br') style.borderBottomRightRadius = 8;
        return <div key={c} style={style} />;
      })}

      {beam >= 0 && beam <= 1 && (
        <div style={{
          position: 'absolute', left: '12%', right: '12%',
          top: `${10 + beam * 80}%`, height: 2,
          background: `linear-gradient(90deg, transparent, var(--c-protein), transparent)`,
          boxShadow: `0 0 20px var(--c-protein), 0 0 40px var(--c-protein)aa`,
          pointerEvents: 'none',
        }} />
      )}

      {macros.map((m, i) => {
        const localP = Math.max(0, Math.min(1, (reveal - m.delay) / 0.25));
        const positions = [
          { left: '8%',  top: '14%' },
          { right: '8%', top: '14%' },
          { left: '8%',  bottom: '14%' },
          { right: '8%', bottom: '14%' },
        ];
        const pos = positions[i];
        const num = Math.round(m.val * localP);
        return (
          <div key={m.key} style={{
            position: 'absolute', ...pos,
            transform: `translateY(${(1 - localP) * 12}px) scale(${0.85 + localP * 0.15})`,
            opacity: localP,
            background: '#fff', borderRadius: 12, padding: '8px 12px',
            boxShadow: '0 12px 24px -8px rgba(0,0,0,0.4)',
            display: 'flex', alignItems: 'center', gap: 8,
            transition: 'opacity 0.15s',
          }}>
            <span style={{width: 7, height: 7, borderRadius: 999, background: m.color}} />
            <div style={{display: 'flex', flexDirection: 'column', lineHeight: 1.05}}>
              <span style={{fontSize: 14, fontWeight: 700, color: '#0a0a0a', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em'}}>{num}{m.unit}</span>
              <span style={{fontSize: 9, color: '#6e6e73', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600}}>{m.label}</span>
            </div>
          </div>
        );
      })}

      <div style={{
        position: 'absolute', top: 16, left: 16,
        background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.12)',
        padding: '5px 11px', borderRadius: 999,
        color: '#fff', fontSize: 10, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em',
        display: 'inline-flex', alignItems: 'center', gap: 6,
      }}>
        <span style={{width: 5, height: 5, borderRadius: 999, background: 'var(--c-protein)', boxShadow: `0 0 8px var(--c-protein)`}} />
        {reveal > 0.5 ? 'LOGGED' : lock > 0 ? 'IDENTIFIED' : beam >= 0 ? 'SCANNING' : 'READY'}
      </div>
    </div>
  );
};
const MacroDemo = () => {
  const days = ['M','T','W','T','F','S','S'];
  const [active, setActive] = useState(6);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % 7), 1400);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      setPhase(Math.min(1, (now - start) / 900));
      if (now - start < 900) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const ref = React.useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); obs.disconnect(); }}, {threshold: 0.2});
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const max = 200;
  const colors = ['var(--c-protein)', 'var(--c-carbs)', 'var(--c-fat)'];
  const dayP = 64, dayC = 168, dayF = 44;

  return (
    <div ref={ref} className="feature-visual" style={{minHeight: 240, padding: 20, alignItems: 'stretch', flexDirection: 'column', gap: 14}}>
      <div style={{display: 'flex', alignItems: 'flex-end', gap: 10, height: 130, padding: '0 4px'}}>
        {[0.7, 0.95, 0.55, 1.0, 0.82, 0.68, 0.9].map((s, i) => {
          const isActive = i === active;
          const p = dayP * s, c = dayC * s, f = dayF * s;
          const total = p + c + f;
          const scale = shown ? 1 : 0;
          const h = (total / max) * 110 * scale;
          return (
            <div key={i} style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer'}} onMouseEnter={() => setActive(i)}>
              <div style={{
                width: '100%', height: h,
                borderRadius: 6,
                display: 'flex', flexDirection: 'column-reverse', overflow: 'hidden',
                transition: 'height 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.3s, opacity 0.3s',
                transform: isActive ? 'scaleY(1.04)' : 'scaleY(1)',
                opacity: isActive ? 1 : 0.55,
                transformOrigin: 'bottom',
                boxShadow: isActive ? '0 8px 20px -8px rgba(0,0,0,0.25)' : 'none',
              }}>
                <div style={{flex: p, background: colors[0]}} />
                <div style={{flex: c, background: colors[1]}} />
                <div style={{flex: f, background: colors[2]}} />
              </div>
              <span style={{fontSize: 10, color: isActive ? 'var(--fg)' : 'var(--fg-muted)', fontWeight: 600, letterSpacing: '0.04em'}}>{days[i]}</span>
            </div>
          );
        })}
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, paddingTop: 10, borderTop: '1px solid var(--line)'}}>
        {[
          {label: 'Protein', val: Math.round(dayP * [0.7, 0.95, 0.55, 1.0, 0.82, 0.68, 0.9][active]), color: colors[0]},
          {label: 'Carbs',   val: Math.round(dayC * [0.7, 0.95, 0.55, 1.0, 0.82, 0.68, 0.9][active]), color: colors[1]},
          {label: 'Fat',     val: Math.round(dayF * [0.7, 0.95, 0.55, 1.0, 0.82, 0.68, 0.9][active]), color: colors[2]},
        ].map(m => (
          <div key={m.label} style={{display: 'flex', flexDirection: 'column', gap: 4}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
              <span style={{width: 6, height: 6, borderRadius: 999, background: m.color}} />
              <span style={{fontSize: 10, color: 'var(--fg-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600}}>{m.label}</span>
            </div>
            <span className="tnum" style={{fontSize: 18, fontWeight: 700, color: 'var(--fg)', letterSpacing: '-0.02em'}}>{m.val}<span style={{fontSize: 11, color: 'var(--fg-muted)', fontWeight: 500, marginLeft: 2}}>g</span></span>
          </div>
        ))}
      </div>
    </div>
  );
};
const StreakDemo = () => {
  const cells = Array.from({length: 21}, (_, i) => i >= 7);
  return (
    <div className="feature-visual" style={{minHeight: 180}}>
      <div className="streak-grid">
        {cells.map((lit, i) => (
          <div key={i} className={'streak-cell ' + (lit ? 'lit' : 'dim')} />
        ))}
      </div>
    </div>
  );
};
const LBDemo = () => (
  <div className="feature-visual" style={{minHeight: 180, padding: 16}}>
    <div style={{width: '100%', display: 'grid', gap: 8}}>
      {[
        {r: 1, n: 'Maya', k: 1820, gold: true},
        {r: 2, n: 'You',  k: 1640, me: true},
        {r: 3, n: 'Daniel', k: 1410},
      ].map(row => (
        <div key={row.r} style={{display: 'grid', gridTemplateColumns: '20px 1fr auto', gap: 12, alignItems: 'center', padding: '8px 12px', borderRadius: 10, background: row.me ? 'rgba(0,0,0,0.04)' : 'transparent', fontSize: 13}}>
          <span style={{color: row.gold ? '#d4a017' : 'var(--fg-muted)', fontWeight: 600}}>{row.r}</span>
          <span style={{fontWeight: 500}}>{row.n}{row.me && <span style={{marginLeft: 6, fontSize: 10, padding: '2px 6px', background: '#0a0a0a', color: '#fff', borderRadius: 999}}>ME</span>}</span>
          <span className="tnum" style={{fontWeight: 600}}>{row.k}<span style={{color: 'var(--fg-muted)', fontWeight: 500, marginLeft: 2}}> kcal</span></span>
        </div>
      ))}
    </div>
  </div>
);
const HealthDemo = () => (
  <div className="feature-visual" style={{minHeight: 180, gap: 16, flexDirection: 'column'}}>
    <div style={{display: 'flex', gap: 12}}>
      {['Steps', 'Energy', 'Workouts'].map(label => (
        <div key={label} style={{padding: '10px 14px', background: 'var(--bg-elev)', border: '1px solid var(--line)', borderRadius: 999, fontSize: 12, fontWeight: 500, color: 'var(--fg)'}}>
          {label}
        </div>
      ))}
    </div>
    <div style={{fontSize: 11, color: 'var(--fg-muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em'}}>↳ AUTO-IMPORT</div>
  </div>
);

// Social component
const Social = ({ t }) => (
  <section id="community" className="section">
    <div className="container">
      <FadeUp className="section-head center">
        <span className="eyebrow">{t.social.eyebrow}</span>
        <h2 className="h1">{t.social.title}</h2>
        <p className="body-lg">{t.social.sub}</p>
      </FadeUp>
      <div className="social-grid">
        <div>
          <ul>
            {t.social.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
        <div className="leaderboard-card">
          <div className="lb-head">
            <div className="title"><Icon name="trophy" size={16} /> Leaderboard</div>
            <div className="meta">TODAY</div>
          </div>
          <div className="lb-row">
            <span className="rank gold">1</span>
            <div className="av">M</div>
            <div className="nm">Maya <span className="streak">🔥 14</span></div>
            <div className="kc">1,820 <small>kcal</small></div>
          </div>
          <div className="lb-row">
            <span className="rank silver">2</span>
            <div className="av">D</div>
            <div className="nm">Daniel <span className="streak">🔥 12</span></div>
            <div className="kc">1,640 <small>kcal</small></div>
          </div>
          <div className="lb-row">
            <span className="rank bronze">3</span>
            <div className="av">S</div>
            <div className="nm">Sara <span className="streak">🔥 10</span></div>
            <div className="kc">1,410 <small>kcal</small></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Testi component
const Testi = ({ t }) => (
  <section className="section-tight">
    <div className="container">
      <FadeUp className="section-head center">
        <span className="eyebrow">{t.testi.eyebrow}</span>
        <h2 className="h1">{t.testi.title}</h2>
      </FadeUp>
      <div className="testi-grid">
        {t.testi.items.map((item, i) => (
          <FadeUp key={i} delay={Math.min(i, 4)} className="testi">
            <div className="stars">★★★★★</div>
            <blockquote>{item.q}</blockquote>
            <div className="who">
              <div className="av">{item.av}</div>
              <div>
                <div className="name">{item.n}</div>
                <div className="handle">{item.h}</div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// FAQ component
const FAQ = ({ t }) => {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="section">
      <div className="container">
        <FadeUp className="section-head center">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="h1">{t.faq.title}</h2>
        </FadeUp>
        <div className="faq-grid">
          {t.faq.items.map((item, i) => (
            <div key={i} className="faq-item" data-open={open === i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                <div className="ico"><Icon name="plus" size={16} /></div>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FinalCTA component
const FinalCTA = ({ t }) => (
  <section className="final-cta">
    <div className="container">
      <FadeUp as="h2" className="h1">
        {t.cta.title1} <span className="dim">{t.cta.title2}</span>
      </FadeUp>
      <FadeUp delay={1} className="body-lg">{t.cta.sub}</FadeUp>
      <FadeUp delay={2}>
        <a href={APPSTORE_URL} className="btn btn-primary btn-lg">
          <Icon name="apple" size={16} />
          {t.cta.btn}
        </a>
      </FadeUp>
    </div>
  </section>
);

// Footer component
const Footer = ({ t, lang, setLang }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        {t.footer.cols.map((col, i) => (
          <div key={i} className="footer-col">
            <h4>{col.h}</h4>
            <ul>
              {col.items.map(([text, href], j) => (
                <li key={j}><a href={href}>{text}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div>{t.footer.tag}</div>
        <div className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>
          {lang === 'en' ? '中文' : 'EN'}
        </div>
        <div>{t.footer.rights}</div>
      </div>
    </div>
  </footer>
);
