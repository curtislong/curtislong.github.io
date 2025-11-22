document.addEventListener('DOMContentLoaded', function () {

  // Populate Content from siteContent object (loaded via content.js)
  if (typeof siteContent !== 'undefined') {

    // Hero
    document.getElementById('hero-name').textContent = siteContent.hero.name;
    document.getElementById('hero-title').textContent = siteContent.hero.title;

    // About
    document.getElementById('about-header').textContent = siteContent.about.header;
    document.getElementById('about-tagline').innerHTML = siteContent.about.tagline.replace(/\n/g, '<br>');
    document.getElementById('about-description').innerHTML = siteContent.about.description;

    // Gallery
    document.getElementById('gallery-header').textContent = siteContent.gallery.header;
    const galleryGrid = document.getElementById('gallery-grid');
    siteContent.gallery.images.forEach(imgSrc => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = 'Gallery Image';
      div.appendChild(img);
      galleryGrid.appendChild(div);
    });

    // Contact
    document.getElementById('contact-header').textContent = siteContent.contact.header;
    document.getElementById('contact-text').innerHTML = siteContent.contact.text;

    const contactBtn = document.getElementById('contact-btn');
    contactBtn.textContent = siteContent.contact.cta;
    contactBtn.href = siteContent.contact.ctaUrl;

    const socialLinks = document.getElementById('social-links');
    siteContent.contact.social.forEach(social => {
      const a = document.createElement('a');
      a.href = social.url;
      a.target = "_blank";
      const img = document.createElement('img');
      img.src = social.icon;
      img.alt = social.platform;
      a.appendChild(img);
      socialLinks.appendChild(a);
    });

    // Footer
    document.getElementById('copyright-name').textContent = siteContent.footer.copyright;
  }

  // Parallax Effect
  const parallaxBg = document.querySelector('.parallax-bg');

  if (parallaxBg) {
    window.addEventListener('scroll', function () {
      const scrolled = window.pageYOffset;
      // Move the background at 15% of the scroll speed (reduced to prevent whitespace)
      // We also keep the scale(1.2) defined in CSS
      const rate = 0.15;
      const yPos = -(scrolled * rate);

      requestAnimationFrame(() => {
        parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0) scale(1.2)`;
      });
    });
  }

});
