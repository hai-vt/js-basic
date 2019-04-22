$('.header-panel .dropdown-title').on('click', function (event) {
    event.preventDefault();

    $(this).closest('.dropdown-item').siblings().removeClass('active');
    $(this).closest('.dropdown-item').addClass('active');
});

$('body').on('click.OffPanelMenu', function() {
    $('.header-panel .dropdown-item').removeClass('active');
}).off('click.OffPanelMenu');
