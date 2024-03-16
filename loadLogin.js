import { getServerURL, getAccessTokenHeaders } from './localStorages.ts';

$.ajax({
    url: getServerURL() + '/users/me',
    type: 'GET',
    headers: getAccessTokenHeaders(),
    error: function (data) {
        $('#app').hide();
        $('.login-container').load('login.html').show();
    }
})
