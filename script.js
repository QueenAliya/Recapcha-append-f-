var
  recaptcha1,
  recaptcha2,
  mysitekey = '6LfWLkAmAAAAAJCTgnS4V-1LWV9dXoAurDU77Eok';
function renderRecaptcha() {
  onloadCallback = function () {
    if (('#recaptcha2').length) {
      recaptcha2 = grecaptcha.render('recaptcha2', {
        'sitekey': mysitekey
      });
    }
  };
};
renderRecaptcha();

jQuery(document).ready(function ($) {
  renderRecaptcha();
  function renderRecaptcha_2() {
    if (('#recaptcha1').length) {
      recaptcha1 = grecaptcha.render('recaptcha1', {
        'sitekey': mysitekey,
      });
    }
  };
  var arr = ('.contact-form-portfolio', '.contact-form-vacancy', '.contact-form-service');
  $('.contact-form').submit(function () {
    $('#moverecaptcha').appendTo($('#newrecaptcha_2'));
  });
  $(arr).submit(function () {
    $('#moverecaptcha').appendTo($('#newrecaptcha_1'));
  });

  jQuery(".contact-form").submit(function () {
    var captcha = grecaptcha.getResponse();
    if (!captcha.length) {
      $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
      return false;
    } else {
      $('#recaptchaError').text('');
      var formID = jQuery(this).attr('class');
      var formNm = jQuery('.' + formID);
      jQuery.ajax({
        type: "POST",
        url: '/thanks.php',
        data: formNm.serialize(),
        success: function (data) {
          jQuery(formNm).html(data);
          renderRecaptcha_2();
        },
        error: function (jqXHR, text, error) {
          jQuery(formNm).html(error);
        }
      });
      return false;
    }
  });

  jQuery(".contact-form-portfolio").submit(function () {
    var captcha = grecaptcha.getResponse();
    if (!captcha.length) {
      // Выводим сообщение об ошибке
      $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
      return false;
    } else {
      $('#recaptchaError').text('');
      var formID = jQuery(this).attr('class');
      var formNm = jQuery('.' + formID);
      jQuery.ajax({
        type: "POST",
        url: '/thanks.php',
        data: formNm.serialize(),
        success: function (data) {
          jQuery(formNm).html(data);
          renderRecaptcha_2();
        },
        error: function (jqXHR, text, error) {
          jQuery(formNm).html(error);
        }
      });
      return false;
    }
  });

  jQuery(".contact-form-service").submit(function () {
    var captcha = grecaptcha.getResponse();
    if (!captcha.length) {
      // Выводим сообщение об ошибке
      $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
      return false;
    } else {
      $('#recaptchaError').text('');
      var formID = jQuery(this).attr('class');
      var formNm = jQuery('.' + formID);
      jQuery.ajax({
        type: "POST",
        url: '/thanks.php',
        data: formNm.serialize(),
        success: function (data) {
          jQuery(formNm).html(data);
          renderRecaptcha_2();
        },
        error: function (jqXHR, text, error) {
          jQuery(formNm).html(error);
        }
      });
      return false;
    }
  });

  jQuery(".contact-form-vacancy").submit(function () {
    var formID = jQuery(this).attr('class');
    var formNm = jQuery('.' + formID);
    jQuery.ajax({
      type: "POST",
      url: '/thanks.php',
      data: formNm.serialize(),
      success: function (data) {
        jQuery(formNm).html(data);
        /*setInterval(function() {
          location.reload();
        }, 3000);*/

      },
      error: function (jqXHR, text, error) {
        jQuery(formNm).html(error);
      }
    });
    return false;
  });

  jQuery(".contact-form1").submit(function () {
    var formID = jQuery(this).attr('class');
    var formNm = jQuery('.' + formID);
    jQuery.ajax({
      type: "POST",
      url: '/thanks2.php',
      data: formNm.serialize(),
      success: function (data) {
        jQuery(formNm).html(data);
        /*setInterval(function() {
          location.reload();
        }, 3000);*/
      },
      error: function (jqXHR, text, error) {
        jQuery(formNm).html(error);
      }
    });
    return false;
  });
