/* =========================================
   Shared Header & Footer Components
   ========================================= */

const HEADER_HTML = `
<header class="site-header" id="site-header">
  <div class="header-inner">
    <a href="index.html" class="site-logo">
      <span class="logo-en">LUCE</span>
      <span class="logo-kr">루체 치과의원</span>
    </a>
    <nav class="site-nav" aria-label="주 내비게이션">
      <ul class="nav-list">
        <li><a href="about.html">병원소개</a></li>
        <li><a href="doctors.html">의료진</a></li>
        <li class="nav-item--dropdown">
          <a href="services.html">진료안내</a>
          <ul class="dropdown">
            <li><a href="service-general.html">일반치과</a></li>
            <li><a href="service-orthodontics.html">교정치과</a></li>
            <li><a href="service-implant.html">임플란트</a></li>
            <li><a href="service-cosmetic.html">심미치과</a></li>
            <li><a href="service-pediatric.html">소아치과</a></li>
            <li><a href="service-periodontics.html">잇몸치료</a></li>
          </ul>
        </li>
        <li><a href="space.html">공간</a></li>
        <li><a href="equipment.html">장비</a></li>
        <li><a href="hours.html">진료시간</a></li>
        <li><a href="contact.html" class="nav-btn-reserve">상담예약</a></li>
      </ul>
    </nav>
    <button class="hamburger" id="hamburger" aria-label="메뉴 열기">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>

<!-- Mobile Nav -->
<nav class="mobile-nav" id="mobile-nav" aria-label="모바일 내비게이션">
  <ul class="mobile-nav-list">
    <li><a href="index.html">홈</a></li>
    <li><a href="about.html">병원소개</a></li>
    <li><a href="doctors.html">의료진</a></li>
    <li>
      <a href="services.html">진료안내</a>
      <ul class="mobile-nav-sublist">
        <li><a href="service-general.html">일반치과</a></li>
        <li><a href="service-orthodontics.html">교정치과</a></li>
        <li><a href="service-implant.html">임플란트</a></li>
        <li><a href="service-cosmetic.html">심미치과</a></li>
        <li><a href="service-pediatric.html">소아치과</a></li>
        <li><a href="service-periodontics.html">잇몸치료</a></li>
      </ul>
    </li>
    <li><a href="space.html">공간</a></li>
    <li><a href="equipment.html">장비</a></li>
    <li><a href="hours.html">진료시간</a></li>
    <li><a href="contact.html">상담예약</a></li>
  </ul>
</nav>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo-en">LUCE</span>
        <span class="footer-logo-kr">루체 치과의원</span>
        <p class="footer-tagline">당신의 가장 아름다운 미소를 위해</p>
        <p class="footer-info" style="font-size:0.8125rem; color:rgba(255,255,255,0.4); line-height:1.85;">
          사업자등록번호: 220-91-XXXXX<br>
          대표원장: 김유진<br>
          의료기관명: 루체 치과의원
        </p>
      </div>
      <div>
        <p class="footer-nav-title">진료과목</p>
        <ul class="footer-nav-list">
          <li><a href="service-general.html">일반치과</a></li>
          <li><a href="service-orthodontics.html">교정치과</a></li>
          <li><a href="service-implant.html">임플란트</a></li>
          <li><a href="service-cosmetic.html">심미치과</a></li>
          <li><a href="service-pediatric.html">소아치과</a></li>
          <li><a href="service-periodontics.html">잇몸치료</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-nav-title">병원안내</p>
        <ul class="footer-nav-list">
          <li><a href="about.html">병원소개</a></li>
          <li><a href="doctors.html">의료진</a></li>
          <li><a href="space.html">공간</a></li>
          <li><a href="equipment.html">장비</a></li>
          <li><a href="hours.html">진료시간/오시는길</a></li>
          <li><a href="contact.html">상담예약</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-nav-title">연락처</p>
        <div class="footer-info">
          <p><strong>Tel.</strong> 02-555-2580</p>
          <p><strong>Fax.</strong> 02-555-2581</p>
          <p><strong>Email.</strong> info@lucedental.kr</p>
          <p style="margin-top:0.5rem;">서울 강남구 테헤란로 152<br>루체빌딩 2층</p>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <p>© 2025 루체 치과의원. All rights reserved.</p>
      <p class="footer-copy-note">이 사이트는 포트폴리오 데모용으로 제작된 가상 사이트입니다. 실제 병원이 아닙니다.</p>
    </div>
  </div>
</footer>
`;

// Inject components
document.addEventListener('DOMContentLoaded', () => {
  const headerWrap = document.getElementById('header-wrap');
  const footerWrap = document.getElementById('footer-wrap');

  if (headerWrap) headerWrap.innerHTML = HEADER_HTML;
  if (footerWrap) footerWrap.innerHTML = FOOTER_HTML;

  // Active nav highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a, .mobile-nav-list a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.style.color = 'var(--accent)';
    }
  });
});
