// Start DPD Shipping plugin //
    
var shippingMethod = 'address',
    $drawerForm = $('.drawer form[action="/cart"]');

$('.drawer input[name="sw-ajax-method"]').change(function() {
  shippingMethod = $(this).val();
});

$drawerForm.attr('action', '/cart?method=address&step=contact_information');

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