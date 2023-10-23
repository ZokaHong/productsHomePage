$(document).ready(function () {
    $('.btn_profile_action').mouseenter(function () {
        $(this).css('background-color', '#e9edc9');
        $(this).css('color', '#03045e');
    });
    $('.btn_profile_action').mouseleave(function () {
        $(this).css('background-color', '#eef0f2');
        $(this).css('color', '#000');
    });

    $('.game-info').mouseenter(function () {
        $(this).css('color', '#fff');
    });
    $('.game-info').mouseleave(function () {
        $(this).css('color', '#000');
    });

    $('.profile-link').mouseenter(function () {
        $(this).css('color', '#fff');
        $(this).css('text-decoration', 'underline');
    });
    $('.profile-link').mouseleave(function () {
        $(this).css('color', '#000');
        $(this).css('text-decoration', 'none');
    });

    $('.friend-list').mouseenter(function () {
        $(this).css('background-color', 'red');
    });

    $('.friend-list').mouseleave(function () {
        $(this).css('background-color', 'rgba(242, 232, 244, 0.638)b(0, 187, 255)');
    });
});
