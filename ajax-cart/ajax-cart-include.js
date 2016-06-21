// Start DPD Shipping plugin //

var shippingMethod = 'address',
    $drawerForm = $('.drawer form[action*="/cart"]'),
    drawerFormAction = $drawerForm.attr('action'),
    drawerFormActionSuffix = 'method=address&step=contact_information';

if(drawerFormAction.indexOf('?') > 0) {
  $drawerForm.attr('action', drawerFormAction + '&' + drawerFormActionSuffix);
} else {
  $drawerForm.attr('action', drawerFormAction + '?' + drawerFormActionSuffix);
}

$('.drawer input[name="sw-ajax-method"]').change(function() {
  shippingMethod = $(this).attr('id').replace('sw-method-', '');
});

$drawerForm.submit(function(e) {
  if(shippingMethod === 'store' || shippingMethod === 'pickup-parcel') {
    e.preventDefault();
    var url = '/cart#' + shippingMethod;

    window.location = url;

    if(window.location.href == window.location.origin + url) {
      $('#CartDrawer .js-drawer-close button').trigger('click');
      setTimeout(function() {
        dpd.tabs();
      }, 1000);
    }
  }
});

// End DPD Shipping plugin //
