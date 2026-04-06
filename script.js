
  // Navbar scroll effect
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 60) {
      $('#mainNav').addClass('scrolled');
      $('#backTop').addClass('visible');
    } else {
      $('#mainNav').removeClass('scrolled');
      $('#backTop').removeClass('visible');
    }
  });

  // Smooth nav close on mobile click
  $('.nav-link').on('click', function() {
    if ($('.navbar-collapse').hasClass('show')) {
      $('.navbar-toggler').trigger('click');
    }
  });

  // Intersection Observer — fade-up
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80 * i);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // WhatsApp form send
  function sendWA() {
    const name    = $('#fname').val().trim() || 'N/A';
    const phone   = $('#fphone').val().trim() || 'N/A';
    const email   = $('#femail').val().trim() || 'N/A';
    const interest = $('#finterest').val() || 'General Inquiry';
    const message = $('#fmessage').val().trim() || '';

    const text = encodeURIComponent(
      `Hi ABC Gym! 👋\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Interested In: ${interest}\n` +
      (message ? `Message: ${message}\n` : '') +
      `\nLooking forward to hearing from you!`
    );
    window.open(`https://wa.me/923001234567?text=${text}`, '_blank');
  }

  // Active nav link highlight on scroll
  $(window).on('scroll', function() {
    const sections = ['hero','about','facilities','trainers','pricing','schedule','testimonials','contact'];
    const scrollPos = $(this).scrollTop() + 100;
    sections.forEach(id => {
      const el = $(`#${id}`);
      if (el.length && scrollPos >= el.offset().top && scrollPos < el.offset().top + el.outerHeight()) {
        $('.nav-link').removeClass('active').css('color', '');
        $(`.nav-link[href="#${id}"]`).addClass('active').css('color', 'var(--fire)');
      }
    });
  });
