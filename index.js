var insertForm16908288 = function() {
var successHtml16908288 = '<div class=\'donation-success\'>' +
                        '  <h2>Thank You for Your Donation to Kitsap Humane Society!</h2>' +
                        '  <p>Your generous gift has been processed and a tax receipt has been e-mailed to you. Please retain that e-mail for your records. We truly appreciate your continued support.</p>' +
                        '\u003cdiv class=\"social-media-buttons\" style=\"margin-top:10px;\"\u003e\u003cdiv id=\"twitter-buttons\"\u003e\u003c/div\u003e\u003cdiv class=\"fb-like\" data-href=\"https://facebook.com/kitsaphumanesociety\" data-layout=\"button_count\" data-show-faces=\"true\" style=\"padding-right: 10px;\" data-action=\"like\" \u003e\u003c/div\u003e\u003cdiv id=\"facebookShareOnly\" class=\"fb-share-button\" data-href=\"https://facebook.com/kitsaphumanesociety\" data-layout=\"button_count\"\u003e\u003c/div\u003e\u003cscript type=\u0027text/javascript\u0027\u003edocument.getElementById(\u0027facebookShareOnly\u0027).setAttribute(\u0027data-href\u0027, window.location.href);\u003c/script\u003e\u003c/div\u003e \u003cscript\u003e\r\n                    if (navigator.userAgent.indexOf(\u0027Edge/\u0027) === -1) {\r\n                        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\"http\":\"https\";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document, \"script\", \"twitter-wjs\");\r\n                        var twitterButtons = document.getElementById(\u0027twitter-buttons\u0027);\r\n                        twitterButtons.innerHTML = \u0027\u003cdiv id=\"tweetButton\" style=\"float:left; margin-right:10px\"\u003e \u003ca href=\"https://twitter.com/share\" data-text=\"I just made a donation to @KitsapHumaneSoc. You should too!\" class=\"twitter-share-button\"\u003eTweet\u003c/a\u003e \u003c/div\u003e\u003cdiv id=\"followButton\"\u003e \u003ca href=\"https://twitter.com/KitsapHumaneSoc\" class=\"twitter-follow-button\"\u003eFollow\u003c/a\u003e \u003c/div\u003e\u0027;\r\n                        twitterButtons.style.height = \u002735px\u0027;\r\n                    }\r\n                \u003c/script\u003e \u003cdiv id=\"fb-root\"\u003e\u003c/div\u003e \u003cscript\u003e(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//connect.facebook.net/en_US/sdk.js#xfbml=1\u0026version=v2.8\"; fjs.parentNode.insertBefore(js, fjs); }(document, \u0027script\u0027, \u0027facebook-jssdk\u0027));\u003c/script\u003e ' +
                        '</div>';
                        ( function($) {if (!Bloomerang.useDonationId('16908288')) {
                            html16908288 = '<p style="color: red">Only one donation or event registration form can be used on each page.</p>';
                        }if (jQuery('#bloomerangForm16908288').length) {

            if (window.ActiveXObject) { // they are using IE < 11, which doesn't support TLS 1.1
                html16908288 = '<p style="color: red">​Your browser does not support the minimum security requirements for keeping your Credit Card information safe when processing payments. Please upgrade ​your browser or download the latest version of' +
                ' <a target=\'_blank\' href=\'https://www.google.com/chrome/browser/desktop/\'>Chrome</a> or <a target=\'_blank\' href=\'https://www.mozilla.org/en-US/firefox/new/\'>Firefox</a>.</p>';
            }
                //jQuery('#bloomerangForm16908288').after(html16908288);
                 if (!Bloomerang.SpreedlyScriptLoaded) {
                                    Bloomerang.Util.load('https://core.spreedly.com/iframe/express-2.min.js',
                                        function() { return SpreedlyExpress != undefined; },
                                        function() {
                                            SpreedlyExpress.onInit(function() { jQuery('#express-submit').attr('disabled', false); });
                                            Bloomerang.initSpreedly = function() {
                                                SpreedlyExpress.init('OqOMv1ksjPtXEYHtCYsVXzEpCbR', { 'company_name': 'Kitsap Humane Society' });
                                            };
                                            Bloomerang.initSpreedly();
                                        });
                                }
                                Bloomerang.SpreedlyScriptLoaded = true;
            };
            if (Bloomerang.paymentFormLoaded) {
                                    return false;
                                }
                                Bloomerang.paymentFormLoaded = true;
             jQuery('.donation-form .section.captcha').attr('style', 'display: none');
            Bloomerang.transactionFee = 0.3; Bloomerang.transactionFeeRate = 0.022; Bloomerang.transactionFeeEft =
            Bloomerang.useKey('pub_a3610f18-b2d9-11e9-9f3d-0aa640fb8062');

Bloomerang.Util.getDonationAmount = function() {
  return Number(accounting.unformat(jQuery(".donation-form .section.donation input[name='donation-level']:checked").val() || jQuery(".donation-form #donation-amount").val()));
};

// Register proper callbacks for various stages/outcomes of submission
Bloomerang.Widget.Donation.OnSubmit = function (args) {
    jQuery(".btn-submit-donation").val("Donating...").prop("disabled", true).addClass("disabled");
    var val = function (selector) { return jQuery(selector).val(); };
    Bloomerang.Account
            .individual()
            .firstName(val(".donation-form #first-name"))
            .middleName(val(".donation-form #middle-name"))
            .lastName(val(".donation-form #last-name"))
            .homeAddress(val(".donation-form #street-address"),
                         val(".donation-form #city"),
                         val(".donation-form #state") || val(".donation-form #province"),
                         val(".donation-form #zip-code") || val(".donation-form #postal-code"),
                         val(".donation-form #country"))
            .homeEmail(val(".donation-form #email-address"))
            .homePhone(val(".donation-form #phone-number"))
            .applyDonationCustomFields();

    if (jQuery(".donation-form #consent-all").prop("checked")) {
      Bloomerang.Account.optedInStatus(jQuery(".donation-form #consent-email").prop("checked"),
                                       jQuery(".donation-form #consent-mail").prop("checked"),
                                       jQuery(".donation-form #consent-phone").prop("checked"));
    }

    var amount = Bloomerang.Util.getDonationAmount() + Bloomerang.Util.getDonationTrueImpactAmount();
    if (jQuery(".donation-form #recurring").prop("checked")) {
        Bloomerang.RecurringDonation
                .amount(amount)
                .fundId(val(".donation-form #fund"))
                .note(val(".donation-form #comment"))
                .frequency(val(".donation-form #frequency") || "Monthly")
                .startDate(val(".donation-form #start-date"))
                .applyDonationCustomFields();

        // Need to do a null-check here because they might have a cached version of Bloomerang-v2.js
        if (Bloomerang.RecurringDonation.trueImpactEnabled && Bloomerang.RecurringDonation.trueImpactUsed) {
          Bloomerang.RecurringDonation
                .trueImpactEnabled(jQuery(".donation-form .true-impact .fee-amount").length > 0)
                .trueImpactUsed(jQuery(".donation-form .true-impact input:checked").length > 0);
        }
    } else {
        Bloomerang.Donation
                .amount(amount)
                .fundId(val(".donation-form #fund"))
                .note(val(".donation-form #comment"))
                .applyDonationCustomFields();

        // Need to do a null-check here because they might have a cached version of Bloomerang-v2.js
        if (Bloomerang.Donation.trueImpactEnabled && Bloomerang.Donation.trueImpactUsed) {
          Bloomerang.Donation
                .trueImpactEnabled(jQuery(".donation-form .true-impact .fee-amount").length > 0)
                .trueImpactUsed(jQuery(".donation-form .true-impact input:checked").length > 0);
        }
    }

    if (jQuery("#donation-form #Checking").is(":checked") ||
        jQuery("#donation-form #Savings").is(":checked")) {
      Bloomerang.Eft
        .accountNumber(val(".donation-form #accountNumber"))
        .routingNumber(val(".donation-form #routingNumber"))
        .type(jQuery("#donation-form .section.payment input[type='radio']:checked").attr("id"));
    }
};
Bloomerang.ValidateDonationFormCaptcha = function() {
    if (typeof(grecaptcha) !== "undefined" && jQuery("#captcha" + Bloomerang.Data.WidgetIds.Donation).children().length) {
        var captchaResponse = grecaptcha.getResponse(jQuery(".donation-form").data("captcha-id"));
        if (captchaResponse) {
            jQuery(".donation-form .noCaptchaResponseError").hide();
            Bloomerang.captchaResponse(captchaResponse);
            return true;
        } else {
            jQuery(".donation-form .noCaptchaResponseError").show();
            return false;
        }
    } else return true;
};
Bloomerang.scrollToElement = function(element) {
    var distance = 100;
    var offset = element.offset().top;
    var offsetTop = offset > distance ? offset - distance : offset;
        jQuery('html, body').animate({ scrollTop : offsetTop}, 500);
};
Bloomerang.Api.OnSuccess = Bloomerang.Widget.Donation.OnSuccess = function (response) {
    jQuery("#donation-processing-container").hide();
    var formContainer = jQuery("#donation-form-container");
    formContainer.show();
    formContainer.html(successHtml16908288);
    Bloomerang.scrollToElement(formContainer);
};
Bloomerang.Api.OnError = Bloomerang.Widget.Donation.OnError = function (response) {
    jQuery(".btn-submit-donation").prop("disabled", false).removeClass("disabled");
    if (jQuery("#donation-form #Checking").is(":checked") ||
        jQuery("#donation-form #Savings").is(":checked"))
      jQuery(".btn-submit-donation").val("Donate");
    else
      jQuery(".btn-submit-donation").val("Enter Payment");
    jQuery("#donation-form-container .errors").removeClass("hidden").html(response.Message);
    jQuery("#donation-processing-container").hide();
    jQuery("#donation-form-container").show();
    Bloomerang.scrollToElement(jQuery("#donation-form-container .errors"));
    Bloomerang.cancelFinancialSubmission(jQuery("#donation-form"));
    SpreedlyExpress.unload();
    Bloomerang.initSpreedly();
    if (typeof(grecaptcha) !== "undefined" && jQuery("#captcha" + Bloomerang.Data.WidgetIds.Donation).children().length) {
      grecaptcha.reset(jQuery(".donation-form").data("captcha-id"));
    }
};

Bloomerang.Util.applyDonationCustomFields = function (obj, type) {

    // Clear any fields from a previous failed submission
    obj.clearCustomFields();

    // Apply all <input> (not multiselect), <select> and <textarea> fields
    jQuery(".donation-form .section.custom-fields :input:not(a > input, select)[id*=" + type + "]").each(function() {
        if (jQuery(this).val().hasValue()) {
            obj.customFreeformField(jQuery(this).attr("id").toUntypedValue(), jQuery(this).val());
        }
    });

    // Apply all <select> fields
    jQuery(".donation-form .section.custom-fields select[id*=" + type + "]").each(function() {
        if (jQuery(this).val().hasValue()) {
            obj.customPickField(jQuery(this).attr("id").toUntypedValue(), jQuery(this).val());
        }
    });

    // Apply all multiselect fields
    jQuery(".donation-form .section.custom-fields .checkboxes[id*=" + type + "]").each(function() {
        obj.customPickField(jQuery(this).attr("id").toUntypedValue(),
        jQuery.map(jQuery(this).children(".checkbox.selected"), function(v) { return jQuery(v).attr("data-id"); }));
    });
};

String.prototype.hasValue = function() {
    return (this && jQuery.trim(this)); //IE8 doesn't have a native trim function
};

Bloomerang.Account.applyDonationCustomFields = function () {
    Bloomerang.Util.applyDonationCustomFields(this, "Account");
    return this;
};

Bloomerang.Donation.applyDonationCustomFields = function () {
    Bloomerang.Util.applyDonationCustomFields(this, "Transaction");
    return this;
};

Bloomerang.RecurringDonation.applyDonationCustomFields = function () {
    Bloomerang.Util.applyDonationCustomFields(this, "Transaction");
    return this;
};

String.prototype.toUntypedValue = function() {
    return this.substring(this.indexOf('_') + 1);
};

Date.prototype.toDateInputValue = function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return (local.getMonth() + 1) + // Add one to the month because it starts at 0
            "/" + local.getDate() + "/" + local.getFullYear();
};

jQuery(document).ready(function() {
    jQuery(".donation-form .field.start-date input").val(new Date().toDateInputValue());
});

// Hide recurring donation options if recurring donation box is unchecked
jQuery(".donation-form .field.recurring").change(function() {
    jQuery(".donation-form .field.recurring").siblings().each(function(i, e) {
        jQuery(e).toggle();
    });
})

// The other-amount field is only equired when the "Other" donation-level is selected
toggleOtherAmountRequired = function () {
  jQuery(".donation-form #other-amount").toggleClass("required",
    jQuery(".donation-form #other-option").prop("checked"));
  Bloomerang.Util.calculateDonationTrueImpact();
};
jQuery(".donation-form .section.donation input[name='donation-level']").change(toggleOtherAmountRequired);

if (jQuery(".donation-form .true-impact label").length) {
  jQuery(".donation-form .true-impact label")[0].innerHTML = jQuery(".donation-form .true-impact label")[0].innerHTML.replace("[amount]", "<span class='fee-amount'>$0</span>");
}
Bloomerang.Util.calculateDonationTrueImpact = function() {
  if (!jQuery(".donation-form .true-impact .fee-amount").length) { return; }
  // Note that we don't really care about JS floating point math. It's OK if the numbers are a couple cents off.
  var amount = Bloomerang.Util.getDonationAmount();
  var isEft = (jQuery("#donation-form #Checking").is(":checked") || jQuery("#donation-form #Savings").is(":checked"));
  var feeRate = isEft ? 0 : Bloomerang.transactionFeeRate;
  var newTotal = (amount + (isEft ? Bloomerang.transactionFeeEft : Bloomerang.transactionFee)) / (1 - feeRate);
  var impactAmount = Number((newTotal - amount).toFixed(2));
  jQuery(".donation-form .true-impact .fee-amount").text(accounting.formatMoney(impactAmount));
  return impactAmount;
};
Bloomerang.Util.getDonationTrueImpactAmount = function() {
  if (jQuery(".donation-form .true-impact input:checked").length) {
    return Bloomerang.Util.calculateDonationTrueImpact();
  }
  return 0;
};

// Changing the value of other-amount should change the value of other-option
jQuery(".donation-form #other-amount").change(function () {
  jQuery(".donation-form #other-option").val(jQuery(this).val());
  Bloomerang.Util.calculateDonationTrueImpact();
});

jQuery(".donation-form #donation-amount").change(function() {
  Bloomerang.Util.calculateDonationTrueImpact();
});

// Clicking into the other-amount field should select the other-option
jQuery(".donation-form #other-amount").click(function() {
  jQuery(".donation-form #other-option").prop('checked',true);
  toggleOtherAmountRequired();
  Bloomerang.Util.calculateDonationTrueImpact();
});

jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
    var digits = phone_number.replace(/\D/g, "");
    return this.optional(element) || digits.length == 7 || digits.length == 10 || digits.length == 11;
}, "Please specify a valid phone number or use '+' for international.");

jQuery.validator.addMethod("phoneInternational", function (phone_number, element) {
    return this.optional(element) || /^\+[0-9\-\(\)\s.]+$/i.test(phone_number);
}, "Please specify a valid phone number.");
jQuery.validator.classRuleSettings.phoneInternational = { phoneInternational: true };

jQuery.validator.addMethod("zipcodeUS", function (value, element) {
    return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value)
}, "The specified US ZIP Code is invalid");

jQuery.validator.addMethod("currency", function (value, element, options) {
    return !value ||
        value
          .replace("$", "")
          .replace(".", "")
          .split(",").join("")
          .match(/^\d+$/g);
}, "Not a valid currency");

jQuery.validator.classRuleSettings.currency = { currency: true };

// Validate the other amount, but only if they selected it
jQuery.validator.addMethod("otherAmount", function(value, element, param) {
  if (jQuery(".donation-form #other-option").prop("checked")) {
    return jQuery.validator.methods.min.bind(this)(value, element, 1) &&
      jQuery.validator.methods.currency(value, element);
  }
  return true;
}, "Invalid amount");

jQuery.validator.classRuleSettings.otherAmount = { otherAmount: true };

jQuery.validator.addMethod("number", function (value, element, options) {
  return !value ||
      value
        .replace(".", "")
        .split(",").join("")
        .match(/^\d+$/g);
}, "Not a valid number");

jQuery.validator.classRuleSettings.number = { number: true };

jQuery.validator.addMethod("validYear", function (value, element, options) {
    try {
        return (!value || value.match(/^[1-9]\d\d\d$/)) ? true : false;
    }
    catch (e) {
        return false;
    }
}, function () { return "Must be a 4 digit year"; });

jQuery.validator.classRuleSettings.validYear = { validYear: true };

// Validate that the donation amount is at least $1
jQuery.validator.methods.min = function( value, element, param ) {
  if (typeof (accounting) === "undefined") { // rip out $ and ,
      value = ((value + "") || "").replace(/[\$,]/g, "");
  }
  else { // Use accounting.parse, to handle $ and ,
      value = accounting.parse(value);
  }
  return this.optional( element ) || value >= param;
};
jQuery.validator.classRuleSettings.minimum1 = { min: 1 };
jQuery.validator.messages.min = 'Please enter a value of at least {0}.'

jQuery(".donation-form #country").change(function(event) {
  var element = jQuery(event.target || event.srcElement); // cross-browser event target selection
  var isInternational = (element.val() != "US" && element.val() != "CA" && element.val() != "BM");
  jQuery(".donation-form #state, .donation-form #province").val(""); // clear the state when the country changes
  jQuery(".donation-form .field.city, .donation-form .field.state, .donation-form .field.province, .donation-form .field.zip-code, .donation-form .field.postal-code").toggle(!isInternational);
  jQuery(".donation-form #street-address").toggleClass("international", isInternational);
  if (element.val() == "BM") {
    jQuery(".donation-form .field.city .label").text(jQuery(".donation-form .field.city input").data("bm-label"));
  } else if (element.val() == "US" || element.val() == "CA") {
    jQuery(".donation-form .field.city .label").text(jQuery(".donation-form .field.city input").data("us-label"));
  }
  if (element.val() == "US") {
    jQuery(".donation-form .field.state, .donation-form .field.zip-code").show();
    jQuery(".donation-form .field.province, .donation-form .field.postal-code").hide();
  } else if (element.val() == "CA") {
    jQuery(".donation-form .field.state, .donation-form .field.zip-code").hide();
    jQuery(".donation-form .field.province, .donation-form .field.postal-code").show();
  } else if (element.val() == "BM") {
    jQuery(".donation-form .field.state, .donation-form .field.province, .donation-form .field.zip-code").hide();
    jQuery(".donation-form .field.postal-code").show();
  } else {
    jQuery(".donation-form #city, .donation-form #postal-code, .donation-form #zip-code").val("");
  }
  jQuery(".donation-form .section.consent").toggleClass("hidden", !Bloomerang.Util.isCountryInEurope(element.val()));
});

jQuery(".donation-form #phone-number").change(function () {
  var phoneField = jQuery(".donation-form #phone-number");
  var internationalNumber = phoneField.val().substring(0,1) === '+';
  phoneField.toggleClass("phoneUS", !internationalNumber);
  phoneField.toggleClass("phoneInternational", internationalNumber);
})

collectPayment = function () {
  var form = jQuery("#donation-form");

  if (!Bloomerang.ValidateDonationFormCaptcha()) {
    return false;
  }

  if (!form.valid()) {
    return false;
  }

  if (jQuery("#donation-form #CreditCard").length > 0 && !jQuery("#donation-form #CreditCard").prop("checked")) {
    submitDonation();
  }
  else {
    var val = function (selector) { return jQuery(selector).val(); };
    var amount = Bloomerang.Util.getDonationAmount() + Bloomerang.Util.getDonationTrueImpactAmount();
    var selectedDonationLevel = jQuery(".donation-form .section.donation input[name='donation-level']:checked").parent().text();
    selectedDonationLevel = (selectedDonationLevel.indexOf("-") == -1 ? "" : selectedDonationLevel.substr(selectedDonationLevel.indexOf("-") + 2) );

    SpreedlyExpress.setDisplayOptions({
      "amount": accounting.formatMoney(amount),
      "full_name": val(".donation-form #first-name") + " " + val(".donation-form #last-name"),
      "sidebar_bottom_description": selectedDonationLevel,
      "submit_label": "Donate"});
    SpreedlyExpress.setPaymentMethodParams({
      "email": val(".donation-form #email-address"),
      "phone_number": val(".donation-form #phone-number"),
      "address1": val(".donation-form #street-address"),
      "city": val(".donation-form #city"),
      "state": val(".donation-form #state") || val(".donation-form #province"),
      "zip": val(".donation-form #zip-code") || val(".donation-form #postal-code"),
      "country": val(".donation-form #country")});

    SpreedlyExpress.onPaymentMethod(function(token, paymentMethod) {
      Bloomerang.CreditCard.spreedlyToken(token);
        submitDonation();
      });

    var oldMeta = '';
    if (jQuery('meta[name="viewport"]').length) {
      oldMeta = jQuery('meta[name="viewport"]').attr('content');
    } else {
      jQuery('head').append('<meta name="viewport" content="" />');
    }
    jQuery('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1');
    jQuery('meta[name="viewport"]').attr('content', oldMeta);

    SpreedlyExpress.openView();
  }
};

submitDonation = function() {
  if (!Bloomerang.continueFinancialSubmission(jQuery("#donation-form"))) { return false; }

  Bloomerang.Api.OnSubmit = Bloomerang.Widget.Donation.OnSubmit;
  Bloomerang.Api.OnSuccess = Bloomerang.Widget.Donation.OnSuccess;
  Bloomerang.Api.OnError = Bloomerang.Widget.Donation.OnError;

  var processingMessage = jQuery("#donation-processing-container");
  processingMessage.show();
  jQuery("#donation-form-container").hide();
  Bloomerang.scrollToElement(processingMessage);

  var tmp = jQuery(".donation-form #recurring").prop("checked")
    ? Bloomerang.Api.recurringDonate()
    : Bloomerang.Api.donate();
};

jQuery("#donation-form #CreditCard").prop("checked", true);
jQuery("#donation-form .section.payment input[type='radio']").click(function() {
  Bloomerang.Util.calculateDonationTrueImpact();
  if (jQuery(this).attr("id") == "CreditCard") {
    jQuery("#donation-form .accountNumber, \
            #donation-form .routingNumber, \
            #donation-form .sample-check").hide();
    jQuery(".btn-submit-donation").val("Enter Payment");
  }
  else {
    jQuery("#donation-form .accountNumber, \
            #donation-form .routingNumber, \
            #donation-form .sample-check").show();
    if (jQuery("#donation-form .sample-check").length == 0) {
      var checkImage = new Image();
      checkImage.src = 'https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/public-gallery/SampleCheck.png';
      jQuery(checkImage).addClass("sample-check");
      jQuery("#donation-form .accountNumber").after(checkImage);
    }
    jQuery(".btn-submit-donation").val("Donate");
  }
});

// Show opt-in options based on the setting of the global opt-in
jQuery(".donation-form .field.consent-all").change(function() {
  jQuery(".donation-form .field.consent-all").siblings().each(function(i, e) {
      jQuery(e).toggle();
  });
});

})(jQuery); };

var startBloomerangLoad = function() {
    if (window.bloomerangLoadStarted == undefined) {
        window.bloomerangLoadStarted = true;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://crm.bloomerang.co/Content/Scripts/Api/Bloomerang-v2.js?nocache=2018-05-30';
        document.getElementsByTagName('head')[0].appendChild(script);
        waitForBloomerangLoad(function() { Bloomerang.Util.requireJQueryValidation(function() { insertForm16908288(); })});
    } else {
        waitForBloomerangLoad(function() { Bloomerang.Util.requireJQueryValidation(function() { insertForm16908288(); })});
    }
};

var waitForBloomerangLoad = function(callback) {
    if (typeof(Bloomerang) === 'undefined' || !Bloomerang._isReady) {
        setTimeout(function () { waitForBloomerangLoad(callback) }, 500);
    }
    else {
        if (true) {
            callback();
        } else {
            window.bloomerangLoadStarted = undefined;
            Bloomerang = undefined; // The version of Blomerang.js is not what we want. So blow it away and reload.
            startBloomerangLoad();
        }
    }
};

startBloomerangLoad();