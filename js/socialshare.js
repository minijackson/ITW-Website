$(document).ready(function() {

	$("footer div.social-networks").socialSharePrivacy({
		services : {
			facebook : {
				'status' : 'on',
				'txt_info' : '2 clicks for increased privacy: Only after clicking here the button will become active and allow connecting to Facebook. Data will already be transferred upon activation &ndash; see <em>i</em>',
				'txt_fb_off' : 'not connected to Facebook',
				'txt_fb_on' : 'connected to Facebook',
				'display_name' : 'Facebook',
				'language' : 'en_US',
				'action' : 'like',
				'dummy_caption'	: 'Like'
			},
			twitter : {
				'status' : 'on',
				'txt_info' : '2 clicks for increased privacy: Only after clicking here the button will become active and allow connecting to Twitter. Data will already be transferred upon activation &ndash; see <em>i</em>',
				'txt_twitter_off' : 'not connected to twitter',
				'txt_twitter_on' : 'connected to twitter',
				'display_name' : 'Twitter',
				'language' : 'en',
				'dummy_caption'	: 'Tweet'
			},
			gplus : {
				'status' : 'on',
				'txt_info' : '2 clicks for increased privacy: Only after clicking here the button will become active and allow connecting to Google+. Data will already be transferred upon activation &ndash; see <em>i</em>',
				'txt_glus_off' : 'not connected to google+',
				'txt_gplus_on' : 'connected to google+',
				'display_name' : 'Google+',
				'language' : 'en'
			}
		},
		'info_link' : '',
		'txt_help' : 'If you activate these buttons, data will be transferred to Facebook, Twitter or Google in the USA. This data might also be stored there.',
		'settings_perma' : 'Activate permanently and confirm transfer of data:'
	});

});
