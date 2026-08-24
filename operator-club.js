/* Hydration-safe membership content layer preserving The Board's original design. */
(() => {
  const brand = 'THE OPERATOR CLUB';
  const description = 'A private community for creators and independent operators building serious businesses around their audience and expertise.';
  const disclosure = 'Due to contractual restrictions, the original work cannot be displayed publicly. The copyright and publication rights remain with the employer, so an unrelated demonstration site is presented here instead.';
  const map = new Map([
    ['The Board – Private Membership Community Template', 'THE OPERATOR CLUB — Private Community for Independent Operators'],
    ['A dark, editorial landing page Framer template for anyone launching a private membership, communities, newsletters, masterminds, coaching programs, or exclusive clubs.', description],
    ['The Board', brand], ['THE BOARD', brand], ['Apply Now', 'Apply for Membership'], ['APPLY NOW', 'APPLY FOR MEMBERSHIP'], ['Join Now', 'Apply for Membership'], ['JOIN NOW', 'APPLY FOR MEMBERSHIP'], ['Made with Framer', ''], ['© 2025 The Board', '']
  ]);
  const swap = value => { let next = value; map.forEach((to, from) => { next = next.split(from).join(to); }); return next; };
  function text() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: node => node.parentElement && !/^(SCRIPT|STYLE|NOSCRIPT)$/i.test(node.parentElement.tagName) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => { const next = swap(node.nodeValue); if (next !== node.nodeValue) node.nodeValue = next; });
    document.querySelectorAll('h1,h2,h3,h4,h5,h6,p').forEach(element => {
      const value = (element.textContent || '').replace(/\s+/g, ' ').trim(); let next = '';
      if (/think in decades|build accordingly/i.test(value)) next = 'BUILD WITH CLARITY. OPERATE FOR THE LONG TERM.';
      else if (/the board is a private membership|essays\. courses\. a room/i.test(value)) next = description;
      else if (/courses that promise shortcuts|internet is full of people/i.test(value)) next = 'The creator economy is crowded with surface-level advice. This is a room for operators who value durable work, sharper thinking and business decisions grounded in practice.';
      else if (/you.?ve been through enough|not looking for motivation/i.test(value)) next = 'You are here for honest exchange, useful context and peers who understand the responsibility of building something that lasts.';
      else if (/that.?s what the board/i.test(value)) next = 'That is THE OPERATOR CLUB: a focused membership for independent builders.';
      else if (/apply to join/i.test(value)) next = 'Apply for Membership';
      if (next && next !== value) element.textContent = next;
    });
  }
  function logo() {
    document.querySelectorAll('img[src*="Mfh7gjKkxNG3JNcXZJGB9FHf2s"]').forEach(image => {
      const anchor = image.closest('a'); if (!anchor || anchor.querySelector('.operator-club-wordmark')) return;
      image.style.visibility = 'hidden'; anchor.style.position = 'relative';
      const wordmark = document.createElement('span'); wordmark.className = 'operator-club-wordmark'; wordmark.textContent = brand;
      wordmark.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;color:#fff;font:700 clamp(7px,.7vw,10px)/1 Inter,Arial,sans-serif;letter-spacing:-.07em;white-space:nowrap'; anchor.append(wordmark);
    });
  }
  function links() { document.querySelectorAll('a[href]').forEach(anchor => { const href = anchor.getAttribute('href') || ''; if (/^(https?:)?\/\/(www\.)?(instagram|twitter|x|facebook|linkedin|discord)\.com/i.test(href) || /framer\.com\/marketplace|buy\.polar|gumroad/i.test(href)) (anchor.closest('p') || anchor).remove(); if (/theboard|framer\.website/i.test(href)) anchor.removeAttribute('href'); }); document.querySelectorAll('p').forEach(paragraph => { if (/^(Socials|Created proudly with Framer)$/i.test((paragraph.textContent || '').trim())) paragraph.remove(); }); }
  function forms() { document.querySelectorAll('form').forEach(form => { if (form.dataset.operatorClub) return; form.dataset.operatorClub = '1'; form.addEventListener('submit', event => { event.preventDefault(); let note = form.querySelector('.operator-club-note'); if (!note) { note = document.createElement('p'); note.className = 'operator-club-note'; note.style.cssText = 'margin:10px 0 0;font:500 12px/1.4 Inter,Arial,sans-serif'; form.append(note); } note.textContent = 'Portfolio demo — applications are not sent.'; }); }); }
  function footer() { if (document.querySelector('#operator-club-credit')) return; const footer = document.createElement('div'); footer.id = 'operator-club-credit'; footer.style.cssText = 'max-width:1440px;margin:0 auto;padding:18px 20px 30px;color:rgba(255,255,255,.58);font:500 11px/1.45 Inter,Arial,sans-serif;text-align:center'; footer.innerHTML = '<p style="margin:0 0 8px">A <a href="https://webcanbe.com" target="_blank" rel="noopener noreferrer" style="color:inherit">WebCanBe</a> project</p><p style="margin:0">' + disclosure + '</p>'; document.body.append(footer); }
  function apply() { document.title = 'THE OPERATOR CLUB — Private Community for Independent Operators'; ['meta[name="description"]','meta[property="og:description"]','meta[name="twitter:description"]'].forEach(selector => document.querySelector(selector)?.setAttribute('content', description)); ['meta[property="og:title"]','meta[name="twitter:title"]'].forEach(selector => document.querySelector(selector)?.setAttribute('content', document.title)); document.querySelector('meta[name="generator"]')?.remove(); text(); logo(); links(); forms(); footer(); }
  const ready = () => { apply(); setTimeout(apply, 800); setTimeout(apply, 2200); setInterval(apply, 1000); };
  document.readyState === 'complete' ? setTimeout(ready, 0) : addEventListener('load', ready, { once: true });
})();
